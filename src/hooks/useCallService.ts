// https://usehooks-typescript.com/react-hook/use-fetch

import { useEffect, useReducer } from 'react';

interface StateType<T> {
  status: 'pending' | 'fullfilled' | 'rejected';
  data?: T;
  error?: ErrorCodeResponse[];
}

type Action<T> =
  | { type: 'pending' }
  | { type: 'fullfilled'; payload: T }
  | { type: 'rejected'; payload: any };

function useCallService<T>(service: (...arg: any) => Promise<T>, dep?:any[]): StateType<T> {
  const serviceReducer = (state: StateType<T>, action: Action<T>): StateType<T> => {
    switch (action.type) {
      case 'pending':
        return {
          ...state,
          status: 'pending',
        };
      case 'fullfilled': {
        return {
          ...state,
          status: 'fullfilled',
          data: action.payload,
        };
      }
      case 'rejected':
        return {
          ...state,
          status: 'rejected',
          error: action.payload,
        };
      default:
        return state;
    }
  };

  const initialState: StateType<T> = {
    status: 'pending',
  };

  const [state, dispatch] = useReducer(serviceReducer, initialState);

  useEffect(() => {
    let isMounted = true;
    const callService = async () => {
      if (isMounted) dispatch({ type: 'pending' });
      try {
        const result = await service();
        if (isMounted) dispatch({ type: 'fullfilled', payload: result });
      } catch (error) {
        if (isMounted) dispatch({ type: 'rejected', payload: error });
      }
    };
    callService();
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dep || []);
  return state;
}

export default useCallService;
