import './App.css';
import Header from './Header.js';
import './color.css';
import Description from './Description.js';
import Services from './Services.js';

function App() {
  return (
    <article itemscope itemtype="http://schema.org/BlogPosting">
   <Header/>
   <main>
    <Description/>
    <Services/>
   </main>
   </article>
  );
}

export default App;