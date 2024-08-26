import './App.css';
import { useState } from 'react';
import ColorBox from './components/ColorBox';
import ColorInput from './components/ColorInput';
function App() {
  const [color, setColor] = useState<string>('white');
  return (
    <div className='App'>
      <h1>Mudar Cor de Fundo com useEffect</h1>
      <ColorInput color={color} setColor={setColor} />
      <ColorBox color={color} />
    </div>
  );
}
export default App;
