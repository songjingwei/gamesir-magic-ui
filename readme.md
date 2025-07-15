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

`GlowingCard` 是一个带有动态辉光边框效果的卡片组件，当鼠标悬停在其上时，辉光会以动画形式出现和消失，为您的内容区域提供吸引人的视觉焦点。默认情况下，它会填充其父容器的整个空间（`w-full h-full`），您也可以通过 `className` 自定义其尺寸。

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
    <div style={{ width: '300px', height: '200px' }} className="mt-10">
      <GlowingCard className="rounded-2xl" borderRadius="1rem">
        <div style={{ padding: '20px', color: 'white' }}>
          <h2>这是我的卡片标题</h2>
          <p>卡片内容放这里。</p>
        </div>
      </GlowingCard>
    </div>
  );
};

export default MyComponent;
```
**`IGlowingCardProps` 接口属性：** ⚙️

| 属性名 | 类型 | 默认值 | 描述 |
| :------- | :----- | :------ | :----------- |
| `children` | `React.ReactElement` | `undefined` | 卡片内部渲染的 React 元素。 |
| `width` | `number` | `可选` | 卡片的宽度，单位为像素 (px)。不设置时，默认为 `w-full`。 |
| `height` | `number` | `可选` | 卡片的高度，单位为像素 (px)。不设置时，默认为 `h-full`。 |
| `hoverScale` | `number` | `1.0` | 鼠标悬停时卡片的放大倍数，默认为 `1.0` (即不放大)。 |
| `className` | `string` | `''` | 传递自定义的 Tailwind CSS 类名。 |
| `blurRadius` | `string` | `'8px'` | 控制辉光模糊的半径，支持 px、rem 等 css 单位。 |
| `borderRadius` | `string` | `可选` | 设置卡片的圆角半径，支持 px、rem 等 css 单位。 |

#### NetworkSpeedVisualizer 组件

`NetworkSpeedVisualizer` 是一个用于可视化网络速度的动态柱状图组件。它能够实时展示网络速度的变化，通过柱子的高度和透明度来直观地反映速度的波动。柱子从左到右，透明度逐渐提高（越靠左越暗），模拟信号逐渐增强的视觉效果。

![NetworkSpeedVisualizer 示例](https://github.com/songjingwei/gamesir-assets/blob/main/network-speed-visualizer.jpg?raw=true) <!-- 请替换为实际的截图链接 -->

**导入和使用：**

```tsx
import React, { useState, useEffect } => from 'react';
import NetworkSpeedVisualizer from './src/components/NetworkSpeedVisualizer'; // 请根据实际路径调整

const MyNetworkMonitor = () => {
  const [speed, setSpeed] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // 模拟随机的网络速度，范围 0-10000 kbps
      setSpeed(Math.floor(Math.random() * 10000));
    }, 500); // 每 500ms 更新一次

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '400px', height: '150px', backgroundColor: '#333' }}>
      <NetworkSpeedVisualizer speed={speed} maxSpeed={10000} />
    </div>
  );
};

export default MyNetworkMonitor;
```

**`NetworkSpeedVisualizerProps` 接口属性：** ⚙️

| 属性名 | 类型 | 默认值 | 描述 |
| :------- | :----- | :------ | :----------- |
| `speed` | `number` | `无` | 当前下载速度 (kbps)，必需属性。 |
| `maxSpeed` | `number` | `1000000` | 最高速度 (kbps)，用于计算柱子高度的基准，默认 1000M/s。 |
| `width` | `string` | `'100%'` | 可视化区域的宽度。 |
| `height` | `string` | `'120px'` | 可视化区域的高度。 |
| `maxBarHeight` | `number` | `150` | 柱子的最大高度 (px)。 |
| `barWidth` | `number` | `4` | 柱子的固定宽度 (px)。 |
| `barGap` | `number` | `6` | 柱子之间的间距 (px)。 |
| `maxBars` | `number` | `32` | 柱子保留的数量。 |
| `barColor` | `string` | `'#97FDE6'` | 柱子的颜色，从左到右会逐渐变亮。 |
| `updateInterval` | `number` | `300` | 更新柱子的间隔时间 (ms)。 |
| `paused` | `boolean` | `false` | Whether to pause the visualization. When paused, new bars will not be generated and existing bars will stop moving from right to left. |

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

`GlowingCard` is a card component with a dynamic glowing border effect. When the mouse hovers over it, the glow appears and disappears with an animation, providing an attractive visual focus for your content area. 🤩 By default, it fills the entire space of its parent container (`w-full h-full`), and you can customize its dimensions via the `className` prop.

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
    <div style={{ width: '300px', height: '200px' }} className="mt-10">
      <GlowingCard className="rounded-2xl" borderRadius="1rem">
        <div style={{ padding: '20px', color: 'white' }}>
          <h2>My Card Title</h2>
          <p>Card content goes here.</p>
        </div>
      </GlowingCard>
    </div>
  );
};

export default MyComponent;
```

