import './Leading.css';
import Button from './Button.js';
import image from './images/leading.png';

function Leading(){
    return(
        <section>
                 <p class="Leading">
                     <img class="image" src={image}/>
                <p class="TextDesc">
                    <h1>Leading healthcare providers</h1>
                    <hr class="dividerText" ></hr>
                    <h2 class="Texth2">We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</h2>
                    <Button text={"Learn more"}/>
                </p>
            </p>
        </section>
    );
}

export default Leading