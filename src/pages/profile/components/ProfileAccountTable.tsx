import React from "react";
import { Avatar, Progress, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

import logo from "../../../assets/images/logo.png";
import useWindowDimensions from "../../../hooks/window-dimention";

interface DataType {
  key: string;
  name: string;
  task: string;
  progress: number;
  hours: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <div style={{ display: "flex" }}>
        <Avatar src={logo} size={"large"} />
        <div style={{marginLeft: "0.5rem"}}>
          <a> {text} </a>
          <p style={{ fontSize: "0.75rem", opacity: 0.5 }}>React Project</p>
        </div>
      </div>
    ),
    width: 200
  },
  {
    title: "Total Task",
    dataIndex: "task",
    key: "task",
    width: 200
  },
  {
    title: "Progress",
    dataIndex: "progress",
    key: "progress",
    render: (progress) => (
        <Progress percent={progress} status="active"/>
    )
  },
  {
    title: "Hours",
    key: "hours",
    dataIndex: "hours",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "IntelliGrade",
    task: "122/150",
    progress: 78,
    hours: "18:42",
  },
  {
    key: "2",
    name: "IntelliGrade",
    task: "122/150",
    progress: 78,
    hours: "18:42",
  },
  {
    key: "3",
    name: "IntelliGrade",
    task: "122/150",
    progress: 78,
    hours: "18:42",
  },
  {
    key: "4",
    name: "IntelliGrade",
    task: "122/150",
    progress: 78,
    hours: "18:42",
  },
  {
    key: "5",
    name: "IntelliGrade",
    task: "122/150",
    progress: 78,
    hours: "18:42",
  },
];

const ProfileAccountTable = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <Table columns={columns} dataSource={data} scroll={{ x: width / 2 }} />
    </div>
  );
};

export default ProfileAccountTable;
