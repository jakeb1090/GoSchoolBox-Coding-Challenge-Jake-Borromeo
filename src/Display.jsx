import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid magenta;
  justify-content: right;
  padding: .5em;
  margin: 1em;
  font-size: 2em;
`;

const Display = ({displayOutput}) => {
  return (
    <DisplayContainer>
      {displayOutput}
    </DisplayContainer>
   );
}

export default Display;