import React from 'react';



export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        
      </p>
      <section className="binky">
          <div className="container" display='flex'>
            <img src={"jukebox.PNG"} alt='A Jukebox'  className="image" style={{width:'100%'}}></img>
            <div className="middle">
            <button className="text" style={{width:'100%'}}>Github</button>
            <button className="text" style={{width:'100%'}}>Deployed Site</button>
            </div>
            
          </div>
          <div className="container">
            <img src={"recipe.PNG"} alt='The recipeIO Logo' className="image" style={{width:'100%'}}></img>
            <div className="middle">
            <button className="text" style={{width:'100%'}}>Github</button>
            <button className="text" style={{width:'100%'}}>Deployed Site</button>
            </div>
            
          </div>
          <div className="container">
            <img src={"zerblor.PNG"} alt='zerblor' className="image" style={{width:'100%'}}></img>
            <div className="middle">
            <button className="text">John Doe</button>
            </div>
            
          </div>
          <div className="container">
            <img src={"zerblor.PNG"} alt='zerblor' className="image" style={{width:'100%'}}></img>
            <div className="middle">
            <button className="text">John Doe</button>
            </div>
            
          </div>
      </section>
     
        
     </div>
  );
}
