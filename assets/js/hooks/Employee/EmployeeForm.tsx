import React from "react";
import { Form, FormInstance, Input, Row, Select } from "antd";

export interface EmployeeFormProps {
  form: FormInstance;
  onFinish?: (values: any) => void;
}

export default function EmployeeForm({ form, onFinish }: EmployeeFormProps) {
  return (
    <Form
      form={form}
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 18 }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item label="Age" name="age">
        <Input />
      </Form.Item>

      <Form.Item label="Address" name="address">
        <Input />
      </Form.Item>
    </Form>
  );
}
