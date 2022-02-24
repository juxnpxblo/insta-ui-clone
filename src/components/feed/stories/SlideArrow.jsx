import { IoIosArrowBack } from 'react-icons/io';

const SlideArrow = ({ right }) => {
  return (
    <button
      className={`absolute z-10 h-[26px] w-[26px] bg-white rounded-full flex items-center justify-center ${
        right
          ? 'right-0 mr-3 rotate-180 light-right-shadow'
          : 'left-0 ml-3 light-left-shadow'
      }`}
    >
      <IoIosArrowBack color="#262626" />
    </button>
  );
};

export default SlideArrow;
