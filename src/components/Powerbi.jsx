import React from 'react';

function Powerbi() {
  return (
    <iframe 
      title="final" 
      src="https://app.powerbi.com/view?r=eyJrIjoiN2E4ZmY3OTctZTljZS00YTFlLTk0NTctNGU4NzI1NDM4OWM1IiwidCI6IjEyZjI5NzFlLWNhYzUtNDdhNC04ZDY4LWYxYjIyMDQyZjgzZSIsImMiOjl9&pageName=6ff0eb2502472964a478" 
      allowFullScreen
      style={{
        width: '100%',
        height: '100vh',  // Hauteur de la fenêtre visible
        border: 'none'    // Supprimer la bordure
      }}>
      Votre navigateur ne supporte pas les iframes.
    </iframe>
  );
}

export default Powerbi;
