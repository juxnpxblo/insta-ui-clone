import { FaComments } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';

import post1 from '../../../assets/images/post-1.jpeg';
import post2 from '../../../assets/images/post-2.jpeg';
import post3 from '../../../assets/images/post-3.jpeg';
import post4 from '../../../assets/images/post-1.jpeg';

const PostsGrid = () => {
  const posts = [
    {
      image: post1,
      likes: 10,
      comments: 2,
    },
    {
      image: post2,
      likes: 20,
      comments: 4,
    },
    {
      image: post3,
      likes: 40,
      comments: 8,
    },
    {
      image: post4,
      likes: 80,
      comments: 16,
    },
  ];

  return (
    <div>
      <div className="flex justify-between mb-7">
        <div className="image h-[293px] max-w-[293px] w-[293px] overflow-hidden flex relative items-center cursor-pointer">
          <img
            src={posts[0].image}
            alt=""
            width="100%"
            className="object-cover"
          />
          <div className="absolute w-full text-white font-medium text-lg z-10 justify-center gap-8 hidden">
            <div className="flex">
              <AiFillHeart size="24px" className="mt-1" />
              <span className="ml-1">{posts[0].likes}</span>
            </div>
            <div className="flex">
              <FaComments size="24px" className="mt-1" />
              <span className="ml-1">{posts[0].comments}</span>
            </div>
          </div>
        </div>
        <div className="image h-[293px] max-w-[293px] w-[293px] overflow-hidden flex relative items-center cursor-pointer">
          <img
            src={posts[0].image}
            alt=""
            width="100%"
            className="object-cover"
          />
          <div className="absolute w-full text-white font-medium text-lg z-10 justify-center gap-8 hidden">
            <div className="flex">
              <AiFillHeart size="24px" className="mt-1" />
              <span className="ml-1">{posts[0].likes}</span>
            </div>
            <div className="flex">
              <FaComments size="24px" className="mt-1" />
              <span className="ml-1">{posts[0].comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="flex justify-between mb-7">
    //     <div className="image h-[293px] max-w-[293px] w-[293px] overflow-hidden flex relative items-center cursor-pointer">
    //       <img
    //         src={posts[0].image}
    //         alt=""
    //         width="100%"
    //         className="object-cover"
    //       />
    //       <div className="absolute w-full text-white font-medium text-lg z-10 justify-center gap-8 hidden">
    //         <div className="flex">
    //           <AiFillHeart size="24px" className="mt-1" />
    //           <span className="ml-1">{posts[0].likes}</span>
    //         </div>
    //         <div className="flex">
    //           <FaComments size="24px" className="mt-1" />
    //           <span className="ml-1">{posts[0].comments}</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex justify-between mb-7">
    //     <div className="image h-[293px] max-w-[293px] w-[293px] overflow-hidden flex relative items-center cursor-pointer">
    //       <img
    //         src={posts[1].image}
    //         alt=""
    //         width="100%"
    //         className="object-cover"
    //       />
    //       <div className="absolute w-full text-white font-medium text-lg z-10 justify-center gap-8 hidden">
    //         <div className="flex">
    //           <AiFillHeart size="24px" className="mt-1" />
    //           <span className="ml-1">{posts[1].likes}</span>
    //         </div>
    //         <div className="flex">
    //           <FaComments size="24px" className="mt-1" />
    //           <span className="ml-1">{posts[1].comments}</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex justify-between mb-7">
    //     <div className="image h-[293px] max-w-[293px] w-[293px] overflow-hidden flex relative items-center cursor-pointer">
    //       <img
    //         src={posts[2].image}
    //         alt=""
    //         width="100%"
    //         className="object-cover"
    //       />
    //       <div className="absolute w-full text-white font-medium text-lg z-10 justify-center gap-8 hidden">
    //         <div className="flex">
    //           <AiFillHeart size="24px" className="mt-1" />
    //           <span className="ml-1">{posts[2].likes}</span>
    //         </div>
    //         <div className="flex">
    //           <FaComments size="24px" className="mt-1" />
    //           <span className="ml-1">{posts[2].comments}</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex justify-between mb-7">
    //     <div className="image h-[293px] max-w-[293px] w-[293px] overflow-hidden flex relative items-center cursor-pointer">
    //       <img
    //         src={posts[3].image}
    //         alt=""
    //         width="100%"
    //         className="object-cover"
    //       />
    //       <div className="absolute w-full text-white font-medium text-lg z-10 justify-center gap-8 hidden">
    //         <div className="flex">
    //           <AiFillHeart size="24px" className="mt-1" />
    //           <span className="ml-1">{posts[3].likes}</span>
    //         </div>
    //         <div className="flex">
    //           <FaComments size="24px" className="mt-1" />
    //           <span className="ml-1">{posts[3].comments}</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PostsGrid;
