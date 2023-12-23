import './App.css';
import Header from './Header.js';
import './color.css';
import Description from './Description.js';
import Services from './Services.js';
import Leading from './Leading.js';

function App() {
  return (
    <article itemscope itemtype="http://schema.org/BlogPosting">
   <Header/>
   <main>
    <Description/>
    <Services/>
    <Leading/>
   </main>
   </article>
  );
}

export default App;