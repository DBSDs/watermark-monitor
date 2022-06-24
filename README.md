

# watermark-monitor

网页水印组件，给你的网站上添加水印，防止被删除。


---

## 特性

- 支持自定义水印文字，开箱即用
- 监听水印Dom - 防止他人删除水印dom或修改样式属性
- 使用 TypeScript 编写，提供完善的类型定义

## 安装

```bash
npm install watermark-monitor --save
```

## 用法

```js
import watermark from "watermark-monitor";

watermark.loadMark();
watermark.removeMark();
```

##  线上Demo

[在线预览](https://dbsds.github.io/watermark-monitor/)


---

##  感谢

- [watermark-dom](https://github.com/saucxs/watermark-dom)
- [watermark](https://github.com/pansyjs/watermark)