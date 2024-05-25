import React from 'react';
import Image from 'next/image';
import Logo from '../assets/redlogo.svg';

const Overlay = () => {
  const logoUrl = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(Logo)))}`;

  return (
    <>
      <div className="char"  style={{ top: 70, left: 20, color: '#9C3300', fontSize:'50px', fontFamily: 'Bowlby'}}>
      
      </div>
      <div className="char" style={{ top: '20vw', left: '20vw', color: '#25130F', fontFamily: 'Bowlby'}}>
        <br />
       
      </div>
      <div className="char" style={{ bottom: 120, left: '10vw', color: '#25130F',  fontFamily: 'Bowlby'}}>


      </div>

      <div className="char" style={{ bottom: 40, right: '5vw', color: '#9C3300', textAlign: 'right', fontFamily: 'Bowlby' }}> PRESS THE COFFEE BAG TO ORDER!</div>
      <div style={{ position: 'absolute', top: -20, right: 20 , textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
    
       
      </div>
      <div style={{ position: 'absolute', bottom: 170, left: 60, fontSize: '15px', color: 'black',}}>
     
        <div style={{ position: 'relative', bottom: 150, display: 'inline-block' }}>

          <div style={{ marginTop: 6, height: 2.5, width: '100%', background: '#3e3e3d' }} />
          
        </div>
        <br />
      </div>
    </>
  );
}

export default Overlay;