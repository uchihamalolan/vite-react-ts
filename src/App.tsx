import { Header } from 'components/Header';
import { Button } from 'components/Button';

function App() {
  return (
    <div className="App">
      <Header title="hola" />
      <Button onClick={() => alert('hola')}>Heyo</Button>
    </div>
  );
}

export default App;
