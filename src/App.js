import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
//   const [Firstname,setFirstname]=useState("");
// const [Lastname,setLastname]=useState("");
//   function onfirstHandler(event){
//     // console.log(event.target.value);
//     setFirstname(event.target.value);
//   }
//   function onLastHandler(event){
//     // console.log(event.target.value);
//     setLastname(event.target.value);
//   }
const[FormData,setFormData]=useState({First:"",Last:"",email:"",comments:"",isvisible:true,mode:""})
console.log(FormData);
   function ChangeHandler(event){
    const{name,type,checked,value}=event.target
  setFormData(prevFormData=>{
    return {
      ...prevFormData,
      [name]:type==="checkbox"?checked:value
    }
  });
   }
  return (
    <div className="App">
      <form>
   <input type='text' placeholder='first Name' onChange={ChangeHandler} name="First name" value={FormData.firstname}/>
   <br/>
   <br/>
   <input type='text' placeholder='Last Name'  onChange={ChangeHandler} name="Last name" value={FormData.lastname}/>
   <br/>
   <br/>
   <input  type='email' placeholder='Enter your mail' onChange={ChangeHandler} name='email' value={FormData.email}/>
   <br/>
   <br/>
   <textarea placeholder='Enter your comments' name='comments'value={FormData.comments} onChange={ChangeHandler}/>
   <br/>
   <br/>
  <input type='checkbox' name='isvisible' onChange={ChangeHandler} id='isvisible' checked={FormData.isvisible}/>
  <label htmlFor='isvisible'>AM i visible ?</label>
  <br/>
   <br/>
   <input type='radio' name='mode' value='online-mode' checked={FormData.value==="online-mode"} id='online-mode' onChange={ChangeHandler}/>
   <label htmlFor='mode'>Online-mode</label>

   <input type='radio' name='mode' value='offline-mode' checked={FormData.value==="offline-mode"} id='offline-mode' onChange={ChangeHandler}/>
   <label htmlFor='mode'>Offline-mode</label>
   </form>

    </div>
  );
}

export default App;
