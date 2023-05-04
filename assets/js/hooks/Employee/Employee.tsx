import React, { useEffect, useState } from "react";
import EmployeeForm from "./EmployeeForm";
import { Button, Form, Modal } from "antd";
import EmployeeList from "./EmployeeList";

export interface EmployeeProps {
  items: any;
  dispatch: (payload: Record<string, any>) => void;
}

export default function Employee({ items, dispatch }: EmployeeProps) {
  const [employeeList, setEmployeeList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setConfirmLoading(false);
    form.resetFields();
    setIsOpen(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsOpen(false);
  };

  const onEmployeeFormSubmit = async (values: any) => {
    setConfirmLoading(true);
    await dispatch({
      type: "ADD_EMPLOYEE",
      ...values,
    });
    setIsOpen(false);
  };

  useEffect(() => {
    setEmployeeList(items);
  }, [items]);

  return (
    <>
      <Button type="primary" onClick={() => showModal()}>
        Add Employee
      </Button>

      <EmployeeList items={employeeList} />

      <Modal
        width={800}
        title="Employee Form"
        open={isOpen}
        onOk={form.submit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        destroyOnClose={true}
        maskClosable={false}
      >
        <EmployeeForm form={form} onFinish={onEmployeeFormSubmit} />
      </Modal>
    </>
  );
}
