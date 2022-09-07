import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const handleInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
  setName(event.target.value);
}

  const handleInputSobrenome = (event:React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  }
  
  const handleInputIdade = (event:React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  }

  return (
    <div>
      <div>
        Nome:
        <hr />
        <input type="text" value={name} onChange={handleInputName} />
      </div>

      <div>
        Sobrenome:
        <hr />
        <input type="text" value={lastName} onChange={handleInputSobrenome} />
      </div>

      <div>
        Idade:
        <hr />
        <input type="text" value={age} onChange={handleInputIdade} />
      </div>

      <hr/>

      Olá {name} {lastName}, tudo bem?<br/>
      Você tem {age} anos.
    </div>
  );
}

export default App;