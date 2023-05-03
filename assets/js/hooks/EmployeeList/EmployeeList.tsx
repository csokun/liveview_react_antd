import React from "react";
import { Table } from "antd";

export default function EmployeeList({ items }: { items: any }) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return <Table bordered dataSource={items || []} columns={columns} />;
}
