import { Layout } from 'antd';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import styled from 'styled-components';
import CustomRoute, { NoAuth, RequiredAuth } from './Auth';
import LogoutButton from './logout';
import { Login, PostsPage, SinglePostPage } from './views';

const ContentWrap = styled.div`
  min-height: calc(100vh - 160px);
  margin: 20px;
  padding: 20px;
  background:#fff;
  border-radius: 14px;
`;

function App() {
  const {Header, Content, Footer} = Layout;

  return (
    <Router>
    <Layout>
    <Header>
      <LogoutButton />
    </Header>
    <Content>
      <ContentWrap>
        <Routes>
          <Route path="/" exact element={<RequiredAuth><PostsPage /></RequiredAuth>} />
          <Route path="/login" exact element={<NoAuth><Login /></NoAuth>} />
          <Route path="/:id" exact element={<RequiredAuth><SinglePostPage /></RequiredAuth>} />
        </Routes>
      </ContentWrap>
    </Content>
    <Footer style={{textAlign:'center'}}>CGC Design ©2021 Created by Safouane Ahmed Salah</Footer>
  </Layout>
  </Router>
  );
}

export default App;
