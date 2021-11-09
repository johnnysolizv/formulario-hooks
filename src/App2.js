import React, { useState } from 'react';
import './App.css';
import Form2 from './components/Forms2';
import Results from './components/Results';

function App2() {

  const [state, setState] = useState({  
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  return (
    <div className="App2">
      <Form2  inputs={state} setImputs={setState} />
      <Results data={state} />
    </div>
  );
}

export default App2;
