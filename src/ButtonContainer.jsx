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

const ButtonContainer = ({handleClick}) => {
  return (
    // <ButtonContainerStyling handleClick={e=>handleClick(e.target.value)}>
    <ButtonContainerStyling>
      <ButtonRow>
        <Button buttonValue={7} handleClick={handleClick}/>
        <Button buttonValue={8} handleClick={handleClick} />
        <Button buttonValue={9} handleClick={handleClick} />
        <Button buttonValue={'/'} handleClick={handleClick} />
      </ButtonRow>
      <ButtonRow>
        <Button buttonValue={4} handleClick={handleClick} />
        <Button buttonValue={5} handleClick={handleClick} />
        <Button buttonValue={6} handleClick={handleClick} />
        <Button buttonValue={'X'} handleClick={handleClick} />
      </ButtonRow>
      <ButtonRow>
        <Button buttonValue={1} handleClick={handleClick} />
        <Button buttonValue={2} handleClick={handleClick} />
        <Button buttonValue={3} handleClick={handleClick} />
        <Button buttonValue={'-'} handleClick={handleClick} />
      </ButtonRow>
      <ButtonRow>
        <Button buttonValue={'.'} handleClick={handleClick} />
        <Button buttonValue={0} handleClick={handleClick}/>
        <Button buttonValue={'='} handleClick={handleClick} />
        <Button buttonValue={'+'} handleClick={handleClick} />
      </ButtonRow>
      <ButtonRow>
        <Button buttonValue={'clear'} handleClick={handleClick} />

      </ButtonRow>
    </ButtonContainerStyling>
   );
}

export default ButtonContainer;


