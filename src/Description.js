import './Description.css';
import header from './images/header_ill.svg';

function Description(){
    return(
        <section >
            <p class="Description">
                <article class="TextDesc">
                    <h1>Virtual healthcare for you</h1>
                    <h2>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</h2>
                    <button>Consult today</button>
                </article>
                <img class="image" src={header}/>
            </p>
        </section>
    );
}
export default Description