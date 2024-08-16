import React, { useState } from 'react'

import './App.css'

const EventHandLingExample: React.FC = () => {
  const [inputValue, setImputValue] = useState<string>('');
  const [clickCount, setClickCount] = useState<number>(0);
  const [inputValueName, setImputValueName] = useState<string>('');


  //função para manipular mudanças no campo de entrada
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImputValue(event.target.value);
  };

  //função para manipular mudanças no campo de entrada - name
  const handleInputChangeName = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setImputValueName(event.target.value);
  }

  //funcao para manipular cliques no botao
  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  }

  return (
    <div>
      <h1>Exemplo de Manipulação de Eventos</h1>
      <div>
        <label htmlFor='inputField'>Digite algo: </label>
        <input
          type='text'
          id='inputField'
          value={inputValue}
          onChange={handleInputChange}
        />
        <p>Você digitou: {inputValue}</p>
      </div>
      <div>
        <label htmlFor="InputField2">Digite nome: </label>
        <input type="text" id='InputField2' value={inputValueName} onChange={handleInputChangeName}/>
        <p>Seu nome: {inputValueName}</p>
      </div>
      <div>
        <button onClick={handleButtonClick}>
          Clique aqui
        </button>
        <p>O botão foi clicado {clickCount} vezes</p>
      </div>
    </div>
  )
}



function App() {
  return (
    <div className='App'>
      <EventHandLingExample></EventHandLingExample>
    </div>
  )
}

export default App;

