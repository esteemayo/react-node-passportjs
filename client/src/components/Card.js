import { Link } from 'react-router-dom';

const Card = ({ id, img, desc, title }) => {
  return (
    <div className='card'>
      <div className='card__title'>{title}</div>
      <img src={img} alt='' className='card__img' />
      <div className='card__desc'>{desc}</div>
      <Link to={`post/${id}`} className='card__btn'>
        Read more
      </Link>
    </div>
  );
};

export default Card;
