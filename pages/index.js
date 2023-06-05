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
    }
  };
}

export default HomePage;