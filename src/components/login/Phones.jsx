import { useEffect, useRef } from 'react';

import first from '../../assets/images/phone-1.png';
import second from '../../assets/images/phone-2.png';
import third from '../../assets/images/phone-3.png';
import fourth from '../../assets/images/phone-4.png';

import FadeStackedImages from '../../utils/FadeStackedImages';

import StackedImage from './StackedImage';

const Phones = () => {
  const phonesRef = useRef(null);

  useEffect(() => {
    const phones = phonesRef.current;
    const fadeDelay = 4600;
    new FadeStackedImages(phones, fadeDelay).startFading();
  }, []);

  const stackedImages = [
    {
      src: fourth,
      show: false,
    },
    {
      src: third,
      show: false,
    },
    {
      src: second,
      show: true,
    },
    {
      src: first,
      show: true,
    },
  ];

  return (
    <div
      className="relative w-full h-full bg-[url('assets/images/phones.png')]"
      ref={phonesRef}
    >
      {stackedImages.map(({ src, show }) => (
        <StackedImage key={src} src={src} show={show} />
      ))}
    </div>
  );
};

export default Phones;
