import EmojisIcon from './EmojisIcon';
import CommentInput from './CommentInput';
import PostCommentButton from './PostCommentButton';

const CommentSection = () => {
  return (
    <div className="border-solid border-t border-[#e0e0e0] flex items-center pt-3.5">
      <EmojisIcon />
      <CommentInput />
      <PostCommentButton />
    </div>
  );
};

export default CommentSection;
