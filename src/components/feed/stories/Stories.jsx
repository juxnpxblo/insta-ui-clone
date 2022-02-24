import WhiteBox from '../../shared/WhiteBox';
import StoriesRow from './StoriesRow';
import SlideArrow from './SlideArrow';

const Stories = () => {
  return (
    <WhiteBox>
      <div className="py-4 flex items-center ">
        <SlideArrow />
        <StoriesRow />
        <SlideArrow right />
      </div>
    </WhiteBox>
  );
};

export default Stories;
