import React from 'react';
import '../styles/LoginForm.css';
import axios from "axios";
import { AiFillCloseCircle } from 'react-icons/ai';
import { WindowSharp } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { signup } from '../redux/actions';
import { useDispatch } from 'react-redux';
export const SignUpForm = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [User, setUser] = React.useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const SignUpDataHandler = (e) => {
        e.preventDefault();
        axios({
            method: "get",
            url: 'https://indian-food.onrender.com/user'
        })
            .then((res => {
                //console.log(res.data)
                setUser(res.data);
            }))
            .catch(err => {
                console.log(err)
            })
        //setData([...data, payload]);
        // console.log(data);
        // axios({
        //     method: 'post',
        //     url: '/user',
        //     data: payload
        // });
        console.log("CALLING1")
        //console.log(User);
        if (validateCheck()) {
            axios.post('https://indian-food.onrender.com/user', {
                name,
                email,
                password
            })
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });

            navigate("/");
        } else {
            alert(`${email} already exists`);
        }
    };


    const validateCheck = () => {

        console.log(User[0].email == email)
        for (var i = 0; i < User.length; i++) {

            if (User[i].email === email || email == '') {

                return false


            }
        }
        console.log("nothing in data");
        return true;
    }

    const handleLogin = () => {
        dispatch(signup(false));
        console.log("SIGNUP to login");
    }




    return (
        <div class="center">
            {/* <input type="checkbox" id="show"/>
        <label for="show">View Form</label> */}
            <div class="container">
                <label for="show" class="close-btn fas fa-times" title="close"><AiFillCloseCircle /></label>
                <div class="text">
                    SignUp Form
                </div>
                <form action="#">
                    <div className="data">
                        <label>Name</label>
                        <input type="text" value={name}
                            onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div className="data">
                        <label>Email or Phone</label>
                        <input type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="data">
                        <label>Password</label>
                        <input type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    <div className="btn">
                        <div className="inner"></div>
                        <button type="submit" onClick={SignUpDataHandler}>SignUp</button>
                    </div>

                    <div class="signup-link">
                        Are you a member? <a onClick={handleLogin}>Login now</a>
                    </div>

                </form>
            </div>
        </div>
    )
}
