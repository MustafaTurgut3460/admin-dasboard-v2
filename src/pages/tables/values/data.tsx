import { GridColDef } from "@mui/x-data-grid";
import { Avatar, Progress, Tag } from "antd";
import { ColumnType, TableColumnSizes } from "../components/FullTable";

export const columns: ColumnType[] = [
  {
    field: "id",
    headerName: "ID",
    editable: false,
    width: TableColumnSizes.sm,
  },
  {
    field: "text",
    headerName: "Text",
    editable: true,
    width: TableColumnSizes.md,
  },
  {
    field: "number",
    headerName: "Number",
    editable: true,
    width: TableColumnSizes.sm,
  },
  {
    field: "avatar",
    headerName: "Avatar",
    editable: true,
    width: TableColumnSizes.xl,
    renderCell(params) {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={require("../../../assets/images/avatar1.png")} />
          <p style={{ marginLeft: "0.5rem" }}> {params.value} </p>
        </div>
      );
    },
  },
  {
    field: "tag",
    headerName: "Tag",
    width: TableColumnSizes.sm,
    editable: true,
    renderCell(params) {
      return <Tag color="orange" bordered={false} style={{borderRadius: 6}}> {params.value} </Tag>;
    },
  },
  {
    field: "progress",
    headerName: "Progress",
    width: TableColumnSizes.lg,
    editable: true,
    renderCell(params) {
      return <Progress percent={params.value} />;
    },
  },
  { field: "text2", headerName: "Text2", width: TableColumnSizes.lg, editable: true },
  { field: "text3", headerName: "Text3", width: TableColumnSizes.lg, editable: true },
  { field: "text4", headerName: "Text4", width: TableColumnSizes.lg, editable: true },
  { field: "text5", headerName: "Text5", width: TableColumnSizes.lg, editable: true },
  { field: "text6", headerName: "Text6", width: TableColumnSizes.lg, editable: true },
  { field: "text7", headerName: "Text7", width: TableColumnSizes.lg, editable: true },
  { field: "text8", headerName: "Text8", width: TableColumnSizes.lg, editable: true },
  { field: "text9", headerName: "Text9", width: TableColumnSizes.lg, editable: true },
  { field: "text10", headerName: "Text10", width: TableColumnSizes.lg, editable: true },
  { field: "text11", headerName: "Text11", width: TableColumnSizes.lg, editable: true },
];

// export const columns: GridColDef[] = [
//   { field: "id", headerName: "ID" },
//   { field: "text", headerName: "Text", editable: true },
//   { field: "number", headerName: "Number", editable: true },
//   {
//     field: "with-avatar",
//     headerName: "With Avatar",
//     width: 200,
//     editable: true,
//     renderCellCell(params) {
//       return (
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <Avatar src={require("../../../assets/images/avatar1.png")} />
//           <p style={{ marginLeft: "0.5rem" }}> {params.value} </p>
//         </div>
//       );
//     },
//   },
//   {
//     field: "tag",
//     headerName: "Tag",
//     width: 150,
//     editable: true,
//     renderCellCell(params) {
//       return <Tag color="blue"> {params.value} </Tag>;
//     },
//   },
//   {
//     field: "progress",
//     headerName: "Progress",
//     width: 150,
//     editable: true,
//     renderCellCell(params) {
//       return <Progress percent={params.value} />;
//     },
//   },
//   { field: "text2", headerName: "Text2", width: 150, editable: true },
//   { field: "text3", headerName: "Text3", width: 150, editable: true },
//   { field: "text4", headerName: "Text4", width: 150, editable: true },
//   { field: "text5", headerName: "Text5", width: 150, editable: true },
//   { field: "text6", headerName: "Text6", width: 150, editable: true },
// ];

export const datas: any[] = [];

for (let i = 0; i < 1000; i++) {
  const data = {
    id: i,
    text: "Deneme",
    number: parseInt(`${Math.random() * 100}`),
    avatar: "Mustafa Turgut",
    tag: "Active",
    progress: parseInt(`${Math.random() * 100}`),
    text2: "Deneme",
    text3: "Deneme",
    text4: "Deneme",
    text5: "Deneme",
    text6: "Deneme",
    text7: "Deneme",
    text8: "Deneme",
    text9: "Deneme",
    text10: "Deneme",
    text11: "Deneme",
  };

  datas.push(data);
}
