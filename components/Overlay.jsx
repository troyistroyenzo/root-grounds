import React from 'react';
import Image from 'next/image';
import Logo from '../assets/logo.svg';

const Overlay = () => {
  const logoUrl = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(Logo)))}`;

  return (
    <>
      <div className="char" style={{ top: 40, left: 40, color: '#754A3F' }}>
       FRESH
      </div>
      <div className="char" style={{ top: '20vw', left: '20vw', color: '#25130F'  }}>
        <br />COFFEE
      </div>
      <div className="char" style={{ bottom: 40, left: '35vw', color: '#754A3F'  }}>
        
      </div>
      <div className="char" style={{ bottom: 40, left: '60vw' }}></div>
      <div style={{ position: 'absolute', top: -20, right: 20 , textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
        
        <Image src={Logo} alt="Logo" />
      </div>
      <div style={{ position: 'absolute', bottom: 120, left: 120, fontSize: '18px', fontWeight: 600, color: '#00897B'  }}>
        Fresh coffee beans
        <br />
        and more.
        <br />
        <br />
        <div style={{ position: 'relative', marginTop: 10, display: 'inline-block' }}>
          <a style={{ fontSize: '25px', fontWeight: 900, letterSpacing: 2 }} href="https://yatjbdeqemy.typeform.com/to/UXA4BJjU">
            ORDER NOW
          </a>
          <div style={{ marginTop: 6, height: 2.5, width: '100%', background: '#3e3e3d' }} />
        </div>
        <br />
      </div>
    </>
  );
}

export default Overlay;