import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button.jsx'

const ButtonContainerStyling = styled.div`

`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid magenta;
  min-width: 10em;
  justify-content: center;
`;

const ButtonContainer = (props) => {
  return (
    <ButtonContainerStyling>
      <ButtonRow>
        <Button buttonValue={7} />
        <Button buttonValue={8} />
        <Button buttonValue={9} />
      </ButtonRow>
      <ButtonRow>
        <Button buttonValue={4} />
        <Button buttonValue={5} />
        <Button buttonValue={6} />
      </ButtonRow>
      <ButtonRow>
        <Button buttonValue={1} />
        <Button buttonValue={2} />
        <Button buttonValue={3} />
      </ButtonRow>
    </ButtonContainerStyling>
   );
}

export default ButtonContainer;