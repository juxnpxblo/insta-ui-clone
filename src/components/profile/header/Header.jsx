import AccountIcon from './AccountIcon';
import AccountUser from './AccountUser';
import FollowButton from './FollowButton';
import UnfollowButton from './UnfollowButton';
import MessageButton from './MessageButton';
import Dots from './Dots';
import AccountStats from './AccountStats';
import AccountName from './AccountName';
import AccountAbout from './AccountAbout';

const Header = () => {
  return (
    <div className="flex w-[935px] mx-auto mt-5 mb-10">
      <div className="w-min px-20">
        <AccountIcon />
      </div>
      <div className="grow pt-4">
        <div className="flex mb-5 items-center">
          <AccountUser />
          <div className="flex ml-5 gap-2">
            <MessageButton />
            <FollowButton />
            <Dots />
          </div>
        </div>
        <AccountStats />
        <div className="text-[#262626]">
          <AccountName />
          <AccountAbout />
        </div>
      </div>
    </div>
  );
};

export default Header;
