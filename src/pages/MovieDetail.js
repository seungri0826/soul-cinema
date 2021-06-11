import React, { useEffect, useState } from 'react';
import { Row, Button } from 'antd';
import MainImage from '../commons/MainImage';
import MovieInfo from '../sections/MovieInfo';

const movie_dummy = [
  {
    "movie_num": 1,
    "movie_name": "혼자 사는 사람들",
    "scr_run_time": 91,
    "rating": "12세이상관람가",
    "genre": "드라마",
    "movie_summ": "집에서도 밖에서도 늘 혼자가 편한 진아.\n사람들은 자꾸 말을 걸어오지만, 진아는 그저 불편하다.\n회사에서 신입사원 교육까지 떠맡자 괴로워 죽을 지경.\n그러던 어느 날, 출퇴근길에 맨날 말을 걸던 옆집 남자가\n아무도 모르게 혼자 죽었다는 걸 알게 된다.\n그 죽음 이후, 진아의 고요한 일상에 작은 파문이 이는데…\n저마다 1인분의 외로움을 간직한, 우리들 이야기",
    "company_name": "배급사",
    "release_date": "20210519",
    "country_name": "한국",
    "trailer":"https://youtu.be/EU6vg5QMYbg",
    "poster": "https://t1.daumcdn.net/movie/4f4d94f1d31f96c8a458dc5a4b52fcdcb3a15c67",
    "main_img": "https://t1.daumcdn.net/movie/f8a89d52cce30a8321400ed258de4544b8b5101e",
    "is_dub": 0,
    "scr_form": "2D", 
    "crew": "홍성은",
    "cast": "공승연, 정다은, 서현우",
  },
  {
    "movie_num": 2,
    "movie_name": "크루엘라",
    "scr_run_time": 133,
    "rating": "12세이상관람가",
    "genre": "드라마, 범죄, 코미디",
    "movie_summ": "처음부터 난 알았어. 내가 특별하단 걸\n그게 불편한 인간들도 있겠지만 모두의 비위를 맞출 수는 없잖아?\n그러다 보니 결국, 학교를 계속 다닐 수가 없었지\n우여곡절 런던에 오게 된 나, 에스텔라는 재스퍼와 호레이스를 운명처럼 만났고\n나의 뛰어난 패션 감각을 이용해 완벽한 변장과 빠른 손놀림으로 런던 거리를 싹쓸이 했어\n도둑질이 지겹게 느껴질 때쯤, 꿈에 그리던 리버티 백화점에 낙하산(?)으로 들어가게 됐어\n거리를 떠돌았지만 패션을 향한 나의 열정만큼은 언제나 진심이었거든\n근데 이게 뭐야, 옷에는 손도 못 대보고 하루 종일 바닥 청소라니\n인내심에 한계를 느끼고 있을 때, 런던 패션계를 꽉 쥐고 있는 남작 부인이 나타났어\n천재는 천재를 알아보는 법! 난 남작 부인의 브랜드 디자이너로 들어가게 되었지\n꿈을 이룰 것 같았던 순간도 잠시, 세상에 남작 부인이 ‘그런 사람’이었을 줄이야…\n그래서 난 내가 누군지 보여주기로 했어\n잘가, 에스텔라\n난 이제 크루엘라야!",
    "company_name": "배급사",
    "release_date": "20210526",
    "country_name": "미국",
    "trailer":"https://youtu.be/yfSMTFzw-Kw",
    "poster": "https://img.megabox.co.kr/SharedImg/2021/05/12/J7vthd2FWEXswHD67dL2rQrMW4uhJQUF_1280.jpg",
    "main_img": "https://t1.daumcdn.net/movie/a01f2cfea2299a579983cebd52ceca680e4e6b41",
    "is_dub": 0,
    "scr_form": "2D", 
    "crew": "크레이그 길레스피",
    "cast": "엠마 스톤, 엠마 톰슨, 조엘 프라이, 폴 윌터 하우저, 존 맥크레이, 에밀리 비삼, 마크 스트롱",
  },
  {
    "movie_num": 3,
    "movie_name": "500일의 썸머",
    "scr_run_time": 95,
    "rating": "15세이상관람가",
    "genre": "드라마, 로맨스, 코미디",
    "movie_summ": "운명적 사랑을 믿는 남자 ‘톰’\n모든 것이 특별한 여자 ‘썸머’에 완전히 빠졌다.\n사랑은 환상일 뿐이라고 생각하는 여자 ‘썸머’\n친구인 듯 연인 같은 ‘톰’과의 부담 없는 썸이 즐겁다.\n“저기… 우리는 무슨 관계야?”\n설렘으로 가득한 시간도 잠시\n두 사람에게도 피할 수 없는 선택의 순간이 찾아오는데…\n'우리 모두의 단짠단짠 연애담!'\n설레는 1일부터 씁쓸한 500일까지\n서로 다른 남녀의 극사실주의 하트시그널!",
    "company_name": "배급사",
    "release_date": "20210526",
    "country_name": "미국",
    "trailer":"https://youtu.be/qwuReiXp3Ak",
    "poster": "https://img.megabox.co.kr/SharedImg/2021/05/21/L1u1sOkUsSQ0Ut8erY62YQxGtOMcInj2_1280.jpg",
    "main_img": "http://t1.daumcdn.net/movie/360f48053a5d34a8bb3b7cbe1a2df633d5ca0770",
    "is_dub": 0,
    "scr_form": "2D", 
    "crew": "마크 웹",
    "cast": "조셉 고든 레빗, 조이 데샤넬, 패트리샤 벨처, 레이철 보스톤, 클로이 모레츠",
  },
  {
    "movie_num": 4,
    "movie_name": "노매드랜드",
    "scr_run_time": 108,
    "rating": "12세이상관람가",
    "genre": "드라마",
    "movie_summ": "전 세계가 동행한 가슴 벅찬 여정, 길이 계속되는 한 우리의 삶도 계속된다.\n모든 것이 무너진 후에야 비로소 열리는 새로운 길 그리고 희망\n경제적 붕괴로 도시 전체가 무너진 후 홀로 남겨진 ‘펀’.(프란시스 맥도맨드)\n추억이 깃든 도시를 떠나 작은 밴과 함께 한 번도 가보지 않은 낯선 길 위의 세상으로 떠난다.\n그곳에서 ‘펀’은 각자의 사연을 가진 노매드들을 만나게 되고,\n광활한 자연과 길 위에서의 삶을 스스로 선택한 그들과 만나고 헤어지며\n다시 살아가기 위한 여정을 시작하는데…",
    "company_name": "배급사",
    "release_date": "20210415",
    "country_name": "미국",
    "trailer":"https://youtu.be/tfmRVC_GADw",
    "poster": "https://img.megabox.co.kr/SharedImg/2021/04/14/XPDZ9jKsZsXQqcpAme1rvcREIJpgLxyj_1100.jpg",
    "main_img": "https://t1.daumcdn.net/movie/f0703ac1a06c41366f8031e6871b1e8b73a48b61",
    "is_dub": 0,
    "scr_form": "2D", 
    "crew": "클로이 자오",
    "cast": "프란시스 맥도맨드, 린다 메이, 밥 웰스, 살린 스완키, 데이비트 스트라탄",
  },
  {
    "movie_num": 5,
    "movie_name": "애플",
    "scr_run_time": 91,
    "rating": "12세이상관람가",
    "genre": "드라마",
    "movie_summ": "당신을 사로잡을 가장 특별한 여운\n원인 모를 단기 기억상실증 유행병에 걸린 ‘알리스’에게 유일하게 남은 기억은\n이름도 집 주소도 아닌 한 입 베어 문 사과의 맛.\n며칠이 지나도 그를 찾아오는 가족이 나타나지 않자 무연고 환자로 분류된 ‘알리스’에게\n병원에서는 새로운 경험들로 기억을 만들어내는 ‘인생 배우기’ 프로그램을 제안한다.\n그러던 어느 날 ‘알리스’는 자신처럼 이 프로그램에 참여하고 있는 ‘안나’를 만난다.\n괜찮아요, 다들 잊고 사니까요.",
    "company_name": "배급사",
    "release_date": "20210526",
    "country_name": "그리스, 폴란드, 슬로베니아",
    "trailer":"https://youtu.be/RIi45-Aytt8",
    "poster": "https://t1.daumcdn.net/movie/4f52247004d6040d5b7f8b6b2afc9463a8f40935",
    "main_img": "https://t1.daumcdn.net/movie/c0ef3f9c1f59e3a60465db6eca8ee9c0d5f5e8dd",
    "is_dub": 0,
    "scr_form": "2D", 
    "crew": "크리스토스 니코우",
    "cast": "아리스 세르베탈리스, 소피아 지오르고바실리, 안나 칼라이치도, 코스타스 라스코스",
  },
  {
    "movie_num": 6,
    "movie_name": "실크 로드",
    "scr_run_time": 116,
    "rating": "15세이상관람가",
    "genre": "범죄, 스릴러, 드라마",
    "movie_summ": "지금 당장 마약을 흔적 없이 살 수 있다면? \n역대급 재능낭비 충격 실화!\n개인이 마약을 하든 뭘 하든\n국가의 통제는 억압이라 생각하는 비합법적 천재 ‘로스’.\n뛰어난 두뇌와 치밀한 계획으로\n비트코인을 이용해 흔적 없이\n마약 쿨거래가 가능한\n다크 웹사이트 ‘실크로드’를 만든다.\n‘실크로드’로 돈맛을 알고\n세상을 향한 X를 날렸다고 생각한 바로 그 순간,\n정체불명 누군가가 말을 걸어오는데…",
    "company_name": "배급사",
    "release_date": "20210609",
    "country_name": "미국",
    "trailer":"https://youtu.be/hGoyCt60dNI",
    "poster": "https://t1.daumcdn.net/movie/9e5e0a2945c1d517b64250f4dab955b6385de472",
    "main_img": "https://t1.daumcdn.net/movie/84cfaad719114e4c3967ca0382887dd365ce74ee",
    "is_dub": 0,
    "scr_form": "2D", 
    "crew": "틸러 러셀",
    "cast": "닉 로빈슨, 제이슨 클락, 알렉산드라 쉽, 지미 심슨, 제니퍼 윤",
  },
  {
    "movie_num": 7,
    "movie_name": "캐시트럭",
    "scr_run_time": 118,
    "rating": "청소년관람불가",
    "genre": "액션",
    "movie_summ": "캐시트럭을 노리는 무장 강도에 의해 아들을 잃은 H(제이슨 스타뎀).\n분노에 휩싸인 그는 아들을 죽인 범인의 단서를 찾기 위해\n현금 호송 회사에 위장 취업한다.\n첫 임무부터 백발백중 사격 실력을 자랑하며,\n단숨에 에이스로 급부상한 H.\n캐시트럭을 노리는 자들을 하나 둘 처리하며,\n아들을 죽인 범인들과 점점 가까워지는데…\n자비는 없다, 분노에 가득 찬 응징만이 남았다.\n6월, 그의 분노가 폭발한다!",
    "company_name": "배급사",
    "release_date": "20210609",
    "country_name": "영국, 미국",
    "trailer":"https://youtu.be/SYiEc5GO0-8",
    "poster": "https://img.megabox.co.kr/SharedImg/2021/06/10/7deO12OmPdV0fCZlT1YA68dpI6mOGDKI_1280.jpg",
    "main_img": "https://t1.daumcdn.net/movie/9fa3a83049ad5f8d9a1a4afc06fb1e01ddb1149c",
    "is_dub": 0,
    "scr_form": "2D", 
    "crew": "가이 리치",
    "cast": "제이슨 스타뎀, 스콧 이스트우드, 조쉬 하트넷, 포스트 말론, 홀트 맥칼라니, 제프리 도노반, 로시 윌리엄스, 앤디 가르시아",
  },
  {
    "movie_num": 8,
    "movie_name": "화이트 온 화이트",
    "scr_run_time": 100,
    "rating": "15세이상관람가",
    "genre": "드라마",
    "movie_summ": "`한 장의 잔혹한 아름다움으로 덧칠하다`\n20세기 초반, 중년의 사진작가 `페드로`는\n정체 모를 지주 `포터`의 결혼식 사진을 찍기 위해\n설원으로 둘러싸인 칠레의 어느 마을에 도착한다.\n하지만 소녀 티가 아직 가시지 않은 어린 신부만이 나타나고\n`페드로`는 그녀의 순수한 아름다움에 집착하다\n결국 `포터`의 부하들에게 끌려가고 마는데…​\n세상 끝에 선 사진작가, 잔혹한 현실을 마주한다!",
    "company_name": "배급사",
    "release_date": "20210610",
    "country_name": "스페인, 칠레, 프랑스, 독일",
    "trailer":"https://youtu.be/tpmDLQVuLqM",
    "poster": "https://t1.daumcdn.net/movie/faf93e1c8ce3aa47745f2488880effb1b597bb0a",
    "main_img": "https://t1.daumcdn.net/movie/f6c415f73526259429bacee45ebe6b10d5ea4c7d",
    "is_dub": 0,
    "scr_form": "2D", 
    "crew": "테오 코트",
    "cast": "알프레도 카스트로, 라르스 루돌프, 다비드 판탈레온",
  },
  {
    "movie_num": 9,
    "movie_name": "분노의 질주: 더 얼티메이트",
    "scr_run_time": 142,
    "rating": "12세이상관람가",
    "genre": "액션",
    "movie_summ": "기다림은 끝났다!\n전 세계가 기다려온 단 하나의 액션블록버스터!\n도미닉(빈 디젤)은 자신과 가장 가까웠던 형제 제이콥(존 시나)이 사이퍼(샤를리즈 테론)와 연합해\n전 세계를 위기로 빠트릴 위험천만한 계획을 세운다는 사실을 알게 되고,\n이를 막기 위해 다시 한 번 패밀리들을 소환한다.\n가장 가까운 자가 한순간, 가장 위험한 적이 된 상황\n도미닉과 패밀리들은 이에 반격할 놀라운 컴백과 작전을 세우고\n지상도, 상공도, 국경도 경계가 없는 불가능한 대결이 시작되는데…",
    "company_name": "배급사",
    "release_date": "20210519",
    "country_name": "미국",
    "trailer":"https://youtu.be/L9Y-hn2COm0",
    "poster": "https://t1.daumcdn.net/movie/aa6aaf313fb192e6f77f5bd4490d5e127d707240",
    "main_img": "https://t1.daumcdn.net/movie/ef12e4fc5574d3540c9a3b260a69156879a402bc",
    "is_dub": 0,
    "scr_form": "2D", 
    "crew": "저스틴 린",
    "cast": "빈 디젤, 존 시나, 성강, 샤를리즈 테론, 미셸 로드리게스, 조다나 브루스터",
  },
];

