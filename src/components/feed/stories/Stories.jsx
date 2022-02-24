import StoriesRow from './StoriesRow';
import SlideArrow from './SlideArrow';

const Stories = () => {
  return (
    <div className="rounded-sm border-solid border border-[#e0e0e0] bg-white py-4 flex items-center relative">
      <SlideArrow left />
      <StoriesRow />
      <SlideArrow right />
    </div>
  );
};

export default Stories;
