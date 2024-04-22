import React from 'react';
import Image from 'next/image';
import Logo from '../assets/greenlogo.svg';

const Overlay = () => {
  const logoUrl = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(Logo)))}`;

  return (
    <>
      <div className="char"  style={{ top: 50, left: 20, color: '#9C3300', fontSize:'40px', fontFamily: 'Bowlby'}}>
       PRODUCED
      </div>
      <div className="char" style={{ top: '20vw', left: '20vw', color: '#25130F', fontFamily: 'Bowlby'}}>
        <br />FROM
      </div>
      <div className="char" style={{ bottom: 40, left: '10vw', color: '#9C3300', fontFamily: 'Bowlby'}}>
        THE
      </div>
      <div className="char" style={{ bottom: 40, left: '40vw', fontFamily: 'Bowlby' }}>EARTH.</div>
      <div style={{ position: 'absolute', top: -20, right: 20 , textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
        
        <Image src={Logo} alt="Logo" />
      </div>
      <div style={{ position: 'absolute', bottom: 170, left: 60, fontSize: '15px', color: 'black',}}>
      Top-tier specialty and 
        <br />
        single-origin coffee beans 
        <br />
        delivered to you.
        <br />
        <div style={{ position: 'relative', marginTop: 10, display: 'inline-block' }}>
          <a style={{ fontSize: '25px', fontWeight: 900, letterSpacing: 2 }} href="https://form.jotform.com/rootandgrounds/order-form"> 
            ORDER HERE
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