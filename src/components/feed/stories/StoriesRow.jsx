import Story from './Story';

import story1 from '../../../assets/images/story-1.png';
import story2 from '../../../assets/images/story-2.png';
import story3 from '../../../assets/images/story-3.png';
import story4 from '../../../assets/images/story-4.png';
import story5 from '../../../assets/images/story-5.png';
import story6 from '../../../assets/images/story-6.png';
import story7 from '../../../assets/images/story-7.png';
import story8 from '../../../assets/images/story-8.png';

const StoriesRow = () => {
  const stories = [
    { name: 'dog1', pic: story1 },
    { name: 'dog2', pic: story2 },
    { name: 'dog3', pic: story3 },
    { name: 'dog4', pic: story4 },
    { name: 'dog5', pic: story5 },
    { name: 'dog6', pic: story6 },
    { name: 'dog7', pic: story7 },
    { name: 'dog8', pic: story8 },
  ];

  return (
    <div className="flex pl-5 gap-4 overflow-hidden items-center">
      {stories.map((story) => (
        <Story key={story.name} story={story} />
      ))}
    </div>
  );
};

export default StoriesRow;
