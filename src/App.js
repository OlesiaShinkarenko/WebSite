import './App.css';
import Header from './Header.js';
import Description from './Description.js';

function App() {
  return (
    <article itemscope itemtype="http://schema.org/BlogPosting">
   <Header/>
   <main>
    <Description/>
   </main>
   </article>
  );
}

export default App;