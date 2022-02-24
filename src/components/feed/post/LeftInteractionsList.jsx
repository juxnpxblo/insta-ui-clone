import LikeIcon from './LikeIcon';
import FilledLikeIcon from './FilledLikeIcon';
import CommentIcon from './CommentIcon';
import ShareIcon from './ShareIcon';

const LeftInteractionsList = () => {
  return (
    <div className="flex gap-3">
      <FilledLikeIcon />
      {/* <LikeIcon /> */}
      <CommentIcon />
      <ShareIcon />
    </div>
  );
};

export default LeftInteractionsList;
