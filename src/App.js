import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const[FormData,setFormData]=useState({firstName:"",lastName:"",email:"",country:"",streetaddress:"",
    city:"",state:""
  })
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
      value={FormData.lastName}
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
      <br/>

<label htmlFor='country'>Country</label>
      <br/>
      <select 
      type='text'
      id='country'
      name='country'
      value={FormData.country}
      onChange={ChangeHandler}
      >
        <option>India</option>
        <option>United Kingdom</option>
        <option>America</option>
        <option>China</option>
      </select>
     <br/>
      <label htmlFor='streetaddress'>Street Address</label>
        <br/>
      <input
      type='text'
      id='streetaddress'
      name='streetaddress'
      placeholder='A-2/b-0'
       onChange={ChangeHandler}
      value={FormData.streetaddress}
      />
       <br/>
      <label htmlFor='streetaddress'>City</label>
        <br/>
      <input
      type='text'
      id='city'
      name='city'
      placeholder='Delhi'
       onChange={ChangeHandler}
      value={FormData.city}
      />
       <br/>
      <label htmlFor='state'>State\Province</label>
        <br/>
      <input
      type='text'
      id='state'
      name='state'
      placeholder='Hapur'
       onChange={ChangeHandler}
      value={FormData.state}
      />
      <br/>
      <label htmlFor='Postal'>ZIP\Postal</label>
        <br/>
      <input
      type='text'
      id='postal'
      name='postal'
      placeholder='241101'
       onChange={ChangeHandler}
      value={FormData.postal}
      />

     </form>

    </div>
  );
}

export default App;
