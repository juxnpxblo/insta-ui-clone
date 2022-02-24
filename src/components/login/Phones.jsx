import { useEffect, useRef } from 'react';

import first from '../../assets/images/phone-1.jpg';
import second from '../../assets/images/phone-2.jpg';
import third from '../../assets/images/phone-3.jpg';
import fourth from '../../assets/images/phone-4.jpg';
import fifth from '../../assets/images/phone-5.jpg';

import FadeStackedImages from '../../utils/FadeStackedImages';

import StackedImage from './StackedImage';

const Phones = () => {
  const phonesRef = useRef(null);

  useEffect(() => {
    const phones = phonesRef.current;
    const fadeDelay = 5000;
    new FadeStackedImages(phones, fadeDelay).startFading();
  }, []);

  const stackedImages = [
    {
      src: fifth,
      show: false,
    },
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
