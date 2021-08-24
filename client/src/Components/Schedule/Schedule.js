import React, { useState } from "react";
import { Button, Modal } from "antd";
import {
    Form,
    Input,
    Select,
    DatePicker,
  } from 'antd';

  const { Option } = Select;


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
          id: Math.random(),
          title:"Schedule",
          date: Date.now,
          allDay: true,
        }) 
      };

    const handleCancel = () => {
        setIsModalVisible(false);
      };
    
    const [locations, setLocations] = useState([{id:1, lname:"Miami"}, {id:2,lname:"Miramar"},{id:3,lname:"Orlando"}])
    const [date, setDate] = useState(null)
    const [employees, setEmployees] = useState([{id:1,uname: "Test1"},{id:2,uname: "Test2"}, {id:3,uname: "Test3"}])
    const handleMySubmit = event => {
            event.preventDefault();
            console.log(date, employees, locations);
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
        <Select>

          { 
         employees.map((e) => {
            return <Option key={e.id} value={e.uname}>{e.uname}</Option>;
          })
          }
       
           

          </Select>
       
        </Form.Item>

         <Form.Item label="locations">    
          <Select>

          { 
          locations.map((city) => {
            return <Option key={city.id} value={city.lname}>{city.lname}</Option>;
          })
          }
            {/* <Select.Option onChange={setLocations} value={locations}>Miami</Select.Option> */}
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
