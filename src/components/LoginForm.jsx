import React from 'react';
import '../styles/LoginForm.css';
import { useSelector } from 'react-redux'
import { AiFillCloseCircle } from 'react-icons/ai';
import { SignUpForm } from './SignUp';
import { Link } from 'react-router-dom';
import axios from "axios";
import { Home } from './Home';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';
import { signup } from '../redux/actions';
import { Navigate } from 'react-router-dom';
export const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [data, setData] = React.useState(false);
  const [userDate, setUserData] = React.useState([]);
  const userSign = useSelector(state => state.auth.signUp);
  const dispatch = useDispatch();


  const addDataHandler = (e) => {

    e.preventDefault();
    axios.get('http://localhost:3000/user')
      .then(function (response) {
        // handle success
        setUserData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

    console.log("user", userDate)

    userDate.map((ele) => {

      if (ele.email === email && password === ele.password) {
        dispatch(login(true));
        console.log("SUCCUS");

      }
    })

  };



  const signupHandler = () => {
    dispatch(signup(true));
    console.log("SIGNUP");
  }



  return (
    <>

      <div class="center">
        {/* <input type="checkbox" id="show"/>
        <label for="show">View Form</label> */}

        <div class="container">
          <label for="show" class="close-btn fas fa-times" title="close"><AiFillCloseCircle /></label>
          <div class="text">
            Login Form
          </div>
          <form action="#">

            <div class="data">
              <label>Email or Phone</label>
              <input type="text" value={email}
                onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div class="data">
              <label>Password</label>
              <input type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div class="forgot-pass">
              <a href="#">Forgot Password?</a>
            </div>
            <div class="btn">
              <div class="inner"></div>
              <button type="submit" onClick={addDataHandler}>login</button>
            </div>
            <div class="signup-link">
              Not a member? <a onClick={signupHandler}>Signup now</a>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}
