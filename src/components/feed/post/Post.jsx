import WhiteBox from '../../shared/WhiteBox';
import Header from './Header';
import Image from './Image';
import Interactions from './Interactions';
import Likes from './Likes';
import PostDescription from './PostDescription';
import SeeAllComments from './SeeAllComments';
import Date from './Date';
import CommentSection from './CommentSection';

const Post = ({ post }) => {
  return (
    <div className="mb-7">
      <WhiteBox>
        <Header profilePic={post.profilePic} name={post.name} />
        <Image image={post.image} />
        <div className="p-4">
          <Interactions />
          <Likes likes={post.likes} />
          <PostDescription name={post.name} description={post.description} />
          <SeeAllComments comments={post.comments} />
          <Date date={post.date} />
          <CommentSection />
        </div>
      </WhiteBox>
    </div>
  );
};

export default Post;
