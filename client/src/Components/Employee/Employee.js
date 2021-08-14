import React from 'react';
import { List, Typography, Divider } from 'antd';

const data = [
  'Welcome New Employee!',
  'Date',
  'Location',
];

ReactDOM.render(
  <>
    <Divider orientation="left">Default Size</Divider>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
    <Divider orientation="left">Small Size</Divider>
    <List
      size="small"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
    <Divider orientation="left">Large Size</Divider>
    <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  </>,
  mountNode,
);

// const EmployeeWelcome = () => {
//     return (
//         <div>
//             <h1>Welcome Employee</h1>
//             <h2>Today's Date</h2>
//             <h2>Location</h2>
//         </div>
        
//     )
// }

// export default EmployeeWelcome;