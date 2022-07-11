

<div align="center">
  
  [![logo-3.png](https://i.postimg.cc/0N8f82kn/logo-3.png)](https://postimg.cc/v4N9hy6x)
</div>

---

<div align="center">

网页水印组件，给你的网站上添加水印，防止被删除。

[![npm download](https://img.shields.io/npm/dw/watermark-monitor)](https://www.npmjs.com/package/watermark-monitor)
[![npm license](https://img.shields.io/npm/l/watermark-monitor)](https://www.npmjs.com/package/watermark-monitor)
[![npm type definitions](https://img.shields.io/npm/types/badge-maker)](https://www.npmjs.com/package/watermark-monitor)

</div>

---

## ✡️特性
- 支持自定义水印文字，开箱即用
- 监听水印Dom - 防止他人删除水印dom或修改样式属性
- 使用 TypeScript 编写，提供完善的类型定义
- 使用原生 javascript Api，支持跨框架使用

## 📦安装

```bash
// npm
npm install watermark-monitor --save

//yarn
yarn add watermark-monitor
```

## 🔨用法

```js
import watermark from "watermark-monitor";

// 加载配置 && 更新配置
watermark.loadMark();  

// 移除水印
watermark.removeMark(); 
```

##  👀线上Demo

* [在线预览](https://dbsds.github.io/watermark-monitor/)

## 🚀最新进展

* 2020/7/12: [fix] 修复了编辑样式可能会使水印消失的缺陷

* 未来: 覆盖单元测试用例 
---

## ❤️感谢

- [watermark-dom](https://github.com/saucxs/watermark-dom)
- [watermark](https://github.com/pansyjs/watermark)