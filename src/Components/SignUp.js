import React, { useRef } from 'react'

export default function SignUp({handleSignUp}) {

    const firstName = useRef(null)
    const lastName = useRef(null)

    return (
        <div>
            <form action="#" onSubmit={() => handleSignUp(firstName.current.value, lastName.current.value)}>
                <label htmlFor="fname">First Name:</label>
                <input ref={firstName}type="text" id="fname" name="fname" required/>
                <label htmlFor="lname">Last Name:</label>
                <input ref={lastName} type="text" id="lname" name="lname"/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
