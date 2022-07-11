import { IWaterMark } from "./type";
import { defaultSettings } from "./config";

/** 用户设置变量 */
let globalSetting: IWaterMark = defaultSettings;

let forceRemove = false;

// 监听dom是否被移除或者改变属性的回调函数
let domChangeCallback = function (records: MutationRecord[]) {
  if (forceRemove) {
    forceRemove = false;

    return;
  }
  if (
    (records.length === 1 &&
      (records[0].removedNodes[0]?.["id"] === globalSetting.watermark_id ||
        String(
          (records[0].target.parentNode?.["id"]).includes(
            globalSetting.watermark_prefix
          )
        ))) ||
    (records.length === 1 &&
      records[0].target?.["id"] === globalSetting.watermark_id) ||
    (records.length === 2 &&
      (records[0].target?.["id"] === globalSetting.watermark_id ||
        records[0].target?.["id"].includes(globalSetting.watermark_prefix))) ||
    (records[0].removedNodes[0]?.["id"] === globalSetting.watermark_id &&
      records.every((item) => !item.addedNodes.length))
  ) {
    loadMark(globalSetting);
  }
};

const option = {
  attributeFilter: ["style"],
  attributeOldValue: true,
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
};

let MutationObserver: {
  new (callback: MutationCallback): MutationObserver;
  prototype: MutationObserver;
};

let watermarkDom: MutationObserver;

