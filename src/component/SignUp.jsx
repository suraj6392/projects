import React from 'react'
import addIcon from '../assests/person.png';
import email from '../assests/email.png';
import pass from '../assests/password.png';
import './Signup.css'
import { useState } from 'react';

export default function SignUp() {
    const [action, setAction] = useState('Login');
    return (
        <div className='container'>

            <div className='inputs'>
                <div className='header'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
                {action==='Login'?<div></div>:<div className='input'>
                    <img src={addIcon}></img>
                    <input type='text' name='name' placeholder='Name'></input>
                </div>}
                <div className='input'>
                    <img src={email}></img>
                    <input type='email' name='email' placeholder='Email'></input>
                </div>
                <div className='input'>
                    <img src={pass}></img>
                    <input type='password' name='password' placeholder='Password'></input>
                </div>
                {action==='SignUp'?'':<div className='forget-password'>Lost password <span>click here</span></div>}
                <div className='submit-btns'>
                   
                    <button
                        className={action === 'SignUp' ? 'submit gray' : 'submit'}
                        onClick={() => setAction('Login')}
                    >
                        Login
                    </button>
                    <button
                        className={action === 'Login' ? 'submit gray' : 'submit'}
                        onClick={() => setAction('SignUp')}
                    >
                        SignUp
                    </button>
                </div>
            </div>

        </div>
    )
}
