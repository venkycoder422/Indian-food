import React from 'react'
import '../styles/HomePage.css'
import { LoginForm } from './LoginForm'
import { Recipes } from './Recipes'
import { useSelector } from 'react-redux'
import { SignUpForm } from './SignUp'
export const Home = (props) => {
  console.log("Props from login form", props);
  const user = useSelector(state => state.auth.userData);
  const signup = useSelector(state => state.auth.signUp);
  console.log(user);
  console.log("SignUp", signup);
  return (
    <div className='Home_main_div'>
      <div className='indianfood_homepage_image'>

        <h1 className="text_above_img" style={{ filter: "contrast(200%)" }}>Indian Recipes</h1>
        <h4 style={{ marginTop: "0px", fontSize: "1.563rem" }}>Bring soul to the Recipe</h4>



      </div>

      {
        user ? <Recipes /> : <LoginForm />
      }
      {
        user || <Recipes />
      }
      {
        signup && <SignUpForm />
      }



    </div>
  )
}
