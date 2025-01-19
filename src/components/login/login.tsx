import React, { useState } from 'react'
import './login.css'


const Login = () => {
    const [loginDetails, setlLoginDetails] = useState({
        userId: "", 
		password: ""
    })
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setlLoginDetails({ userId: loginDetails.userId, password: event.target.value })
    }
    const handleChangeId = (event: React.ChangeEvent<HTMLInputElement>) => {
        setlLoginDetails({ userId: event.target.value, password: loginDetails.password })
    }
    const  handleLogin = async(): void => {
        try{
            const res = await fetch("https://fakestoreapi.com/auth/login",{
                method:'POST',
                body:JSON.stringify({
                    "username": "johnd",
                    "password": "m38rmF$"
                }),
				headers: {
					"Content-Type":"application/json",
					"Accept": "application/json",
				  }
            })
			const response = await res.json();
            //console.log("response ",response.token)
            localStorage.setItem('User ID', loginDetails.userId);
            localStorage.setItem('Password', loginDetails.password);
			localStorage.setItem('Token', response.token);
            setlLoginDetails({ userId: "", password: "" })
        }
        catch(err){
           console.log("error while logging in ", err.message)
        }
    }
    return (
        <div className='login'>
            <div className='loginDetails'>
                <input className='userId' placeholder='Enter User ID' value={loginDetails.userId} onChange={handleChangeId}></input>
                <input className='password' placeholder='Enter Password' value={loginDetails.password} onChange={handleChangePassword}></input>
            </div>
            <button className="loginBtn" onClick={handleLogin}>Login</button>
        </div>
    )

}

export default Login