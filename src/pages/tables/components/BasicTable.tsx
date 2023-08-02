import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const rows: GridRowsProp = [
  { id: 1, col1: "Hello", col2: 32, col3: "Deneme"},
  { id: 2, col1: "DataGridPro", col2: 56, col3: "Deneme" },
  { id: 3, col1: "MUI", col2: 22, col3: "Deneme" },
];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Text", width: 150 },
  { field: "col2", headerName: "Number", width: 150 },
  { field: "col3", headerName: "Text", width: 150 },
];

const BasicTable = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection/>
    </div>
  );
};

export default BasicTable;
