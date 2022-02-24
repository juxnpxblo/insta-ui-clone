const PostDescription = ({ name, description }) => {
  return (
    <p className="text-sm text-[#262626] pb-1">
      <span className="font-bold">{name}</span> {description}
    </p>
  );
};

export default PostDescription;
