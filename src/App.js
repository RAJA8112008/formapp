import logo from './logo.svg';
import './App.css';

function App() {
  function onfirstHandler(event){
    console.log(event.target.value);
  }
  function onLastHandler(event){
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <form>
   <input type='text' placeholder='first Name' onChange={onfirstHandler}/>
   <br/>
   <br/>
   <input type='text' placeholder='Last Name'  onChange={onLastHandler}/>
   </form>
    </div>
  );
}

export default App;
