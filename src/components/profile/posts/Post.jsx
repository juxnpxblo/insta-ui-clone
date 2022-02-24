import { FaComments } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';

const Post = ({ img, likes, comments }) => {
  return (
    <div className="image h-[293px] max-w-[293px] w-[293px] overflow-hidden flex relative items-center cursor-pointer">
      <img src={img} alt="" width="100%" className="object-cover" />
      <div className="absolute w-full text-white font-medium text-lg z-10 justify-center gap-8 hidden">
        <div className="flex">
          <AiFillHeart size="24px" className="mt-1" />
          <span className="ml-1">{likes}</span>
        </div>
        <div className="flex">
          <FaComments size="24px" className="mt-1" />
          <span className="ml-1">{comments}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
