import React from 'react';
import 'bulma/css/bulma.min.css';
import '../css/style.css'

function NavTabs({ currentPage, handlePageChange }) {


  const rimboid = () => {
    const navbarMenu = document.querySelector('#navbarBasicExample');
    navbarMenu.classList.toggle('is-active');
  console.log("clicked");
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <h3>
    Andrew Johnson

    </h3>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={rimboid}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu rumpus">
    <div className="navbar-start rampus">
    <a  href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
        About Me
      </a>
      <a  href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Portfolio"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
        Portfolio
      </a>

      

      <a  href="#blog"
          onClick={() => handlePageChange('Blog')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}>
        Resume
      </a>
      <a  href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
        Contact
      </a>
    </div>
  </div>
</nav>

  );
  
}

export default NavTabs;
