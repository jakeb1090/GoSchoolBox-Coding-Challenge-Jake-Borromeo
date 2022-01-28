import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid magenta;
  justify-content: center;
  padding: .5em;
  margin: 1em;
`;

const Display = (props) => {
  return (
    <DisplayContainer>
      Display
      </DisplayContainer>
   );
}

export default Display;