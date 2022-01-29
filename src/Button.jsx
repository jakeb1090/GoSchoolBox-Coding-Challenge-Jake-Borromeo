import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid magenta;
  margin: 1em;
  padding: 1em;
`;

const Button = ({buttonValue, handleClick}) => {
  return (
    <ButtonWrapper value={buttonValue} onClick={handleClick}>
      {buttonValue}
    </ButtonWrapper>
   );
}

export default Button;