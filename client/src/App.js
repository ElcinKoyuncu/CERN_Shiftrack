import React from 'react';
import NavMenu from './Components/Menu/NavMenu';
import Login from './Components/Auth/Login';
import { Layout } from 'antd';


const App = () => {

  const {Header, Content} = Layout;
  return (

    <>
    <Layout>
      <Header style={{ background:'white' }}>
        <NavMenu/>
      </Header>
      <Content>
        <Login/>
      </Content>
    </Layout>
    
    </>
  );
}

export default App;
