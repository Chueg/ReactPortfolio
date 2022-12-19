import React from 'react';
import 'bulma/css/bulma.min.css';
import '../../css/style.css'


export default function Blog() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('JohnsonResume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'JohnsonResume.pdf';
            alink.click();
        })
    })
}
  return (
    <div>
      <h1>Resume</h1>

      <button  onClick={onButtonClick} className="button is-large is-responsive binky">Download here!</button>
      
    </div>
  );
}
