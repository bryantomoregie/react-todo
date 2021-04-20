import React, { useState } from 'react'
import SignUp from './Components/SignUp'
import TaskMaster from './Components/TaskMaster'
import './Style/App.css'

function App() {
const [name, setName] = useState()


function handleSignUp(firstName, lastName){
    const userName = lastName != null ? firstName + " " + lastName : firstName
    return setName(userName)   
}

  return (
    name ?
    <TaskMaster name={name}/>
    :
    <div className="signup-container">
      <SignUp handleSignUp={handleSignUp}/>
    </div>
   
  );
}



export default App;

/*
Component for the sign in
Component for the TaskMaster
Component for Task

Form, state saved in App, named passed to Sign in
*/
