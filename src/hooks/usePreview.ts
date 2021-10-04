import { useEffect, useState } from 'react';

import useQueryParams from './useQueryParams';

import previewDataService from 'services/preview';

interface DataPreviewType<T> {
  status: 'pending' | 'fullfilled' | 'rejected';
  data?: BasePageData<T>;
  error?: unknown;
}

const usePreview = <T, >(
  callService: (...arg: any) => Promise<BasePageData<T>>,
  dependency: Array<unknown>,
) => {
  const { preview } = useQueryParams<{ preview?: string }>();
  const [data, setData] = useState<DataPreviewType<T>>({
    status: 'pending',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result;
        if (preview) {
          result = await previewDataService<T>(preview);
        } else {
          result = await callService();
        }
        setData({
          status: 'fullfilled',
          data: result,
        });
      } catch (error) {
        setData({
          status: 'rejected',
          error,
        });
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependency, preview]);

  return data;
};

export default usePreview;
