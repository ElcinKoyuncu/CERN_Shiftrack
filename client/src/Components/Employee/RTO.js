import React, { useState, useCallback } from "react";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  DatePicker,
} from 'antd';
import moment from 'moment';


const RTO = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Request Time Off" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input />
        </Form.Item>
        <Form.Item onChange={onChange} label="DatePicker">
          <DatePicker />
        </Form.Item>
      </Form>
      </Modal>
    </>
  );
};


export default RTO