import React from 'react';
import LoaderSvg from '@assets/svgs/loader';
import {useEffect, useRef, useState} from 'react';

const Spinner = () => {
  const [degree, setDegree] = useState<number>(0);
  const timeout = useRef<NodeJS.Timeout>();
  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      setDegree(prevDeg => (prevDeg < 360 ? prevDeg + 40 : 40));
    }, 100);
    return () => {
      clearTimeout(timeout.current);
    };
  }, [degree]);
  return <LoaderSvg transform={[{rotateZ: `${degree}deg`}]} />;
};

export default Spinner;
