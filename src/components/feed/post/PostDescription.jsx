const PostDescription = ({ name, description }) => {
  return (
    <p className="text-sm text-[#262626] pb-1">
      <button className="font-bold">{name}</button> {description}
    </p>
  );
};

export default PostDescription;
