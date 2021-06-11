import React from 'react';

function MainImage(props) {
  return (
    <div style={{
      background: `linear-gradient(to bottom, rgba(0,0,0,0)
      39%, rgba(0,0,0,0)
      41%, rgba(0,0,0,0.65)
      100%),
      url('${props.image}'), #1c1c1c`,
      height: '600px',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      width: 'auto',
      position: 'relative',
    }}>
      <div>
        <div style={{ position: 'absolute', bottom: '2rem', marginLeft: '2rem' }}>
          <h2 style={{ color: 'white', fontSize: '4rem', marginLeft: '80px' }}> {props.title} </h2>
        </div>
      </div>
    </div>
  )
}

export default MainImage