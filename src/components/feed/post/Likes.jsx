const Likes = ({ likes }) => {
  return (
    <button className="flex pl-3 pb-2">
      <p className="text-sm text-[#262626] -translate-x-3">
        <span className="font-bold">{likes} likes</span>
      </p>
    </button>
  );
};

export default Likes;
