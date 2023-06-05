import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A movei 1',
    image: 'https://i1.sndcdn.com/artworks-2gFFevu0kuLUtbyP-TFd6Rg-t500x500.jpg',
    adress: 'korea',
    description: 'eazy day'
  },
  {
    id: 'm2',
    title: 'A drama 1',
    image: 'https://file1.bobaedream.co.kr/multi_image/strange/2017/08/09/13/Dg0598a92bd65872.jpg',
    adress: 'japan',
    description: 'lucky day'
  },
];

function HomePage(props) {
  return (
    <MeetupList meetups={props.meetups} />
  );
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  };
}

// revalidate : next.js 정적생성기능 관련 옵션, 페이지를 얼마나 자주 재생성하는지 지정하여 사용됩니다.

export default HomePage;