import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'A movei 1',
//     image: 'https://i1.sndcdn.com/artworks-2gFFevu0kuLUtbyP-TFd6Rg-t500x500.jpg',
//     adress: 'korea',
//     description: 'eazy day'
//   },
//   {
//     id: 'm2',
//     title: 'A drama 1',
//     image: 'https://file1.bobaedream.co.kr/multi_image/strange/2017/08/09/13/Dg0598a92bd65872.jpg',
//     adress: 'japan',
//     description: 'lucky day'
//   },
// ];

function HomePage(props) {
  return (
    <MeetupList meetups={props.meetups} />
  );
}

// getServerSideProps : 서버요청받은 시점에서 데이터를 받아와 동적 생성, 
//                      서버요청 받을때까지 대기상태
// Pre-generated : 정적 콘텐츠를 가리키는 용어, 페이지를 미리 생성하여 정적인 HTML 파일로 저장하는 기능
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

// getStaticProps : 빌드시점에서 페이지 정적 데이터 가져와 렌더링
// revalidate : next.js 정적생성기능 관련 옵션, 페이지를 얼마나 자주 재생성하는지 지정하여 사용됩니다.
export async function getStaticProps() {
  // fetch('/api/meetups');
  const client = await MongoClient.connect('mongodb+srv://ysjungman:881202@cluster0.lfkfhzv.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 1
  };
}

export default HomePage;