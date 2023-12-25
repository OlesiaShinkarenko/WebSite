import Card from './Card.js';
import './Services.css';
import search from './images/search.svg';
import pharmacy from './images/pharmacy.svg';
import consultation from './images/consultation.svg';
import details from './images/details.svg';
import care from './images/care.svg';
import tracking from './images/tracking.svg';
import Button from './Button.js';
import Divider from './Divider.js';

function Services(){
    return(
        <section class="Services">
            <p class="Our">Our services</p>
           <Divider/>
            <p class="ServiceDesc">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            <ul class="gridCard">
                <Card image={search} title ={"Search doctor"} description={"Choose your doctor from thousands of specialist, general, and trusted hospitals"} />
                <Card image={pharmacy} title ={"Online pharmacy"} description={"Buy your medicines with our mobile application with a simple delivery system"} />
                <Card image={consultation} title ={"Consultation"} description={"Free consultation with our trusted doctors and get the best recomendations"} />
                <Card image={details} title ={"Details info"} description={"Free consultation with our trusted doctors and get the best recomendations"} />
                <Card image={care} title ={"Emergency care"} description={"You can get 24/7 urgent care for yourself or your children and your lovely family"} />
                <Card image={tracking} title ={"Tracking"} description={"Track and save your medical history and health data"} />
            </ul>
            <Button text={"Learn more"}/>
        </section>
    );
}

export default Services;