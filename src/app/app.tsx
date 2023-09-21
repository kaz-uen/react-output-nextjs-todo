"use client";

import { Provider } from "react-redux";
import store from "../store/store";

export default function App({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};

// 参考：https://zenn.dev/azukiazusa/articles/next-js-app-dir-tutorial#provider-%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B
