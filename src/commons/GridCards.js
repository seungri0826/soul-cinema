import React from 'react';
import { Col } from 'antd';


function GridCards(props) {
  if (props.landingPage) {
    return (
      <Col lg={6} md={8} xs={24}>
        <div style={{ position: 'relative' }}>
          <a href={`/Movie/${props.movieId}`}>
            <img style={{ width: '330px', height: '440px', flexDirection: 'column', marginTop: '20px', paddingLeft: '0px' }} src={props.image} alt={props.movieName} />
          </a>
          <a href={`/Movie/${props.movieId}`}>
            <p style={{ flexDirection: 'column', fontSize: '23px', fontWeight: 'bold', marginTop: '15px', color: 'black' }}>{props.movieName}</p>
          </a>
        </div>
      </Col>
    );
  } else {
    return;
  }
}

export default GridCards;