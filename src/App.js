import "./App.css";
import { styled } from "styled-components";
import { ConfigProvider, Spin } from "antd";
import zhCN from "antd/locale/zh_CN";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Suspense fallback={<Spin size="large" className="globa_spin" />}>
        <Outlet />
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
