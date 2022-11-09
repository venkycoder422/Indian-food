import React from 'react';
import "../styles/Recipes.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

export const Recipes = () => {
  const [getrecipes, setrecipes] = React.useState([]);
  const user = useSelector(state => state.auth.userData);
  React.useEffect(() => {
    fetch(`https://indiafood-server.herokuapp.com/recipes`)
      .then((res) => res.json())
      .then((res) => setrecipes(res))
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

  }, []);
  console.log("dfd", getrecipes);

  return (
    <div className='main_div'>


      <div>
        <h1>Recipes</h1>
        <div className='tag_centent'>
          {
            getrecipes?.map((data) => (
              <div>
                {
                  user?<Link to={`/recipes/${data.id}`}> <h2>{data.category}</h2></Link>:<Link to=''> <h2>{data.category}</h2></Link>
                }
                
              </div>
            ))


          }
        </div>
      </div>
      <div className='recipes_div'>
        {
          getrecipes?.map((data) => (
            <div style={{ margin: "0%",minHeight:"300px"}}>
              {
                user ? <Link to={`/recipes/${data.id}`}><img src={data.img}></img></Link> : <img src={data.img}></img>
              }
              <h3>{data.name}</h3>
              <span>Prep: {data.pretime} | Cook: {data.cooktime}</span>
            </div>
          ))
        }
      </div>

    </div>
  )
}

