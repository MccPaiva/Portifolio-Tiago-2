import React , { useEffect, useState } from 'react';
import Root from './Pages/Root';
import Post from './Pages/Post';
import Error from './Pages/Error';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
// import { slide as Menu } from 'react-burger-menu'
import './style.css';
import './menu-style.css';

import tiago from './images/tiago.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App(){

  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const activeMenuStyle = {
    left: menuActive ? '50%' : '100%',
    right: menuActive ? '0' : '-50%',
  }

  const clickHide = {
    display: menuActive ? 'block' : 'none',
   }

  return(
    <div className='App'>
      <Router>
      <header>
        <div className='header-container'>
          <nav className='desktop menu'>
            <ul>
              <li><Link to={`/#`}>Home</Link></li>
              <li><Link to={`/#posts`}>Peças</Link></li>
              <li><a href='#about'>Sobre mim</a></li>
              <li><a href='#contact'>Contato</a></li>
            </ul>
          </nav>
          <div className='mobile'> 
            <FontAwesomeIcon onClick={() => toggleMenu(0)} className="burger" icon={faBars}/>
            <div style={clickHide} className="click-hide" onClick={() => toggleMenu(0)}/>
            <nav style={activeMenuStyle} className='mobile-menu menu'>
              <ul>
                <li><Link onClick={() => toggleMenu(0)} to={`/#`}>Home</Link></li>
                <li><Link onClick={() => toggleMenu(0)} to={`/#posts`}>Peças</Link></li>
                <li><a onClick={() => toggleMenu(0)} href='#about'>Sobre mim</a></li>
                <li><a onClick={() => toggleMenu(0)} href='#contact'>Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div id="posts"></div>
        <section>
          <Routes>
             <Route path="/" element={<Root />} exact/>
             <Route path="posts/:slug" element={<Post />} />
             <Route path="post" element={<Post />}></Route>
             <Route path="*" element={<Error/>} />
          </Routes>
        </section>
      </Router>

      <section id="about" className="about">
        <div>
          <div className="text-container">
            <h1>Sobre Mim</h1>
            <p>Escrever sempre foi o ato mais aproximado daquilo que enxergo como capaz de fazer bem.</p>
            <p>É através dele que eu abstraio a realidade e seus elementos simbólicos — e enxergo suas características.</p>
            <p>Por buscar o fazer dessa forma que conheci o Copywriting.</p>
            <p>E é dessa mesma forma que ajudarei você.</p>
          </div>

          <img src={tiago}></img>
        </div>
      </section>

      <section id="contact" className="contact">
          <div>
            <h1>Contato</h1>
            <div className="whats"><a onClick={() => {navigator.clipboard.writeText("+55 (13) 99105-6245")}}><span>Whatsapp: +55 (13) 99105-6245</span></a></div>
            <div className="mail"><a href={`mailto: otiagoalmeida.copy@gmail.com`} ><span>Email: otiagoalmeida.copy@gmail.com</span></a></div><br/>
          </div>
      </section>
    </div>
  );
}

export default App; 