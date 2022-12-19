import React from 'react';



export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        
      </p>
      <section className="binky">
          <div className="container" display='flex'>
            <p></p>
            <div className="middle">
            <a href='https://github.com/Chueg/Jukebox-vite'><button className="text" style={{width:'100%'}}>Github</button></a>
            <a href='https://jukebox-project3.herokuapp.com/'><button className="text" style={{width:'100%'}}>Deployed Site</button></a>
            </div>
            <img src={"jukebox.PNG"} alt='A Jukebox'  className="image" style={{width:'100%'}}></img>
            
            
          </div>
          <div className="container">
            <img src={"recipe.PNG"} alt='The recipeIO Logo' className="image" style={{width:'100%'}}></img>
            <div className="middle">
              <a href='https://github.com/Lawhornmatt/RecipeIO'><button className="text" style={{width:'100%'}}>Github</button></a>
            
              <a href='http://recipeio-project2.herokuapp.com/'><button className="text" style={{width:'100%'}}>Deployed Site</button></a>
            </div>
            
          </div>
          <div className="container">
          <div className="middle">
            <a href='https://github.com/Chueg/ReactPortfolio'><button className="text" style={{width:'100%'}}>Github</button></a>
            </div>
            <img src={"porto.gif"} alt='zerblor' className="image" style={{width:'100%'}}></img>
            
          </div>
      </section>
     </div>
  );
}
