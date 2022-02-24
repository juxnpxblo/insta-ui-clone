import AuthorName from './AuthorName';
import AuthorIcon from './AuthorIcon';

const Author = ({ profilePic, name }) => {
  return (
    <div className="flex items-center pl-3 gap-3 py-2.5">
      <AuthorIcon icon={profilePic} />
      <AuthorName name={name} />
    </div>
  );
};

export default Author;
