import React, { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const data = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  { id: 3, name: 'Michael Johnson', age: 35 },
  { id: 4, name: 'John Doe', age: 30 },
  { id: 5, name: 'Jane Smith', age: 25 },
  { id: 6, name: 'Michael Johnson', age: 35 },
  { id: 7, name: 'John Doe', age: 30 },
  { id: 8, name: 'Jane Smith', age: 25 },
  { id: 9, name: 'Michael Johnson', age: 35 },
  { id: 10, name: 'John Doe', age: 30 },
  { id: 11, name: 'Jane Smith', age: 25 },
  { id: 12, name: 'Michael Johnson', age: 35 },
  { id: 13, name: 'John Doe', age: 30 },
  { id: 14, name: 'Jane Smith', age: 25 },
  { id: 15, name: 'Michael Johnson', age: 35 },
  { id: 16, name: 'John Doe', age: 30 },
  { id: 17, name: 'Jane Smith', age: 25 },
  { id: 18, name: 'Michael Johnson', age: 35 },
  // Diğer veriler...
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 100 },
  // Diğer sütunlar...
];
const CustomPaginationTable = () => {


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{pagination: {paginationModel: {pageSize: 5, page: 0}}}}
        pageSizeOptions={[5, 10, 25]}
      />
    </div>
  );
};

export default CustomPaginationTable;
