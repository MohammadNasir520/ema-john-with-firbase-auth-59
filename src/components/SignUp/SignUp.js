import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContxts';
import './SignUp.css'

const SignUp = () => {
const [error, setError]=useState(null);
const {createUser}=useContext(AuthContext);

const handleSubmit=(event)=>{
    event.preventDefault()
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    const confirm=form.confirm.value;

    console.log(email,password,confirm);

    if (password.length<6){
        setError('password should be 6 or more charerter')
        return;
    }
     
    if (password !==confirm){
        setError('Your Password didnot match')
        return;
    }
    createUser(email,password)
    .then((result)=>{
        const user=result.user;
        console.log(user)
        form.reset();
    })
    .catch(error=>{
        console.error('error',error)
    })

}



    return (
        <div className='form-container'>
        <h2 className='form-title'> Signup</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="email"> Email </label>
                    <input type="email" name="email" required />
            </div>


            <div className="form-control">
                <label htmlFor="password"> Password </label>
                    <input type="password" name="password" required />
            </div>

            <div className="form-control">
                <label htmlFor="confirm"> Confirm Password </label>
                    <input type="password" name="confirm" required />
            </div>
            <p className='text-error'> {error} </p>
            <br />

           <input className='btn-submit' type="submit" value="SignUp" />


        </form>
        <p>Already have an account? <Link to='/login'>Please Login</Link></p>
    </div>
    );
};

export default SignUp;