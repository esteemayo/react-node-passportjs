import Card from 'components/Card';
import posts from '../data';

const Home = () => {
  return (
    <div className='home'>
      {posts?.map((post) => {
        return <Card key={post.id} {...post} />;
      })}
    </div>
  );
};

export default Home;
