import { Button, Result } from "antd";
import React from "react";

const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Aradığınız sayfayı bulamadık, lütfen kontrol ediniz."
      extra={<Button type="primary">Ana Sayfa</Button>}
    />
  );
};

export default NotFound;
