import React, { useState } from "react";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  DatePicker,
} from 'antd';


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
  const [form,setForm] = useState ({
    name: "",
    lastName:"",
    DatePicker:"",
    })
  const updateForm = (e) => {
    setForm ({
          ...form,
          [e.target.name]: e.target.value
        })
        console.log(e.target)
  }
const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <Button style={{float: 'right'}} type="primary" onClick={showModal}>
        Request Time Off
      </Button>
      <Modal title="Request Time Off" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form onSubmit={handleSubmit}
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
        <Form.Item onChange ={updateForm} label="Name">
          <Input />
        </Form.Item>
        <Form.Item onChange ={updateForm} label="Last Name">
          <Input />
        </Form.Item>
        <Form.Item onChange ={updateForm} label="DatePicker">
        <DatePicker onChange={(date) => console.log(date)}/>
        </Form.Item>
      </Form>
      </Modal>
    </>
  );
};


export default RTO