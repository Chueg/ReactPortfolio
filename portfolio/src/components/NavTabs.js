import React from 'react';
import 'bulma/css/bulma.min.css';
import '../css/style.css'



// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {


  const rimboid = () => {
    const navbarMenu = document.querySelector('#navbarBasicExample');
    navbarMenu.classList.toggle('is-active');
  console.log("clicked");
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item rumpus" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
    </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={rimboid}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu rumpus">
    <div className="navbar-start rampus">
      <a  href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
        Home
      </a>

      <a  href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
        Documentation
      </a>

      <a  href="#blog"
          onClick={() => handlePageChange('Blog')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}>
        Documentation
      </a>
    </div>
  </div>
</nav>

  );
  
}

export default NavTabs;
