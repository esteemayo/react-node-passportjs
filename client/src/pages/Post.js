import { useLocation } from 'react-router-dom';
import posts from '../data';

const Post = () => {
  const { pathname } = useLocation();
  const path = pathname.split('/')[2];

  const post = posts.find((p) => p.id.toString() === path);

  return (
    <div className='post'>
      <img src={post.img} alt='' className='post__img' />
      <h1 className='post__title'>{post.title}</h1>
      <p className='post__desc'>{post.desc}</p>
      <p className='post__long-desc'>{post.longDesc}</p>
    </div>
  );
};

export default Post;
