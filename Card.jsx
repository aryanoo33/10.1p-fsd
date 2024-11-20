import './Card.css'
function Card(props)
{
   return(
    <div className="column">
    <img className = "imagesp" src= {props.avatar} alt ='Staff' width ={300} height ={200}/>
    <h3>{props.name} </h3>
    <p> {props. description}</p>
    <div className='column2'>
        <p> {props. star}</p>
        <p> {props. Author}</p>
    </div>
    </div>
    )
}

export default Card