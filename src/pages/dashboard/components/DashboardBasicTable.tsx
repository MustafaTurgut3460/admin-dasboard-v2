import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Tag } from "antd";

const col1Data = <div style={{display: "flex", alignItems: "center"}}>
    <Avatar src={require("../../../assets/images/avatar1.png")}/>
    <p style={{marginLeft: "0.5rem"}}>Mustafa Turgut</p>
</div>

const rows: GridRowsProp = [
  { id: 1, col1: "Hello", col2: "World", col3: "Veri", col4: 15, col5: "String veri", col6: "Active", col7: "Deneme"},
  { id: 2, col1: "DataGridPro", col2: "is Awesome", col3: "Veri", col4: 15, col5: "String veri", col6: "Active", col7: "Deneme" },
  { id: 3, col1: "MUI", col2: "is Amazing", col3: "Veri", col4: 15, col5: "String veri", col6: "Active", col7: "Deneme" },
  { id: 4, col1: "Hello", col2: "World", col3: "Veri", col4: 15, col5: "String veri", col6: "Active", col7: "Deneme"},
  { id: 5, col1: "DataGridPro", col2: "is Awesome", col3: "Veri", col4: 15, col5: "String veri", col6: "Active", col7: "Deneme" },
  { id: 6, col1: "MUI", col2: "is Amazing", col3: "Veri", col4: 15, col5: "String veri", col6: "Active", col7: "Deneme" },
  { id: 7, col1: "Hello", col2: "World", col3: "Veri", col4: 15, col5: "String veri", col6: "Active", col7: "Deneme"},
  { id: 8, col1: "DataGridPro", col2: "is Awesome", col3: "Veri", col4: 15, col5: "String veri", col6: "Active", col7: "Deneme" },
  { id: 9, col1: "MUI", col2: "is Amazing", col3: "Veri", col4: 15, col5: "String veri", col6: "Active", col7: "Deneme" },
];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Column 1",width: 200, renderCell(params) {
   return col1Data
  }, },
  { field: "col2", headerName: "Column 2", width: 150 },
  { field: "col3", headerName: "Column 3", width: 150 },
  { field: "col4", headerName: "Column 4", width: 150 },
  { field: "col5", headerName: "Column 5", width: 150 },
  { field: "col6", headerName: "Column 6", width: 150, renderCell(params){
    return (
        <Tag color="geekblue"> {params.value} </Tag>
    )
  } },
  { field: "col7", headerName: "Column 7", width: 150 },
];

const DashboardBasicTable = () => {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid rows={rows} columns={columns}/>
    </div>
  );
};

export default DashboardBasicTable;
