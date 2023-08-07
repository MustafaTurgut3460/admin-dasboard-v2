import React, { useEffect, useState } from "react";

import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridTreeNodeWithRender,
} from "@mui/x-data-grid";
import { Avatar, Progress, Tag } from "antd";

export interface TableProp {
  datas: any[];
  columns: ColumnType[];
  height: number;
  initPageSize: number;
  pageSizeOptions: number[];
}

export interface ColumnType {
  field: string;
  headerName: string;
  width: TableColumnSizes;
  editable: boolean;
  renderCell?: (
    params: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>
  ) => JSX.Element;
}

export enum TableColumnSizes {
  sm = 100,
  md = 150,
  lg = 200,
  xl = 300,
}

const FullTable: React.FC<TableProp> = ({
  columns,
  datas,
  height,
  initPageSize,
  pageSizeOptions,
}) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [paginatedData, setPaginatedData] = useState(
    datas.slice((page - 1) * pageSize, page * pageSize)
  );

  useEffect(() => {
    setPaginatedData(datas.slice((page - 1) * pageSize, page * pageSize));
  }, [page, pageSize]);
  

  return (
    <div style={{ height: height, width: "100%" }}>
      <DataGrid
        rows={datas}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: initPageSize, page: 0 } },
        }}
        pageSizeOptions={pageSizeOptions}
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
