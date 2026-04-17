
import './App.css';
import { Home } from './components/Home';
import { ApiRoutes } from './ApiRoutes';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.min.js'
function App() {
  return (
    <div className="App">
     
     {/* <Home /> */}
     <ApiRoutes />
    </div>
  );
}

export default App;
