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
        // const scheduleId = props.schedule._id
        props.onScheduleRequested({ 
          id:Date.now(),
          title:"Schedule",
          date:props.date.toDate(),
          employee:employee.toString(),
          allDay: true,
        }) 
      };

    const handleCancel = () => {
        setIsModalVisible(false);
      };
    
    const [locations, setLocations] = useState([])
    const [date, setDate] = useState(null)
    const [employee, setEmployee] = useState('')
    const handleMySubmit = event => {
            event.preventDefault();
            console.log(date, employee, locations);
          };

  
    return (
      <>
    <Button style={{float: 'right'}} type="primary" onClick={showModal}>
        Make Schedule
    </Button>
    <Modal title="Make Schedule" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form
        onSubmit={handleMySubmit}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="employee">
          <Input onChange={setEmployee} value={employee} />
        </Form.Item>

         <Form.Item label="locations">    
          <Select>
            <Select.Option onChange={setLocations} value={locations}>Miami</Select.Option>
          </Select>
        </Form.Item>
    

        <Form.Item label="date">
          <DatePicker onChange={setDate} value={props.date} />
        </Form.Item>


      </Form>
      </Modal>
        </>
        
     );
  };
  
  
  export default Schedule
