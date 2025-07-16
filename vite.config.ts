import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath, URL } from "url";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts"; // 导入 dts 插件

// https://vitejs.dev/config/
export default defineConfig({
	base: "./", // 添加 base 路径
	root: ".", // 将根目录设置为当前目录
	// publicDir: "public", // 将 public 目录设置为静态资源目录
	plugins: [react(), tailwindcss(), dts({ rollupTypes: true })], // 添加 dts 插件
	resolve: {
		alias: {
			"@": path.resolve(fileURLToPath(new URL(".", import.meta.url)), "./src"),
		},
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"), // 修改入口文件
			name: "GamesirMagicUI", // 库的全局变量名
			fileName: (format) => {
				if (format === "umd") {
					return `gamesir-magic-ui.umd.cjs`;
				}
				return `gamesir-magic-ui.es.js`;
			},
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"], // 标记为外部依赖
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
				// 在 UMD 构建模式下为外部依赖提供一个全局变量
				assetFileNames: (assetInfo) => {
					if (assetInfo.name === "style.css") return "index.css";
					return "assets/[name].[ext]";
				},
			},
		},
	},
	server: {},
});
