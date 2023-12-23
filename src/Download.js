import './Download.css';
import image from './images/download.png';
import Button from './Button.js';

function Download(){
    return(
        <section>
               <p class="Download">
                <article class="TextDesc">
                    <h1>Download our mobile apps</h1>
                    <hr class="dividerText" ></hr>
                    <h2>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</h2>
                    <Button text={"Download"}/>
                </article>
                <img class="image" src={image}/>
            </p>
        </section>
    );
}
export default Download