

# 🌟watermark-monitor

网页水印组件，给你的网站上添加水印，防止被删除。

<div align="center">

[![npm download](https://img.shields.io/npm/dw/watermark-monitor)](https://www.npmjs.com/package/watermark-monitor)
[![npm license](https://img.shields.io/npm/l/watermark-monitor)](https://www.npmjs.com/package/watermark-monitor)
[![npm type definitions](https://img.shields.io/npm/types/badge-maker)](https://www.npmjs.com/package/watermark-monitor)

</div>

---

## ✡️特性

- 支持自定义水印文字，开箱即用
- 监听水印Dom - 防止他人删除水印dom或修改样式属性
- 使用 TypeScript 编写，提供完善的类型定义
- 使用原生 javascript，跨框架使用

## 📦安装

```bash
npm install watermark-monitor --save
```

## 🔨用法

```js
import watermark from "watermark-monitor";

watermark.loadMark();
watermark.removeMark();
```

##  👀线上Demo

[在线预览](https://dbsds.github.io/watermark-monitor/)


## 最新进展

* 2020/7/12: [fix] 修复了编辑样式可能会使水印消失的缺陷，可以在ssr端直接调用

* future: 覆盖单元测试用例 
---

## 感谢

- [watermark-dom](https://github.com/saucxs/watermark-dom)
- [watermark](https://github.com/pansyjs/watermark)