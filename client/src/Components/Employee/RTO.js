import React, { useState } from "react";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  DatePicker,
} from 'antd';


const RTO = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    props.onRTORequested({
      id:Date.now(),
      title:"RTO",
      start:start.toDate(),
      end:end.toDate(),
      allDay: true,
    }) 
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
const [start, setStart] = useState(null)
const [end, setEnd] = useState(null)
const handleSubmit = e => {
    e.preventDefault();
    console.log(start,end);
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
        <Form.Item label="start">
        <DatePicker onChange={setStart} value={start} />
        </Form.Item>
        <Form.Item label="end">
        <DatePicker onChange={setEnd} value={end} />
        </Form.Item>
      </Form>
      </Modal>
    </>
  );
};


export default RTO