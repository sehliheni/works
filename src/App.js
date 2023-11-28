import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Playerlist from './cont/Playerlist';
import {players} from './cont/data'



function App() {
  return (
    <div className="foot">
      <header>
      <h1>Club Africain</h1>
      </header>
      <Playerlist players={players} />
      </div>
  );
}

export default App;
