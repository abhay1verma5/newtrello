import './App.css';
import Navbar from './components/Navbar';
import { TodoWrapper } from './components/TodoWrapper';
import {data} from './components/data.js'
function App() {
 
  return (
    
    <div className="App">
    
      <Navbar/>
    
    <div class="row">
  
  
    

  <div class="column">
    <div class="card">
    <TodoWrapper id="1" name="Resources" data={data[0]}></TodoWrapper>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <TodoWrapper id="2" name="Todo" data={data[1]}></TodoWrapper>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <TodoWrapper id="3" name="Doing" data={data[2]}></TodoWrapper>
    </div>
  </div>
  <div class="column">
  <div class="card">
        <TodoWrapper id="4" name="Done" data={data[3]}></TodoWrapper>
  </div>
</div>
  
</div>
     
    </div>
  );
}

export default App;
