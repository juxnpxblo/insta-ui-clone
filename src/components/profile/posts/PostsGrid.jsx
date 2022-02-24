import Row from './Row';
import Post from './Post';

import post1 from '../../../assets/images/post-1.jpeg';
import post2 from '../../../assets/images/post-2.jpeg';
import post3 from '../../../assets/images/post-3.jpeg';
import post4 from '../../../assets/images/post-2.jpeg';

const PostsGrid = () => {
  const posts = [
    {
      img: post1,
      likes: 10,
      comments: 2,
    },
    {
      img: post2,
      likes: 20,
      comments: 4,
    },
    {
      img: post3,
      likes: 40,
      comments: 8,
    },
    {
      img: post4,
      likes: 80,
      comments: 16,
    },
  ];

  return (
    <>
      <Row>
        <Post
          img={posts[0].img}
          likes={posts[0].likes}
          comments={posts[0].comments}
        />
        <Post
          img={posts[1].img}
          likes={posts[1].likes}
          comments={posts[1].comments}
        />
        <Post
          img={posts[2].img}
          likes={posts[2].likes}
          comments={posts[2].comments}
        />
      </Row>
      <Row>
        <Post
          img={posts[1].img}
          likes={posts[1].likes}
          comments={posts[1].comments}
        />
      </Row>
    </>
  );
};

export default PostsGrid;
