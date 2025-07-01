import './App.css';
import { useState } from 'react';

function App() {
  const [FormData, setFormData] = useState({
    firstname: "", lastname: "", email: "", country: "", streetaddress: "",
    city: "", state: "", postal: "", comments: false, offer: false, candidate: false,
    pushNotification: ""
  });

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally data is:");
    console.log(FormData);
  }

  function ChangeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label htmlFor='firstname'>First Name</label>
        <br />
        <input
          type='text'
          id='firstname'
          name='firstname'
          placeholder='Raj'
          value={FormData.firstname}
          onChange={ChangeHandler}
        />
        <br />

        <label htmlFor='lastname'>Last Name</label>
        <br />
        <input
          type='text'
          id='lastname'
          name='lastname'
          placeholder='Kumar'
          value={FormData.lastname}
          onChange={ChangeHandler}
        />
        <br />

        <label htmlFor='email'>Email</label>
        <br />
        <input
          type='email'
          id='email'
          name='email'
          placeholder='raj@abcgmail.com'
          value={FormData.email}
          onChange={ChangeHandler}
        />
        <br />

        <label htmlFor='country'>Country</label>
        <br />
        <select
          id='country'
          name='country'
          value={FormData.country}
          onChange={ChangeHandler}
        >
          <option value='India'>India</option>
          <option value='United Kingdom'>United Kingdom</option>
          <option value='America'>America</option>
          <option value='China'>China</option>
        </select>
        <br />

        <label htmlFor='streetaddress'>Street Address</label>
        <br />
        <input
          type='text'
          id='streetaddress'
          name='streetaddress'
          placeholder='A-2/b-0'
          value={FormData.streetaddress}
          onChange={ChangeHandler}
        />
        <br />

        <label htmlFor='city'>City</label>
        <br />
        <input
          type='text'
          id='city'
          name='city'
          placeholder='Delhi'
          value={FormData.city}
          onChange={ChangeHandler}
        />
        <br />

        <label htmlFor='state'>State / Province</label>
        <br />
        <input
          type='text'
          id='state'
          name='state'
          placeholder='Hapur'
          value={FormData.state}
          onChange={ChangeHandler}
        />
        <br />

        <label htmlFor='postal'>ZIP / Postal</label>
        <br />
        <input
          type='text'
          id='postal'
          name='postal'
          placeholder='241101'
          value={FormData.postal}
          onChange={ChangeHandler}
        />
        <br />

        <fieldset>
          <legend>By Email</legend>
          <div className='flex'>
            <input
              type='checkbox'
              name='comments'
              id='comments'
              checked={FormData.comments}
              onChange={ChangeHandler}
            />
            <div>
              <label htmlFor='comments'>Comments</label>
              <p>Get notified when someone posts a comment.</p>
            </div>

            <input
              type='checkbox'
              name='candidate'
              id='candidate'
              checked={FormData.candidate}
              onChange={ChangeHandler}
            />
            <div>
              <label htmlFor='candidate'>Candidate</label>
              <p>Get notified when candidates accept or reject an offer.</p>
            </div>

            <input
              type='checkbox'
              name='offer'
              id='offer'
              checked={FormData.offer}
              onChange={ChangeHandler}
            />
            <div>
              <label htmlFor='offer'>Offer</label>
              <p>Get notified when someone posts a job.</p>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Push Notifications</legend>
          <div>These are delivered via SMS to your mobile phone</div>
          <input
            type='radio'
            id='everything'
            name='pushNotification'
            value='everything'
            checked={FormData.pushNotification === "everything"}
            onChange={ChangeHandler}
          />
          <label htmlFor='everything'>Everything</label>

          <input
            type='radio'
            id='sameasemail'
            name='pushNotification'
            value='sameasemail'
            checked={FormData.pushNotification === "sameasemail"}
            onChange={ChangeHandler}
          />
          <label htmlFor='sameasemail'>Same as Email</label>

          <input
            type='radio'
            id='nopushnotification'
            name='pushNotification'
            value='nopushnotification'
            checked={FormData.pushNotification === "nopushnotification"}
            onChange={ChangeHandler}
          />
          <label htmlFor='nopushnotification'>No Push Notifications</label>
        </fieldset>

        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
