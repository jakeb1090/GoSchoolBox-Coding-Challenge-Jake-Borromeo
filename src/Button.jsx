import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid magenta;
  margin: 1em;
  padding: 1em;
`;

const Button = ({buttonValue}) => {
  return (
    <ButtonWrapper>
      {buttonValue}
    </ButtonWrapper>
   );
}

export default Button;