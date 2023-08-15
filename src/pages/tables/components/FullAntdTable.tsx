import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
  col7: string;
  col8: string;
  col9: string;
  col10: string;
  col11: string;
  col12: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
    width: 100,
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 100,
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    width: 100,
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    width: 100,
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    width: 100,
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
  {
    title: "Col1",
    dataIndex: "col1",
    width: 100,
    key: "col1",
  },
  {
    title: "Col2",
    dataIndex: "col2",
    width: 100,
    key: "col2",
  },
  {
    title: "Col3",
    dataIndex: "col3",
    width: 100,
    key: "col3",
  },
  {
    title: "Col4",
    dataIndex: "col4",
    width: 100,
    key: "col4",
  },
  {
    title: "Col4",
    dataIndex: "col4",
    width: 100,
    key: "col4",
  },
  {
    title: "Col5",
    dataIndex: "col5",
    width: 100,
    key: "col5",
  },
  {
    title: "Col6",
    dataIndex: "col6",
    width: 100,
    key: "col6",
  },
  {
    title: "Col7",
    dataIndex: "col7",
    width: 100,
    key: "col7",
  },
  {
    title: "Col8",
    dataIndex: "col8",
    width: 100,
    key: "col8",
  },
  {
    title: "Col9",
    dataIndex: "col9",
    width: 100,
    key: "col9",
  },
  {
    title: "Col10",
    dataIndex: "col10",
    width: 100,
    key: "col10",
  },
  {
    title: "Col11",
    dataIndex: "col11",
    width: 100,
    key: "col11",
  },
  {
    title: "Col12",
    dataIndex: "col12",
    width: 100,
    key: "col12",
  },
  {
    title: "Col4",
    dataIndex: "col4",
    width: 100,
    key: "col4",
  },
  {
    title: "Col5",
    dataIndex: "col5",
    width: 100,
    key: "col5",
  },
  {
    title: "Col6",
    dataIndex: "col6",
    width: 100,
    key: "col6",
  },
  {
    title: "Col7",
    dataIndex: "col7",
    width: 100,
    key: "col7",
  },
  {
    title: "Col8",
    dataIndex: "col8",
    width: 100,
    key: "col8",
  },
  {
    title: "Col9",
    dataIndex: "col9",
    width: 100,
    key: "col9",
  },
  {
    title: "Col10",
    dataIndex: "col10",
    width: 100,
    key: "col10",
  },
  {
    title: "Col11",
    dataIndex: "col11",
    width: 100,
    key: "col11",
  },
  {
    title: "Col12",
    dataIndex: "col12",
    width: 100,
    key: "col12",
  },
  
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    col1: "Col",
    col2: "Col",
    col3: "Col",
    col4: "Col",
    col5: "Col",
    col6: "Col",
    col7: "Col",
    col8: "Col",
    col9: "Col",
    col10: "Col",
    col11: "Col",
    col12: "Col",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
    col1: "Col",
    col2: "Col",
    col3: "Col",
    col4: "Col",
    col5: "Col",
    col6: "Col",
    col7: "Col",
    col8: "Col",
    col9: "Col",
    col10: "Col",
    col11: "Col",
    col12: "Col",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    col1: "Col",
    col2: "Col",
    col3: "Col",
    col4: "Col",
    col5: "Col",
    col6: "Col",
    col7: "Col",
    col8: "Col",
    col9: "Col",
    col10: "Col",
    col11: "Col",
    col12: "Col",
  },
];

const FullAntdTable = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} scroll={{y: 1500}}/>
    </div>
  );
};

export default FullAntdTable;
