import './App.css';
import { Text } from './components/Text/Text.js'
import { Button } from './components/Button/Button.js'
import { Title } from './components/Title/Title.js'

function App() {
  return (
    <>
      <Title value='Desafio 1' />
      <Text color='#FFA500' value='Sexta-feira, dia de maldade' />

      <Title value='Desafio 2' />
      <Button label='Opa, tudo bom?' />
    </>
  );
}

export default App;
