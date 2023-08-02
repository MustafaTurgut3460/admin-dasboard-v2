import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { getThemeFromStorage } from "./services/local-storage-service";
import { useSelector } from "react-redux";
import { ThemeState, Themes } from "./actions/themeAction";
import { ConfigProvider, theme } from "antd";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./pages/layout/Layout";
import Tables from "./pages/tables/Tables";
import Cards from "./pages/cards/Cards";
import Charts from "./pages/charts/Charts";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import NotFound from "./pages/not-found/NotFound";
import LineChart from "./pages/line-chart/LineChart";
import AreaChart from "./pages/area-chart/AreaChart";
import PieChart from "./pages/pie-chart/PieChart";
import BarChart from "./pages/bar-chart/BarChart";
function App() {
  const themeSelector = useSelector((state: any) => state.theme);

  var light: boolean = themeSelector.theme === Themes.Light;

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: light ? theme.defaultAlgorithm : theme.darkAlgorithm,
          token: {
            colorText: light ? "#000" : "#d1d1d1",
            colorBgBase: light ? "#f6f6f9" : "#202528",
            colorBgContainer: light ? "#f6f6f9" : "#202528",
          },
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="tables" element={<Tables />} />
              <Route path="cards" element={<Cards />} />
              <Route path="charts" element={<Charts />}>
                <Route index path="line" element={<LineChart />}/>
                <Route path="area" element={<AreaChart />}/>
                <Route path="bar" element={<BarChart />}/>
                <Route path="pie" element={<PieChart />}/>
              </Route>
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Outlet />
      </ConfigProvider>
    </>
  );
}

export default App;
