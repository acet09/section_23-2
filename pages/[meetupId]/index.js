import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image='https://i1.sndcdn.com/artworks-2gFFevu0kuLUtbyP-TFd6Rg-t500x500.jpg'
      alt='bobman'
      title="kang-ho"
      address="moive"
      description="Memories of Murder"
    />
  );
}
// getStaticPaths : 정적 생성(static generation)을 사용하는 페이지에서 동적 경로를 생성하는 데 사용됩니다. 이 함수는 동적 경로의 목록을 반환하고, 각 경로에 대한 정적 페이지를 미리 생성합니다.
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ]
  }
}

export async function getStaticProps(context) {

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupDate: {
        image: 'https://i1.sndcdn.com/artworks-2gFFevu0kuLUtbyP-TFd6Rg-t500x500.jpg',
        id: meetupId,
        title: 'kang-ho',
        address: 'moive',
        description: 'Memories of Murder'
      },
    },
  };
}

export default MeetupDetails;