**`IGlowingCardProps` Interface Properties:** ⚙️

| Prop Name | Type | Default Value | Description |
| :------- | :----- | :------ | :----------- |
| `children` | `React.ReactElement` | `undefined` | The React element to be rendered inside the card. |
| `width` | `number` | `Optional` | The width of the card in pixels (px). Defaults to `w-full` if not set. |
| `height` | `number` | `Optional` | The height of the card in pixels (px). Defaults to `h-full` if not set. |
| `hoverScale` | `number` | `1.0` | The scaling factor of the card on hover, defaults to `1.0` (no scaling). |
| `className` | `string` | `''` | Pass custom Tailwind CSS class names. |
| `blurRadius` | `string` | `'8px'` | Controls the blur radius of the glow, supporting css units like px, rem, etc. |
| `borderRadius` | `string` | `Optional` | Sets the border radius of the card, supporting css units like px, rem, etc. |

#### NetworkSpeedVisualizer Component

`NetworkSpeedVisualizer` is a dynamic bar chart component for visualizing network speed. It can display real-time changes in network speed, intuitively reflecting speed fluctuations through the height and opacity of the bars. Bars gradually increase in opacity from left to right (darker on the left, brighter on the right), simulating a gradually strengthening signal effect.

![NetworkSpeedVisualizer Example](https://github.com/songjingwei/gamesir-assets/blob/main/network-speed-visualizer.jpg?raw=true) <!-- Replace with actual screenshot link -->

**Import and Usage:**

```tsx
import React, { useState, useEffect } from 'react';
import { NetworkSpeedVisualizer } from './src/components/NetworkSpeedVisualizer'; // Adjust path as needed

const MyNetworkMonitor = () => {
  const [speed, setSpeed] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate random network speed, range 0-10000 kbps
      setSpeed(Math.floor(Math.random() * 10000));
    }, 500); // Update every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '400px', height: '150px', backgroundColor: '#333' }}>
      <NetworkSpeedVisualizer speed={speed} maxSpeed={10000} />
    </div>
  );
};

export default MyNetworkMonitor;
```

**`NetworkSpeedVisualizerProps` Interface Properties:** ⚙️

| Prop Name | Type | Default Value | Description |
| :------- | :----- | :------ | :----------- |
| `speed` | `number` | `None` | Current download speed (kbps), required. |
| `maxSpeed` | `number` | `1000000` | Maximum speed (kbps), used as a baseline for calculating bar height, defaults to 1000M/s. |
| `width` | `string` | `'100%'` | Width of the visualization area. |
| `height` | `string` | `'120px'` | Height of the visualization area. |
| `maxBarHeight` | `number` | `150` | Maximum height of the bars (px). |
| `barWidth` | `number` | `4` | Fixed width of the bars (px). |
| `barGap` | `number` | `6` | Gap between bars (px). |
| `maxBars` | `number` | `32` | Number of bars to retain. |
| `barColor` | `string` | `'#97FDE6'` | Color of the bars, gradually brightens from left to right. |
| `updateInterval` | `number` | `300` | Interval for updating bars (ms). |
| `paused` | `boolean` | `false` | Whether to pause the visualization. When paused, new bars will not be generated and existing bars will stop moving from right to left. |

## 🌟 Features

-   **High-Performance Animations**: Utilizes the `motion` library for smooth, responsive animation effects.
-   **Highly Customizable**: Easily adjust component styles and behaviors via `props`.
-   **Out-of-the-Box**: Provides plug-and-play components for quick integration into your projects.
-   **TypeScript Support**: Offers full type definitions for an enhanced development experience.

## 🚀 Development

This project uses `Vite` as the build tool and `React` as the frontend framework.

### Environment Setup

Ensure `Node.js` (recommended v16+) and `pnpm` (or `npm`/`yarn`) are installed in your development environment.

```bash
# Recommended to use pnpm
npm install -g pnpm
```

### Local Development

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/gamesir-magic-ui.git
    cd gamesir-magic-ui
    ```
2.  Install dependencies:
    ```bash
    pnpm install
    # Or npm install / yarn install
    ```
3.  Start the development server:
    ```bash
    pnpm run dev
    # Or npm run dev / yarn dev
    ```
    This will start a local development server, usually at `http://localhost:5173`.

### Building the Project

```bash
pnpm run build
# Or npm run build / yarn build
```
The built files will be output to the `dist` directory.

## 🤝 Contributing

We warmly welcome contributions from the community! If you have any ideas, suggestions, or find bugs, feel free to contact us through:

-   Submitting an [Issue](https://github.com/songjingwei/gamesir-magic-ui/issues)
-   Submitting a [Pull Request](https://github.com/songjingwei/gamesir-magic-ui/pulls)

Before submitting a PR, please ensure your code adheres to project guidelines and passes all tests.

## 📜 License

This project is open-sourced under the [MIT License](https://opensource.org/licenses/MIT).

---

Made with ❤️ by Gamesir Gamehub Project Team

