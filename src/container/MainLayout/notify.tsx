/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';

import Notify from 'components/molecules/Notify';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { closeNotify } from 'store/notify';

const NotifyContainer:React.FC = () => {
  const { notify } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let t:any = '';

    if (notify.isOpen) {
      t = setTimeout(() => {
        dispatch(closeNotify());
      }, 1500);
    }

    return () => {
      if (t) { clearTimeout(t); }
    };
  }, [notify.isOpen, dispatch]);

  return <Notify {...notify} />;
};

export default NotifyContainer;
