import './Card.css';

function Card({ image, title, description }){
    return(
        <li class="container">
              <img class="image" src={image}/>
              <h1>{title}</h1>  
              <body>{description}</body>
        </li>
    );

}

export default Card;