![Logo](https://xiaoji.com/uploads/20250427/82572411dc4d8c4f53be903e2317d789.png) 

#   盖世小鸡特效组件库 (Gamesir Magic UI Components Library)
[简体中文](#简体中文) | [English](#english)

---

## 简体中文

### 项目介绍

欢迎来到盖世小鸡特效组件库！这是一个由**盖世游戏项目组**精心设计和开发的前端组件库。我们致力于提供一系列高性能、富有创意且易于使用的特效组件，旨在为您的 Web 应用增添独特的视觉魅力和用户体验。本组件库注重细节，优化性能，确保在各种设备和场景下都能流畅运行。

### 必要信息

#### 安装/获取组件库

目前组件库尚未发布到公共注册表。您可以通过以下方式获取：

```bash
# 占位符：如果组件库发布到 npm 或 yarn，将在此处提供安装命令
# npm install gamesir-magic-ui
# yarn add gamesir-magic-ui
```

#### 运行示例或预览页面

克隆本项目后，您可以通过以下命令运行示例或预览页面：

```bash
npm install
npm run dev
```

### 组件使用方法

#### GlowingCard 组件

`GlowingCard` 是一个带有动态辉光边框效果的卡片组件，当鼠标悬停在其上时，辉光会以动画形式出现和消失，为您的内容区域提供吸引人的视觉焦点。

![GlowingCard 示例](https://github.com/songjingwei/gamesir-assets/blob/main/glowing-card.jpg?raw=true)

**动画行为更新：**

*   **`--rim-angle` 动画**：鼠标离开时，`--rim-angle` 动画现在使用 `linear` 缓动函数，确保动画平滑过渡。
*   **动态过渡**：`opacity` 和 `--rim-angle` 的过渡效果会根据鼠标进入 (`isEntering`) 或离开 (`isLeaving`) 状态进行动态调整，提供更自然的用户体验。

**导入和使用：**

```tsx
import React from 'react';
import { GlowingCard } from './src/components/GlowingCard'; // 请根据实际路径调整

const MyComponent = () => {
  return (
    <GlowingCard width={300} height={200} borderRadius="20px">
      <div style={{ padding: '20px', color: 'white' }}>
        <h2>这是我的卡片标题</h2>
        <p>卡片内容放这里。</p>
      </div>
    </GlowingCard>
  );
};

export default MyComponent;
```
**`IGlowingCardProps` 接口属性：** ⚙️

| 属性名 | 类型 | 默认值 | 描述 |
| :------- | :----- | :------ | :----------- |
| `children` | `React.ReactElement` | `undefined` | 卡片内部渲染的 React 元素。 |
| `width` | `number` | `必填` | 卡片的宽度，单位为像素 (px)。 |
| `height` | `number` | `必填` | 卡片的高度，单位为像素 (px)。 |
| `borderRadius` | `string` | `'16px'` | 卡片的圆角半径，支持 CSS 单位 (如 `px`, `rem`, `%`)。 |
| `hoverScale` | `number` | `1.0` | 鼠标悬停时卡片的放大倍数，默认为 `1.0` (即不放大)。 |

## English

### Project Introduction

Welcome to Gamesir Magic UI Components Library! 🌟 This is a frontend component library meticulously designed and developed by the **Gamesir Game Project Team**. We are dedicated to providing a series of high-performance, creative, and easy-to-use special effects components, aiming to add unique visual charm and enhance user experience for your Web applications. This library focuses on details and performance optimization, ensuring smooth operation across various devices and scenarios. ✨

### Essential Information

#### Installation/Acquisition

Currently, the component library is not yet published to a public registry. You can acquire it by cloning this repository:

```bash
# Placeholder: Installation commands will be provided here once the library is published to npm or yarn
# npm install gamesir-magic-ui
# yarn add gamesir-magic-ui
```

#### Running Examples or Preview Pages

After cloning this project, you can run examples or preview pages using the following commands:

```bash
npm install
npm run dev
```

### Component Usage

#### GlowingCard Component

`GlowingCard` is a card component with a dynamic glowing border effect. When the mouse hovers over it, the glow appears and disappears with an animation, providing an attractive visual focus for your content area. 🤩

![GlowingCard Example](https://github.com/songjingwei/gamesir-assets/blob/main/glowing-card.jpg?raw=true)

**Animation Behavior Updates:**

*   **`--rim-angle` Animation**: When the mouse leaves, the `--rim-angle` animation now uses a `linear` easing function for smoother transitions.
*   **Dynamic Transitions**: The `opacity` and `--rim-angle` transition effects dynamically adjust based on the mouse entering (`isEntering`) or leaving (`isLeaving`) states, providing a more natural user experience.

**Import and Usage:**

```tsx
import React from 'react';
import { GlowingCard } from './src/components/GlowingCard'; // Adjust path as needed

const MyComponent = () => {
  return (
    <GlowingCard width={300} height={200} borderRadius="20px">
      <div style={{ padding: '20px', color: 'white' }}>
        <h2>My Card Title</h2>
        <p>Card content goes here.</p>
      </div>
    </GlowingCard>
  );
};

export default MyComponent;
```

**`IGlowingCardProps` Interface Properties:** ⚙️

| Prop Name | Type | Default Value | Description |
| :------- | :----- | :------ | :----------- |
| `children` | `React.ReactElement` | `undefined` | The React element to be rendered inside the card. |
| `width` | `number` | `Required` | The width of the card in pixels (px). |
| `height` | `number` | `Required` | The height of the card in pixels (px). |
| `borderRadius` | `string` | `'16px'` | The border-radius of the card, supporting CSS units (e.g., `px`, `rem`, `%`). |
| `hoverScale` | `number` | `1.0` | The scaling factor of the card on hover, defaults to `1.0` (no scaling). |

## 🌟 特性 (Features)

-   **高性能动画**：采用 `motion` 库实现流畅、响应式的动画效果。
-   **高度可定制**：通过 `props` 轻松调整组件的样式和行为。
-   **开箱即用**：提供即插即用的组件，快速集成到您的项目中。
-   **TypeScript 支持**：提供完整的类型定义，增强开发体验。

## 🚀 开发 (Development)

本项目使用 `Vite` 作为构建工具，`React` 作为前端框架。

### 环境准备

确保您的开发环境已安装 `Node.js` (推荐 v16+) 和 `pnpm` (或 `npm`/`yarn`)。

```bash
# 推荐使用 pnpm
npm install -g pnpm
```

### 本地开发

1.  克隆仓库：
    ```bash
    git clone https://github.com/your-username/gamesir-magic-ui.git
    cd gamesir-magic-ui
    ```
2.  安装依赖：
    ```bash
    pnpm install
    # 或者 npm install / yarn install
    ```
3.  启动开发服务器：
    ```bash
    pnpm run dev
    # 或者 npm run dev / yarn dev
    ```
    这将在本地启动一个开发服务器，通常在 `http://localhost:5173`。

### 构建项目

```bash
pnpm run build
# 或者 npm run build / yarn build
```
构建后的文件将输出到 `dist` 目录。

## 🤝 贡献 (Contributing)

我们非常欢迎社区的贡献！如果您有任何想法、建议或发现了 bug，请随时通过以下方式联系我们：

-   提交 [Issue](https://github.com/your-username/gamesir-magic-ui/issues)
-   提交 [Pull Request](https://github.com/your-username/gamesir-magic-ui/pulls)

在提交 PR 之前，请确保您的代码符合项目规范并通过所有测试。

## 📜 许可证 (License)

本项目采用 [MIT License](https://opensource.org/licenses/MIT) 开源。

---

Made with ❤️ by Gamesir Gamehub Project Team

