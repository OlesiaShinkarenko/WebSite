import './App.css';
import Header from './Header.js';
import './color.css';
import Description from './Description.js';
import Services from './Services.js';
import Leading from './Leading.js';
import Download from './Download.js';
import Review from './review/Review.js';
import profile from './images/profile.png';

function App() {
  return (
    <article itemscope itemtype="http://schema.org/BlogPosting">
   <Header/>
   <main>
    <Description/>
    <Services/>
    <Leading/>
    <Download/>
    <Review profile={profile}/>
   </main>
   </article>
  );
}

export default App;