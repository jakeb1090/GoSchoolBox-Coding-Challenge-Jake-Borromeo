import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import styled from 'styled-components';

const MainLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;

ReactDOM.render(
  <MainLayout>
    <App />
  </MainLayout>
  , document.getElementById('root')
  )
