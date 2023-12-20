import logo from './images/logo.svg';
import './Header.css';

function Header(){
    return(
        <header className="header">
        <p>
             <img src ={logo} class= "logo" alt="HealthCare" />
        <h1>HealthCare</h1> 
        </p>
      <nav>
        <ul>
          <li ><a class="home" href="#">Home</a></li>
          <li><a href="#">Find a doctor</a></li>
          <li><a href="#">Apps</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">About us</a></li>
        </ul>
      </nav>
      </header>
    );
}
export default Header