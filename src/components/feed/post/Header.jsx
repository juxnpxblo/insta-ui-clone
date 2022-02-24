import Author from './Author';
import Dots from './Dots';

const Header = ({ profilePic, name }) => {
  return (
    <div className="flex items-center justify-between">
      <Author profilePic={profilePic} name={name} />
      <Dots />
    </div>
  );
};

export default Header;