/* 加载水印 */
function loadMark(setting?: Partial<IWaterMark>) {
  MutationObserver = MutationObserver ?? window.MutationObserver;

  watermarkDom = watermarkDom ?? new MutationObserver(domChangeCallback);

  globalSetting = { ...defaultSettings, ...setting };

  /* 如果元素存在则移除*/
  let watermark_element = document.getElementById(globalSetting.watermark_id);

  watermark_element &&
    watermark_element.parentNode &&
    watermark_element.parentNode.removeChild(watermark_element);

  /* 如果设置水印挂载的父元素的id*/
  let watermark_parent_element = document.getElementById(
    globalSetting.watermark_parent_node
  );
  let watermark_hook_element = watermark_parent_element
    ? watermark_parent_element
    : document.body;

  /* 获取页面宽度*/
  let page_width = Math.max(
    watermark_hook_element.scrollWidth,
    watermark_hook_element.clientWidth
  );
  /* 获取页面最大长度*/
  let page_height = Math.max(
    watermark_hook_element.scrollHeight,
    watermark_hook_element.clientHeight
  );

  let parentEle = watermark_hook_element;

  let page_offsetTop = 0;
  let page_offsetLeft = 0;
  if (
    setting &&
    (setting.watermark_parent_width || setting.watermark_parent_height)
  ) {
    /* 指定父元素同时指定了宽或高*/
    if (parentEle) {
      page_offsetTop = parentEle.offsetTop || 0;
      page_offsetLeft = parentEle.offsetLeft || 0;
      globalSetting.watermark_x = globalSetting.watermark_x + page_offsetLeft;
      globalSetting.watermark_y = globalSetting.watermark_y + page_offsetTop;
    }
  } else {
    if (parentEle) {
      page_offsetTop = parentEle.offsetTop || 0;
      page_offsetLeft = parentEle.offsetLeft || 0;
    }
  }

  /* 创建水印外壳div*/
  let otdiv = document.getElementById(globalSetting.watermark_id);

  if (!otdiv) {
    otdiv = document.createElement("div");
    /* 创建shadow dom*/
    otdiv.id = globalSetting.watermark_id;
    otdiv.setAttribute(
      "style",
      "pointer-events: none !important; display: block !important"
    );
    /* 将shadow dom随机插入body内的任意位置*/
    let nodeList = watermark_hook_element.children;
    let index = Math.floor(Math.random() * (nodeList.length - 1));
    if (nodeList[index]) {
      watermark_hook_element.insertBefore(otdiv, nodeList[index]);
    } else {
      watermark_hook_element.appendChild(otdiv);
    }
  }

  /* 三种情况下会重新计算水印列数和x方向水印间隔：1、水印列数设置为0，2、水印宽度大于页面宽度，3、水印宽度小于于页面宽度*/
  globalSetting.watermark_cols = Number(
    (page_width - globalSetting.watermark_x) /
      (globalSetting.watermark_width + globalSetting.watermark_x_space)
  );

  let temp_watermark_x_space = Number(
    (page_width -
      globalSetting.watermark_x -
      globalSetting.watermark_width * globalSetting.watermark_cols) /
      globalSetting.watermark_cols
  );

  globalSetting.watermark_x_space = temp_watermark_x_space
    ? globalSetting.watermark_x_space
    : temp_watermark_x_space;
  let allWatermarkWidth;

  /* 三种情况下会重新计算水印行数和y方向水印间隔：1、水印行数设置为0，2、水印长度大于页面长度，3、水印长度小于于页面长度*/
  globalSetting.watermark_rows = Number(
    (page_height - globalSetting.watermark_y) /
      (globalSetting.watermark_height + globalSetting.watermark_y_space)
  );

  let temp_watermark_y_space = Number(
    (page_height -
      globalSetting.watermark_y -
      globalSetting.watermark_height * globalSetting.watermark_rows) /
      globalSetting.watermark_rows
  );

  globalSetting.watermark_y_space = temp_watermark_y_space
    ? globalSetting.watermark_y_space
    : temp_watermark_y_space;
  let allWatermarkHeight: number;

  if (watermark_parent_element) {
    allWatermarkWidth =
      globalSetting.watermark_x +
      globalSetting.watermark_width * globalSetting.watermark_cols +
      globalSetting.watermark_x_space * (globalSetting.watermark_cols - 1);
    allWatermarkHeight =
      globalSetting.watermark_y +
      globalSetting.watermark_height * globalSetting.watermark_rows +
      globalSetting.watermark_y_space * (globalSetting.watermark_rows - 1);
  } else {
    allWatermarkWidth =
      page_offsetLeft +
      globalSetting.watermark_x +
      globalSetting.watermark_width * globalSetting.watermark_cols +
      globalSetting.watermark_x_space * (globalSetting.watermark_cols - 1);
    allWatermarkHeight =
      page_offsetTop +
      globalSetting.watermark_y +
      globalSetting.watermark_height * globalSetting.watermark_rows +
      globalSetting.watermark_y_space * (globalSetting.watermark_rows - 1);
  }
  let x: number, y: number;
  for (let i = 0; i < globalSetting.watermark_rows; i++) {
    if (watermark_parent_element) {
      y =
        page_offsetTop +
        globalSetting.watermark_y +
        (page_height - allWatermarkHeight) / 2 +
        (globalSetting.watermark_y_space + globalSetting.watermark_height) * i;
    } else {
      y =
        globalSetting.watermark_y +
        (page_height - allWatermarkHeight) / 2 +
        (globalSetting.watermark_y_space + globalSetting.watermark_height) * i;
    }
    for (let j = 0; j < globalSetting.watermark_cols; j++) {
      if (watermark_parent_element) {
        x =
          page_offsetLeft +
          globalSetting.watermark_x +
          (page_width - allWatermarkWidth) / 2 +
          (globalSetting.watermark_width + globalSetting.watermark_x_space) * j;
      } else {
        x =
          globalSetting.watermark_x +
          (page_width - allWatermarkWidth) / 2 +
          (globalSetting.watermark_width + globalSetting.watermark_x_space) * j;
      }
      let mask_div = document.createElement("div");
      let oText = document.createTextNode(globalSetting.watermark_txt);
      mask_div.appendChild(oText);
      /* 设置水印相关属性start*/
      mask_div.id = globalSetting.watermark_prefix + i + j;
      /* 设置水印div倾斜显示*/
      mask_div.style.transform =
        "rotate(-" + globalSetting.watermark_angle + "deg)";
      mask_div.style.visibility = "";
      mask_div.style.position = "fixed";
      /* 选不中*/
      mask_div.style.left = `${x}px`;
      mask_div.style.top = `${y}px`;
      mask_div.style.overflow = "hidden";
      mask_div.style.zIndex = "9999999";
      mask_div.style.opacity = `${globalSetting.watermark_alpha}`;
      mask_div.style.fontSize = globalSetting.watermark_fontsize;
      mask_div.style.fontFamily = globalSetting.watermark_font;
      mask_div.style.color = globalSetting.watermark_color;
      mask_div.style.textAlign = "center";
      mask_div.style.width = globalSetting.watermark_width + "px";
      mask_div.style.height = globalSetting.watermark_height + "px";
      mask_div.style.display = "block";
      otdiv.appendChild(mask_div);
    }
  }

  // monitor 是否监控， true: 不可删除水印; false: 可删水印。
  const minotor = globalSetting.monitor;
  if (minotor) {
    watermarkDom.observe(document.body.getRootNode(), option);
    watermarkDom.observe(
      (
        document.getElementById(globalSetting.watermark_id) as any
      ).getRootNode(),
      option
    );
  }
}

/* 移除水印*/
function removeMark() {
  forceRemove = true;
  /* 移除水印*/
  let watermark_element = document.getElementById(globalSetting.watermark_id);
  if (watermark_element) {
    let _parentElement = watermark_element.parentNode;
    if (_parentElement) _parentElement.removeChild(watermark_element);
    // :ambulance: remove()
    // minotor 这个配置有些冗余
    // 如果用 MutationObserver 来监听dom变化防止删除水印
    // remove() 方法里用 MutationObserver 的 disconnect() 解除监听即可
    watermarkDom.disconnect();
  }
}

const watermark = {
  loadMark,
  removeMark,
};

export default watermark;
