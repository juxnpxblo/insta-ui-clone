const SeeAllComments = ({ comments }) => {
  return (
    <button>
      <p className="text-sm text-[#8e8e8e] pb-1">
        View all {comments} comments
      </p>
    </button>
  );
};

export default SeeAllComments;
