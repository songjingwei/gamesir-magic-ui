import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath, URL } from "url";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
	base: "./", // 添加 base 路径
	root: ".", // 将根目录设置为当前目录
	publicDir: "public", // 将 public 目录设置为静态资源目录
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(fileURLToPath(new URL(".", import.meta.url)), "./src"),
		},
	},
	build: {}, // 移除 lib 配置
	server: {},
});