function MovieDetail(props) {
  let movieId = props.match.params.movieId;
  const [Movie, setMovie] = useState([]);

  const movetoRes=()=>{
    props.history.push('/ResMovie');
  }

  useEffect(() => {
    setMovie(movie_dummy[movie_dummy.findIndex(x => x.movie_num == movieId)]);
  }, [movieId]);

  console.log(Movie);

  return (
    <div className="App">
      <MainImage
        image={Movie.main_img}
        title={Movie.movie_name}
        text={Movie.movie_summ}
      />
      <div style={{ width: '85%', margin: '1rem auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', margin: '30px'}}>
          <img style={{ width: '330px', height: '440px', flexDirection: 'column', marginTop: '20px', marginRight: '50px', display: 'flex', }} src={Movie.poster} alt={Movie.movie_name} />
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <text style={{ textAlign: 'left', fontSize: '25px', fontWeight: 'bold', marginBottom: '20px' }}>영화 정보</text>
            <MovieInfo
              movie={Movie}
            />
          </div>
        </div>
      </div>
      <span style={{ width: '60%', margin: '1rem auto', display: 'flex', whiteSpace: "pre-wrap", flexDirection: 'column'}}>
        <text style={{ textAlign: 'left', fontSize: '25px', fontWeight: 'bold', marginBottom: '20px' }}>영화 소개</text>
        <text style={{ textAlign: 'left', fontSize: '19px', lineHeight: '35px', backgroundColor: '#ffffff', padding: '30px 30px', borderRadius: '10px'}}>{Movie.movie_summ}</text>
      </span>

      <div className="App">
        <Button type="primary" onClick={movetoRes}> 예매하기 </Button>
      </div>

    </div>
  );
}

export default MovieDetail;
