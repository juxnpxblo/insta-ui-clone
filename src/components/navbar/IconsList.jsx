import HomeIcon from './HomeIcon';
import HomeIconOutline from './HomeIconOutline';
import DirectIcon from './DirectIcon';
import NewPostIcon from './NewPostIcon';
import ExploreIcon from './ExploreIcon';
import ActivityIcon from './ActivityIcon';
import AccountIcon from './AccountIcon';

const IconsList = ({ isFeed }) => {
  return (
    <div className="flex gap-5">
      {isFeed ? <HomeIcon /> : <HomeIconOutline />}
      <DirectIcon />
      <NewPostIcon />
      <ExploreIcon />
      <ActivityIcon />
      <AccountIcon />
    </div>
  );
};

export default IconsList;
