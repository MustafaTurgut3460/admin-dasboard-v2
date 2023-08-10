import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table, { ColumnsType } from "antd/es/table";
import React from "react";
import useWindowDimensions from "../../../hooks/window-dimention";
interface DataType {
  key: string;
  browser: string;
  device: string;
  location: string;
  recent_activity: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Browser",
    dataIndex: "browser",
    key: "browser",
    render: (text) => (
      <div style={{ display: "flex" }}>
        <FontAwesomeIcon
          icon={faMobile}
          style={{
            padding: 10,
            borderRadius: 4,
            backgroundColor: "#5161ce20",
            color: "#5161ce",
          }}
        />
        <div style={{ marginLeft: "0.5rem" }}>
          {text} 
        </div>
      </div>
    ),
  },
  {
    title: "Device",
    dataIndex: "device",
    key: "device",
    width: 200,
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    width: 200,
  },
  {
    title: "Recent Activity",
    key: "recent_activity>",
    dataIndex: "recent_activity",
  },
];

const data: DataType[] = [
  {
    key: "1",
    browser: "Chrome on Android",
    device: "Xiaomi Redmi Note 9s",
    location: "Türkiye",
    recent_activity: "23 Mart 2023 18:42",
  },
  {
    key: "2",
    browser: "Chrome on Android",
    device: "Xiaomi Redmi Note 9s",
    location: "Türkiye",
    recent_activity: "23 Mart 2023 18:42",
  },
  {
    key: "3",
    browser: "Chrome on Android",
    device: "Xiaomi Redmi Note 9s",
    location: "Türkiye",
    recent_activity: "23 Mart 2023 18:42",
  },
  {
    key: "4",
    browser: "Chrome on Android",
    device: "Xiaomi Redmi Note 9s",
    location: "Türkiye",
    recent_activity: "23 Mart 2023 18:42",
  },
];

const ProfileSecurityTable = () => {
    const {width, height} = useWindowDimensions();

  return (
    <Table columns={columns} dataSource={data} scroll={{ x: width / 2 }} />
  );
};

export default ProfileSecurityTable;
