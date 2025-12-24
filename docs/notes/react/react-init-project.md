# 使用 Vite 建立 React 專案

###### tags: `React`

## 建立專案
假設你已安裝 Node.js 和 pnpm （或是其他如 npm ...）
![image](https://img.shields.io/badge/react-v19-blue.svg) ![image](https://img.shields.io/badge/typescript-blue.svg) ![image](https://img.shields.io/badge/pnpm-985F2A.svg) 
```
pnpm create vite <project-name> --template react-ts
```

- `pnpm create vite`： 使用 pnpm 執行 Vite 的建立工具
- `<project-name>`： 替換成你想要的專案名稱
- `--template react-ts`： 告訴 Vite 我們要使用 React 搭配 TypeScript 

```
cd <project-name>
pnpm install
pnpm dev
```
- `pnpm dev`：啟動開發伺服器（預設 `http://localhost:5173`）


## 專案結構
```
project-name/
├── .eslintrc.cjs        # ESLint 設定檔，用於程式碼風格檢查與錯誤提示
├── .gitignore           # Git 設定檔，指定哪些檔案或資料夾不需要被版本控制
├── index.html           # 應用程式的 HTML 進入點，Vite 會自動注入 JS/CSS
├── node_modules/        # 存放所有專案依賴套件的資料夾 (由 pnpm 管理)
├── package.json         # 專案資訊、依賴列表、以及可執行的腳本 (scripts)
├── pnpm-lock.yaml       # pnpm 的鎖定檔，確保每次安裝的依賴版本都一致
├── public/              # 存放靜態資源，這裡的檔案會直接複製到打包後的根目錄
│   └── vite.svg         # 範例 SVG 圖檔
├── src/                 # 核心原始碼目錄，大部分時間會在這裡工作
│   ├── components/      # 存放可重複使用的 UI 元件
│   ├── pages/           # 存放代表不同頁面的元件
│   ├── hooks/           #  存放自訂的 React Hooks (封裝可重用邏輯)
│   ├── utils/           #  存放共用的輔助函式
│   ├── types/           #  存放共用的 TypeScript 類型定義
│   ├── App.css          # App 元件的範例 CSS 樣式檔
│   ├── App.tsx          # 主要的 React 應用程式元件 (根元件)
│   ├── assets/          # 存放會被 Vite 處理的靜態資源 (如圖片、字型)
│   │   └── react.svg    # 範例 SVG 圖檔
│   ├── index.css        # 全域 CSS 樣式檔
│   ├── main.tsx         # 應用程式的主要進入點 (入口檔案)
│   └── vite-env.d.ts    # TypeScript 類型定義檔，用於 Vite 的環境變數
├── tsconfig.json        # TypeScript 編譯器的主要設定檔
├── tsconfig.node.json   # 給 Node.js 環境 (如 vite.config.ts) 使用的 TypeScript 設定檔
└── vite.config.ts       # Vite 的設定檔 (使用 TypeScript 編寫)
```

## 核心檔案說明

### `index.html`
- 應用程式的「殼」，載入程式碼
- React 應用程式最終會被掛載到這個 div 裡面
```html=
<div id="root"></div>
```

### `src/main.tsx`
- `main.tsx` 為進入點
-  引入 React 和 ReactDOM
-  引入你的元件 (預設是 App 元件)
-  引入全域 CSS (index.css)
-  使用 `ReactDOM.createRoot().render()` 將 App 元件渲染到 `index.html` 中的 `#root` `div` 裡，是 React 應用程式啟動的地方
-  使用 createRoot
-  Provider（Router、Store）都放在這一層

```jsx=
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

```

### `src/App.tsx`
-  預設的根元件
-  所有其他頁面或元件的容器
-  通常只負責：
    -  Layout（Header / Footer）
    -  Router

```jsx=
const App = () => {
  return <div>Hello React</div>;
};

export default App;
```

### `assets/`
- 放圖片、字型等資源
### `public/` 
- 這邊的檔案不會被 Vite 或建置過程處理（會原封不動被複製到最終建置輸出資料夾的根目錄）
- 可以放不需要建置處理的檔案，例如 `favicon.ico`、 `robots.txt`

## 設定 React Router
### 安裝
```
pnpm add react-router-dom
```
### Router 集中管理
此項目可看專案大小評估是否要分成`index.tsx` 和 `router.tsx`，
或是直接一支檔案管理就好（單一來源）

#### 單一來源
```
src/router/
└── index.tsx
```

> router/index.tsx

```
import type { RouteObject } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Result } from "@/pages/Result";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/result",
    element: <Result />,
  }
];

```

#### 不同功能管理 router

```
src/router/
├── routes.tsx
└── index.tsx
```

> router/routes.tsx
```
import type { RouteObject } from "react-router-dom";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";

export const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
];

```

> router/index.tsx
```
import { Navigate, useRoutes } from "react-router-dom";
import { routes } from "./routes";

export const AppRouter = () => {
  return useRoutes([
    ...routes,
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
};

```

## 設定 @/ 絕對路徑

若設定後仍有錯誤，請在 VSCode 執行 `TypeScript: Restart TS Server`

> vite.config.ts
```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
```

> tsconfig.json（或實際生效的 tsconfig）

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "jsx": "react-jsx"
  }
}
```

## Pages 範例

### Named Export
> src/pages/Home.tsx

```
export const Home = () => {
  return <div>Home Page</div>;
};
```

### Default Export
```
const Home = () => {
  return <div>Home Page</div>;
};
export default Home;
```

## 套件引用
以 Tailwind CSS 為例

### 安裝
```
pnpm install tailwindcss @tailwindcss/vite
```

### 設定
> vite.config.ts

```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```
> index.css

```
@import "tailwindcss";
```