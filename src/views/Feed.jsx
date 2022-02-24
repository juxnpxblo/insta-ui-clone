import Navbar from '../components/shared/Navbar';
import Stories from '../components/feed/stories/Stories';
import Post from '../components/feed/post/Post';

import profilePic from '../assets/images/profile-pic.jpg';

import post1 from '../assets/images/post-1.jpeg';
import post2 from '../assets/images/post-2.jpeg';
import post3 from '../assets/images/post-3.jpeg';

const Feed = () => {
  const posts = [
    {
      profilePic,
      name: 'mayapolarbear',
      image: post1,
      likes: 45,
      description: 'hi',
      comments: 2,
      date: '7 MINUTES',
    },
    {
      profilePic,
      name: 'mayapolarbear',
      image: post2,
      likes: 67,
      description: 'hey',
      comments: 4,
      date: '7 HOURS',
    },
    {
      profilePic,
      name: 'mayapolarbear',
      image: post3,
      likes: 89,
      description: 'hello',
      comments: 8,
      date: '7 DAYS',
    },
  ];
  return (
    <>
      <Navbar />
      <div className="mt-7 max-w-[614px] mx-auto">
        <div className="mb-7">
          <Stories />
        </div>
        <Post post={posts[0]} />
        <Post post={posts[1]} />
        <Post post={posts[2]} />
      </div>
    </>
  );
};

export default Feed;
