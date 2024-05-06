import React from 'react';
import Image from 'next/image';
import Logo from '../assets/greenlogo.svg';

const Overlay = () => {
  const logoUrl = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(Logo)))}`;

  return (
    <>
      <div className="char"  style={{ top: 50, left: 20, color: '#9C3300', fontSize:'40px', fontFamily: 'Bowlby'}}>
       ELEVATE THE 
      </div>
      <div className="char" style={{ top: '20vw', left: '20vw', color: '#25130F', fontFamily: 'Bowlby'}}>
        <br />MUNDANE
      </div>
      <div className="char" style={{ bottom: 120, left: '10vw', color: '#9C3300', fontFamily: 'Bowlby'}}>
      WITH BETTER
      </div>

      <div className="char" style={{ bottom: 40, left: '40vw', fontFamily: 'Bowlby' }}>COFFEE</div>
      <div style={{ position: 'absolute', top: -20, right: 20 , textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
        
        <Image src={Logo} alt="Logo" />
      </div>
      <div style={{ position: 'absolute', bottom: 170, left: 60, fontSize: '15px', color: 'black',}}>
      {/* One-stop-shop FOR
        <br />
        coffee beans and fresh produce.
        <br />
        delivered to your doorstep.
        <br /> */}
        <div style={{ position: 'relative', bottom: 150, display: 'inline-block' }}>
          <a style={{ fontSize: '15px', fontWeight: 900, letterSpacing: 2 }}> 
            PRESS ANYWHERE TO ORDER
          </a>
          <div style={{ marginTop: 6, height: 2.5, width: '100%', background: '#3e3e3d' }} />
        </div>
        <br />
      </div>
    </>
  );
}

// https://yatjbdeqemy.typeform.com/to/UXA4BJjU
export default Overlay;