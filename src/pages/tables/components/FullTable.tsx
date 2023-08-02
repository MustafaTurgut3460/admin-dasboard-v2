import React, { useEffect, useState } from "react";

import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Avatar, Progress, Tag } from "antd";

const datas: any[] = [];

for (let i = 0; i < 100; i++) {
  const data = {
    id: i,
    text: "Deneme",
    number: parseInt(`${Math.random() * 100}`),
    "with-avatar": "Mustafa Turgut",
    tag: "Active",
    progress: parseInt(`${Math.random() * 100}`),
    text2: "Deneme",
    text3: "Deneme",
    text4: "Deneme",
    text5: "Deneme",
    text6: "Deneme",
    edit: "",
  };

  datas.push(data);
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "text", headerName: "Text", width: 150, editable: true },
  { field: "number", headerName: "Number", width: 100, editable: true },
  {
    field: "with-avatar",
    headerName: "With Avatar",
    width: 200,
    editable: true,
    renderCell(params) {
        return (
            <div style={{display: "flex", alignItems: "center"}}>
                <Avatar src={require("../../../assets/images/avatar1.png")} />
                <p style={{marginLeft: "0.5rem"}}> {params.value} </p>
            </div>
        )
    },
  },
  { field: "tag", headerName: "Tag", width: 150, editable: true, renderCell(params) {
      return (
        <Tag color="blue"> {params.value} </Tag>
      )
  },},
  { field: "progress", headerName: "Progress", width: 150, editable: true, renderCell(params) {
      return (
        <Progress percent={params.value} />
      )
  }},
  { field: "text2", headerName: "Text2", width: 150, editable: true },
  { field: "text3", headerName: "Text3", width: 150, editable: true },
  { field: "text4", headerName: "Text4", width: 150, editable: true },
  { field: "text5", headerName: "Text5", width: 150, editable: true },
  { field: "text6", headerName: "Text6", width: 150, editable: true },
  { field: "edit", headerName: "Edit", width: 150, editable: true },
];

const FullTable = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [paginatedData, setPaginatedData] = useState(
    datas.slice((page - 1) * pageSize, page * pageSize)
  );

  useEffect(() => {
    setPaginatedData(datas.slice((page - 1) * pageSize, page * pageSize));
  }, [page, pageSize]);

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={datas}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 5, page: 0 } },
        }}
        pageSizeOptions={[5, 10, 25]}
        onPaginationModelChange={(params) => {
          setPage(params.page);
          setPageSize(params.pageSize);
        }}
        checkboxSelection
        editMode="row"
      />
    </div>
  );
};

export default FullTable;
