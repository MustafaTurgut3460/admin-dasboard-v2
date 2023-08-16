import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import useWindowDimensions from "../../../hooks/window-dimention";

interface DataType {
  key: number;
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
    width: 150,
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 150,
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    width: 200,
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    width: 200,
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
    width: 200,
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
    width: 150,
    key: "col1",
  },
  {
    title: "Col2",
    dataIndex: "col2",
    width: 150,
    key: "col2",
  },
  {
    title: "Col3",
    dataIndex: "col3",
    width: 150,
    key: "col3",
  },
  {
    title: "Col4",
    dataIndex: "col4",
    width: 150,
    key: "col4",
  },
  {
    title: "Col4",
    dataIndex: "col4",
    width: 150,
    key: "col4",
  },
  {
    title: "Col5",
    dataIndex: "col5",
    width: 150,
    key: "col5",
  },
  {
    title: "Col6",
    dataIndex: "col6",
    width: 150,
    key: "col6",
  },
  {
    title: "Col7",
    dataIndex: "col7",
    width: 150,
    key: "col7",
  },
  {
    title: "Col8",
    dataIndex: "col8",
    width: 150,
    key: "col8",
  },
  {
    title: "Col9",
    dataIndex: "col9",
    width: 150,
    key: "col9",
  },
  {
    title: "Col10",
    dataIndex: "col10",
    width: 150,
    key: "col10",
  },
  {
    title: "Col11",
    dataIndex: "col11",
    width: 150,
    key: "col11",
  },
  {
    title: "Col12",
    dataIndex: "col12",
    width: 150,
    key: "col12",
  },
  {
    title: "Col4",
    dataIndex: "col4",
    width: 150,
    key: "col4",
  },
  {
    title: "Col5",
    dataIndex: "col5",
    width: 150,
    key: "col5",
  },
  {
    title: "Col6",
    dataIndex: "col6",
    width: 150,
    key: "col6",
  },
  {
    title: "Col7",
    dataIndex: "col7",
    width: 150,
    key: "col7",
  },
  {
    title: "Col8",
    dataIndex: "col8",
    width: 150,
    key: "col8",
  },
  {
    title: "Col9",
    dataIndex: "col9",
    width: 150,
    key: "col9",
  },
  {
    title: "Col10",
    dataIndex: "col10",
    width: 150,
    key: "col10",
  },
  {
    title: "Col11",
    dataIndex: "col11",
    width: 150,
    key: "col11",
  },
  {
    title: "Col12",
    dataIndex: "col12",
    width: 150,
    key: "col12",
  },
];

function generateRandomStringData(): string {
  const possibleWords = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "mango",
    "orange",
    "pear",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "watermelon",
  ];

  const randomIndex = Math.floor(Math.random() * possibleWords.length);
  return possibleWords[randomIndex];
}

const FullAntdTable = () => {
  const [datas, setDatas] = useState<DataType[]>([]);
  const {width, height} = useWindowDimensions();

  useEffect(() => {
    for (let i = 0; i < 1000; i++) {
      const data: DataType = {
        key: i + 1,
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
        col1: generateRandomStringData(),
        col2: generateRandomStringData(),
        col3: generateRandomStringData(),
        col4: generateRandomStringData(),
        col5: generateRandomStringData(),
        col6: generateRandomStringData(),
        col7: generateRandomStringData(),
        col8: generateRandomStringData(),
        col9: generateRandomStringData(),
        col10: generateRandomStringData(),
        col11: generateRandomStringData(),
        col12: generateRandomStringData(),
      };

      setDatas(datas => [...datas, data])
    }
  }, []);
  return (
    <div>
      <Table columns={columns} dataSource={datas} scroll={{ y: height-250 }} />
    </div>
  );
};

export default FullAntdTable;
