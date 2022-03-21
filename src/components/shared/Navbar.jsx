import logo from '../../assets/images/logo-navbar.png';
import SearchBar from '../navbar/SearchBar';
import IconsList from '../navbar/IconsList';

const Navbar = ({ isFeed }) => {
  return (
    <nav className="bg-white sticky top-0 border-solid border-b border-[#e0e0e0] px-5 flex z-20">
      <div className="max-w-[935px] mx-auto grow">
        <div className="flex py-3 items-center justify-between">
          <div className="shrink-0">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <SearchBar />
          <IconsList isFeed={isFeed} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
