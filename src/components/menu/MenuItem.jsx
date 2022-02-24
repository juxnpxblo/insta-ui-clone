import { Link } from 'react-router-dom';
import { MdArrowRightAlt } from 'react-icons/md';

const MenuItem = ({ path, text }) => {
  return (
    <Link
      to={path}
      className="flex items-center text-4xl gap-2 hover:text-[#5c5c5c] menu-item"
    >
      <span>{text}</span>
      <MdArrowRightAlt />
    </Link>
  );
};

export default MenuItem;
