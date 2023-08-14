import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItem } from "../components/SidebarMenu";
import {
  faChartArea,
  faChartColumn,
  faChartLine,
  faChartPie,
  faChartSimple,
  faDashboard,
  faInfo,
  faListCheck,
  faPersonChalkboard,
  faTable,
} from "@fortawesome/free-solid-svg-icons";

export const routes: MenuItem[] = [
  {
    key: "1",
    label: "Dashboard",
    to: "/",
    icon: faDashboard,
    path: "Dashboard",
  },
  {
    key: "2",
    label: "Tables",
    to: "/tables",
    icon: faTable,
    path: "Tables",
  },
  {
    key: "3",
    label: "Charts",
    to: "",
    icon: faChartSimple,
    path: "Charts",
    subMenu: [
      {
        key: "31",
        label: "Line Chart",
        to: "/charts/line",
        path: "Charts/Line Chart",
        icon: faChartLine,
      },
      {
        key: "32",
        label: "Area Chart",
        to: "/charts/area",
        path: "Charts/Area Chart",
        icon: faChartArea,
      },
      {
        key: "33",
        label: "Bar Chart",
        to: "/charts/bar",
        path: "Charts/Bar Chart",
        icon: faChartColumn,
      },
      {
        key: "34",
        label: "Pie Chart",
        to: "/charts/pie",
        path: "Charts/Pie Chart",
        icon: faChartPie,
      },
    ],
  },
  {
    key: "5",
    to: "/forms",
    label: "Forms",
    path: "Forms",
    icon: faListCheck,
  },
];
