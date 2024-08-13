
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' //Esse comando creat root é uma função importada 'react-dom/client' 
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render( //A div root do html referencia aqui. Ligação do react com o html. Render manda desenhar
  //Renderiza tudo ou nada. Dento do StrictMode tem o componete React App. O 'App' é tratado como um elemento html
  <StrictMode>
    <App />
  </StrictMode>,
)
