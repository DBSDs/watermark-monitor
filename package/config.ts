import { IWaterMark } from "./type";

export const defaultSettings: IWaterMark = {
  watermark_id: "wm_div_id",
  watermark_prefix: "mask_div_id",
  watermark_txt: "测试水印",
  watermark_x: 20,
  watermark_y: 150,
  watermark_rows: 0,
  watermark_cols: 0,
  watermark_x_space: 100,
  watermark_y_space: 200,
  watermark_font: "微软雅黑",
  watermark_color: "black",
  watermark_fontsize: "18px",
  watermark_alpha: 0.15, //
  watermark_width: 400,
  watermark_height: 300,
  watermark_angle: 15,
  watermark_parent_width: 0,
  watermark_parent_height: 0,
  watermark_parent_node: "body", //
  monitor: true, // monitor 是否监控， true: 不可删除水印;
};
