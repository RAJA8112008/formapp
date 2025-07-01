import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const[FormData,setFormData]=useState({firstName:"",lastName:"",email:""})
  function ChangeHandler(event){
    const{name,value,type,checked}=event.target;
    setFormData((prev)=>({...prev,
      [name]:value
    }))
  }
  return (
    <div className="App">
     <form>
      <label htmlFor='name'>
        First Name</label>
        <br/>
      <input
      type='text'
      id='firstame'
      name='firstame'
      placeholder='Raj'
      value={FormData.Name}
      onChange={ChangeHandler}
      />
      <br/>
      <label htmlFor='lastname'> Last Name</label>
        <br/>
      <input
      type='text'
      id='lastname'
      name='lastname'
      placeholder='Kumar'
       onChange={ChangeHandler}
      value={FormData.LastName}
      />
      <br/>
      <label htmlFor='name'>Email</label>
        <br/>
      <input
      type='email'
      id='email'
      name='email'
      placeholder='Raj@abcgmail.com'
       onChange={ChangeHandler}
      value={FormData.email}
      />
     </form>

    </div>
  );
}

export default App;
