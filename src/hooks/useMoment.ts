import moment from 'moment';
import {useEffect, useState} from 'react';

function useMoment(date: Date | null = null) {
  const [text, settext] = useState(date ? moment(date).fromNow() : '');

  useEffect(() => {
    const interval = setInterval(() => {
      settext(date ? moment(date).fromNow() : '');
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

  return text;
}

export default useMoment;
