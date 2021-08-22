import React, { useState } from "react";
import { Button, Modal } from "antd";
import {
    Form,
    Input,
    Select,
    DatePicker,
  } from 'antd';



const Schedule = (props) => {

    const [componentSize, setComponentSize] = useState('default');
  
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        props.onSchedueRequested({
          id:Date.now(),
          title:"Schedule",
          date:date.toDate(),
          employee:"",
          allDay: true,
        }) 
      };

    const handleCancel = () => {
        setIsModalVisible(false);
      };

    const [date, setDate] = useState(null)
    const [employee, setEmployee] = useState(null)
    const handleSubmit = e => {
            e.preventDefault();
            console.log(date,employee);
          };

  
    return (
      <>
    <Button style={{float: 'right'}} type="primary" onClick={showModal}>
        Make Schedule
    </Button>
    <Modal title="Request Time Off" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form
        onSubmit={handleSubmit}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Name">
          <Input onChange={setEmployee} value={employee}/>
        </Form.Item>
        <Form.Item label="Location">
          <Select>
            <Select.Option value="miami">Miami</Select.Option>
            <Select.Option value="fort lauderdale">Fort Lauderdale</Select.Option>
            <Select.Option value="palm beach">Palm Beach</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker onChange={setDate} value={date} />
        </Form.Item>


      </Form>
      </Modal>
        </>
     );
  };
  
  
  export default Schedule
