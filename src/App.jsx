import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Display from './Display'
import ButtonContainer from './ButtonContainer'

const AppStyling = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  max-width: 30em;
  padding: 1em;
`;

const App = (props) => {
  return (
    <AppStyling>
      <Display />
      <ButtonContainer />
    </AppStyling>
   );
}

export default App;