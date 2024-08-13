import React from 'react';
import './App.css';

//Definindo um interface para o props
interface WelcomeProps{
  name: string;
  age: number;
  address: string;
  city: string;
}

//Componente funcional que utiliza props
const Welcome: React.FC<WelcomeProps> = ({name, age, city, address}) => {
  return(
    <div>
      <h1> Hello, {name}!</h1>
      <p>You are {age} years old. You live in {city} at {address}</p>
    </div>
  )
}

function App() {


  return (
    <div className='App'>
      <Welcome name='Alice' age={25} city='Franca' address='Leporace, nº 5532'></Welcome>
      <Welcome name='Bob' age={30} city='São Paulo' address='Paulista, nº 1234'></Welcome>
      <Welcome name='Charlie' age={35} city='Uberlândia' address='Jaraguá, nº415'></Welcome>
    </div>
  )
}

export default App
