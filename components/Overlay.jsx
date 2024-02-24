import React from 'react';

const Overlay = () => {
  return (
    <>
      <div className="char" style={{ top: 40, left: 40 }}>
        ROOT
      </div>
      <div className="char" style={{ top: '20vw', left: '20vw' }}>
        <br />&
      </div>
      <div className="char" style={{ bottom: 40, left: '35vw' }}>
        GROUNDS
      </div>
      <div className="char" style={{ bottom: 40, left: '60vw' }}></div>
      <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '15px', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
        —
        <br />
        08/01/23
      </div>
      <div style={{ position: 'absolute', bottom: 120, left: 120, fontSize: '18px' }}>
        An alternative catalogue
        <br />
        of healthy products
        <br />
        <br />
        <div style={{ position: 'relative', marginTop: 10, display: 'inline-block' }}>
          <a style={{ fontSize: '15px', fontWeight: 600, letterSpacing: 2 }} href="https://github.com/pmndrs/drei#caustics">
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