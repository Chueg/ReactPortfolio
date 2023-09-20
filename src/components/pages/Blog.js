import React from 'react';
import 'bulma/css/bulma.min.css';
import '../../css/style.css'


export default function Blog() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('JohnsonWorkResume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'JohnsonWorkResume.pdf';
            alink.click();
        })
    })
}
  return (
    <div>
      <h1>Resume</h1>

      <object data="JohnsonWorkResume.pdf" type="application/pdf" width="100%" height="500px">
      <p>Unable to display PDF file. <a href="JohnsonWorkResume.pdf">Download</a> instead.</p>
    </object>
    
      <button  onClick={onButtonClick} className="button is-large is-responsive binky">Download here!</button>
      
    </div>
  );
}
