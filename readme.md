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

#### LightScanEffect 组件

`LightScanEffect` 是一个用于创建动态扫描光效的组件。它通过控制背景图和两个光效图片的动画，模拟出光线扫描的视觉效果，常用于加载、等待或高亮提示。

![LightScanEffect 示例](https://github.com/songjingwei/gamesir-assets/blob/main/light-scan-effect.jpg?raw=true)

**导入和使用：**

```tsx
import React from 'react';
import { LightScanEffect } from './src/components/LightScanEffect'; // 请根据实际路径调整
import backgroundImage from './src/assets/background_grid.svg';
import lightEffect1Image from './src/assets/light_effect1.png';
import lightEffect2Image from './src/assets/light_effect2.png';

const MyScanComponent = () => {
  return (
    <div style={{ width: '300px', height: '200px', border: '1px solid gray' }}>
      <LightScanEffect
        backgroundImage={backgroundImage}
        lightEffect1Image={lightEffect1Image}
        lightEffect2Image={lightEffect2Image}
        duration={5} // 动画时长5秒
      />
    </div>
  );
};

export default MyScanComponent;
```

**`ILightScanEffectProps` 接口属性：** ⚙️

| 属性名 | 类型 | 默认值 | 描述 |
| :------- | :----- | :------ | :----------- |
| `width` | `string` | `'100%'` | 组件的宽度。 |
| `height` | `string` | `'100%'` | 组件的高度。 |
| `rotate180` | `boolean` | `false` | 是否将组件旋转180度。 |
| `backgroundImage` | `string` | `无` | 背景图片的 URL。 |
| `lightEffect1Image` | `string` | `无` | 第一个光效图片的 URL。 |
| `lightEffect2Image` | `string` | `无` | 第二个光效图片的 URL。 |
| `duration` | `number` | `3` | 动画时长，单位秒。 |

---

#### LightScanEffect Component

`LightScanEffect` is a component used to create dynamic scanning light effects. It simulates a light scanning visual effect by animating a background image and two light effect images, commonly used for loading, waiting, or highlighting prompts.

![LightScanEffect Example](https://github.com/songjingwei/gamesir-assets/blob/main/light-scan-effect.jpg?raw=true)

**Import and Usage:**

```tsx
import React from 'react';
import { LightScanEffect } from './src/components/LightScanEffect'; // Adjust path as needed
import backgroundImage from './src/assets/background_grid.svg';
import lightEffect1Image from './src/assets/light_effect1.png';
import lightEffect2Image from './src/assets/light_effect2.png';

const MyScanComponent = () => {
  return (
    <div style={{ width: '300px', height: '200px', border: '1px solid gray' }}>
      <LightScanEffect
        backgroundImage={backgroundImage}
        lightEffect1Image={lightEffect1Image}
        lightEffect2Image={lightEffect2Image}
        duration={5} // Animation duration in seconds
      />
    </div>
  );
};

export default MyScanComponent;
```

**`ILightScanEffectProps` Interface Properties:** ⚙️

| Property Name | Type | Default Value | Description |
| :------- | :----- | :------ | :----------- |
| `width` | `string` | `'100%'` | The width of the component. |
| `height` | `string` | `'100%'` | The height of the component. |
| `rotate180` | `boolean` | `false` | Whether to rotate the component by 180 degrees. |
| `backgroundImage` | `string` | `None` | The URL of the background image. |
| `lightEffect1Image` | `string` | `None` | The URL of the first light effect image. |
| `lightEffect2Image` | `string` | `None` | The URL of the second light effect image. |
| `duration` | `number` | `3` | Animation duration in seconds. |

#### PhoneNumberInput 组件

[`PhoneNumberInput`](src/components/PhoneNumberInput/index.tsx) 是一个用于输入电话号码的复合组件，它结合了区号选择和手机号码输入框。

![PhoneNumberInput 示例](https://github.com/songjingwei/gamesir-assets/blob/main/phone-number-input.jpg?raw=true)

### 功能

*   **区号选择:** 用户可以通过下拉菜单选择国家或地区的区号。
*   **手机号码输入:** 提供一个输入框供用户输入手机号码。
*   **受控组件:** 通过 `value` 和 `onChange` 属性管理组件状态。

### 属性 (Props)

| 属性名       | 类型                                | 描述                                       | 默认值          |
| :----------- | :---------------------------------- | :----------------------------------------- | :-------------- |
| `areaCodes`  | `AreaCode[]`                        | 区号对象数组，每个对象包含 `name` 和 `code`。 | 无              |
| `value`      | `PhoneNumber`                       | 当前组件的值，包含 `areaCode` 和 `phoneNumber`。 | 无              |
| `onChange`   | `(value: PhoneNumber) => void`      | 当区号或手机号码变化时调用的回调函数。     | 无              |
| `className`  | `string`                            | 应用于组件根元素的额外 CSS 类名。          | `""`            |
| `placeholder`| `string`                            | 手机号码输入框的占位符文本。               | `"输入手机号码"` |
| `activeColor`| `string`                            | 组件激活状态的颜色。                       | `"#BAD7F5"`     |
| `hoverColor` | `string`                            | 组件悬停状态的颜色。                       | `"#92D6FF"`     |

### 使用示例

```jsx
import React from "react";
import { PhoneNumberInput } from "./src/components/PhoneNumberInput"; // 导入组件

const App = () => {
  const [phoneInfo, setPhoneInfo] = React.useState({
    areaCode: "86", // 默认区号
    phoneNumber: ""
  });

  const availableCountries = [
    { name: "中国", code: "86" },
    { name: "美国", code: "1" },
    { name: "加拿大", code: "1" },
    // ...更多国家和区号
  ];

  return (
    <div>
      <h1>联系信息</h1>
      <PhoneNumberInput
        areaCodes={availableCountries}
        value={phoneInfo}
        onChange={setPhoneInfo}
        placeholder="请输入您的手机号码"
        activeColor="#4CAF50"
        hoverColor="#8BC34A"
      />
      <p>当前的手机号码: {phoneInfo.areaCode} {phoneInfo.phoneNumber}</p>
    </div>
  );
};

export default App;
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

