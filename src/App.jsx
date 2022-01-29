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
  const [ displayVal, setDisplayVal ] = useState('0')

  const handleClick = (buttonVal) => {
    console.log(buttonVal)
    if (buttonVal.target.outerText === 'clear') {
      setDisplayVal('')
    } else {

      setDisplayVal(prevState=> prevState += buttonVal.target.outerText)
    }
  }

  return (
    <AppStyling>
      <Display displayOutput={displayVal}/>
      <ButtonContainer handleClick={handleClick} />
    </AppStyling>
   );
}

export default App;