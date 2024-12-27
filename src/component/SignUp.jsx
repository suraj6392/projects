import React from 'react'
import addIcon from '../assests/person.png';
import email from '../assests/email.png';
import pass from '../assests/password.png';
import './Signup.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';


export default function SignUp({ login }) {
    const navigate = useNavigate();

    const [action, setAction] = useState('Login');
    const [formData, setFormData] = useState(
        {
            username: '',
            email: '',
            password: ''
        }
    );
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(value);
        setFormData({ ...formData, [name]: value })
    }
    const validateForm = (e) => {
        const { username, email, password } = formData;
        const newErrors = { username: '', email: '', password: '' };

        // Username Validation
        if (!username) newErrors.username = 'Username is required';

        // Email Validation (simple regex)
        const emailRegex = /\S+@\S+\.\S+/;
        if (!email || !emailRegex.test(email)) newErrors.email = 'Valid email is required';

        // Password Validation
        if (!password) newErrors.password = 'Password is required';
        else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long';

        setErrors(newErrors);
        // console.log(newErrors);

        return Object.values(newErrors).every((error) => error === '');

    }
    const validateForm1 = () => {
        const { email, password } = formData;
        const newErrors = { email: '', password: '' };



        // Email Validation (simple regex)
        const emailRegex = /\S+@\S+\.\S+/;
        if (!email || !emailRegex.test(email)) newErrors.email = 'Valid email is required';

        // Password Validation
        if (!password) newErrors.password = 'Password is required';
        else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long';

        setErrors(newErrors);

        return Object.values(newErrors).every((error) => error === '');

    }


    const handleSubmit = (e) => {
        e.preventDefault();


        if (action == "SignUp") {

            if (validateForm()) {
                console.log("valid user");
                localStorage.setItem(formData.email, JSON.stringify(formData));
                navigate("/")

            }
        } else {

            if (validateForm1()) {
                console.log("valid user from login");
                const getStore = localStorage.getItem(formData.email);
                let parese = JSON.parse(getStore);
                if (formData.email == parese.email && formData.password == parese.password) {
                    console.log("valid user");
                    toast.success("Valid user");
                    login(true);
                    navigate("/home")

                } else {
                    console.log("invalid user");

                }

            }
        }
        setFormData(
            {
                username: '',
                email: '',
                password: '',
            }
        )

    }
    return (
        <div className='container'>


            <form onSubmit={handleSubmit} className='inputs'>
                <div className='header'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>

                {action === 'Login'
                    ? <div></div>
                    :
                    <>
                        <div className='input'>
                            <img src={addIcon}></img>
                            <input type='text' name='username' value={formData.username} placeholder='Name' onChange={handleChange}></input>
                        </div>
                        <p>{errors.username && <span>{errors.username}</span>}</p>
                    </>
                }
                <div className='input'>
                    <img src={email}></img>
                    <input type='email' name='email' value={formData.email} placeholder='Email' onChange={handleChange}></input>
                </div>
                <p>{errors.email}</p>

                <div className='input'>
                    <img src={pass}></img>
                    <input type='password' name='password' value={formData.password} placeholder='Password' onChange={handleChange}></input>
                </div>
                <p>{errors.password && <span>{errors.password}</span>}</p>

                {action === 'SignUp' ?
                    ''
                    :
                    <div className='forget-password'>Lost password <span>click here</span></div>
                }
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
            </form>
            <ToastContainer />
        </div>
    )
}
