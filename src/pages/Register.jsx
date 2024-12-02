import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes,Link,Switch } from 'react-router-dom';

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const RegisterBox = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 350px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

const LinkText = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
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
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Proceed with registration logic
      console.log('Form is valid. Proceed with registration!');
    }
  };

  return (
    <RegisterContainer>
      <RegisterBox>
        <Title>Register</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <ErrorText>{errors.username}</ErrorText>}
          
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
          
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <ErrorText>{errors.password}</ErrorText>}
          
          <Button type="submit">Register</Button>
        </form>
        <LinkText>
          Already have an account? <Link to="/">Login</Link>
        </LinkText>
      </RegisterBox>
    </RegisterContainer>
  );
}

export default Register;
