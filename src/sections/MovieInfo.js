import React from 'react';
import { Descriptions, Badge } from 'antd';

function MovieInfo(props) {
  let { movie } = props;
  return (
    <div >
      <Descriptions
        bordered column={2} 
        labelStyle={{ fontSize: '17px', fontWeight: 'bold' }} 
        contentStyle={{ fontSize: '17px', backgroundColor: '#ffffff', maxWidth: '450px', minWidth: '160px' }}
        size="middle"
      >
        <Descriptions.Item label="영화 제목">{movie.movie_name}</Descriptions.Item>
        <Descriptions.Item label="개봉일">{movie.release_date}</Descriptions.Item>
        <Descriptions.Item label="장르">{movie.genre}</Descriptions.Item>
        <Descriptions.Item label="국가">{movie.country_name}</Descriptions.Item>
        <Descriptions.Item label="러닝타임">{movie.scr_run_time + "분"}</Descriptions.Item>
        <Descriptions.Item label="등급">{movie.rating}</Descriptions.Item>
        <Descriptions.Item label="배급사">{movie.company_name === '배급사' ? "-" : movie.company_name}</Descriptions.Item>
        <Descriptions.Item label="상영형태">{movie.scr_form}</Descriptions.Item>
        <Descriptions.Item label="더빙여부">{movie.is_dub ? "O" : "X"}</Descriptions.Item>
        <Descriptions.Item label="예고편">
          <a href={movie.trailer}>시청하기</a>
        </Descriptions.Item>
        <Descriptions.Item label="감독">{movie.crew}</Descriptions.Item>
        <Descriptions.Item label="출연">{movie.cast}</Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default MovieInfo