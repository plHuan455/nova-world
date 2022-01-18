import React, { useEffect, useMemo, useState } from 'react';

import LibraryImages, {
  LibraryItemTypes,
} from 'components/organisms/LibraryImage';
import useCallService from 'hooks/useCallService';
import useDebounce from 'hooks/useDebounce';
import useIsMounted from 'hooks/useIsMounted';
import getLibraryCategoriesListService, {
  getLibraryList,
} from 'services/libraries';
import { LibraryListItemData } from 'services/libraries/type';
import { getImageURL } from 'utils/functions';

const INIT = 1;
const LIMIT = 9;

export interface ImagesProps {
  handleClick?: (idx: number, data: LibraryListItemData[]) => void;
}

const Images: React.FC<ImagesProps> = ({ handleClick }) => {
  const isMounted = useIsMounted();

  const [tagsActive, setTagsActive] = useState<number[]>([]);
  const [data, setData] = useState<LibraryListItemData[]>([]);
  const [meta, setMeta] = useState<MetaData>();
  const [fetching, setFetching] = useState(false);
  const [loading, setLoading] = useState(false);

  const category = useCallService(() => getLibraryCategoriesListService(), []);

  const tagList = useMemo(() => {
    if (!category.data?.length) return [];
    return category.data.map((e) => ({
      id: e.id,
      label: e.name,
    }));
  }, [category]);

  const listImages = useMemo(() => {
    const result: LibraryItemTypes[] = [];
    if (!data?.length) return [];

    data.forEach((item) => {
      if (tagsActive.length) {
        tagsActive.forEach((tagId) => {
          if (item.categories.some((cate) => cate.id === tagId)) {
            result.push({
              imgSrc: getImageURL(item?.translation?.mediaThumb || item?.translation?.media),
              title: item.title,
            });
          }
        });
      } else {
        result.push({
          imgSrc: getImageURL(item?.translation?.mediaThumb || item?.translation?.media),
          title: item.title,
        });
      }
    });

    return result;
  }, [data, tagsActive]);

  const handleClickTag = (id: number) => {
    if (tagsActive.includes(id)) {
      setTagsActive([]);
    } else {
      setTagsActive([id]);
    }
  };

  const handleShowMore = useDebounce(async (): Promise<void> => {
    try {
      if (meta && meta.page < meta.totalPages) {
        setLoading(true);
        const res = await getLibraryList({
          category_ids: tagsActive.toString() || undefined,
          page: meta.page + 1,
          limit: LIMIT,
        });
        setData([...data, ...res.data]);
        setMeta(res.meta);
      } else {
        setMeta(meta ? { ...meta, page: 1 } : undefined);
        setData(data.slice(0, LIMIT));
      }
    } catch {
      // empty
    } finally {
      setLoading(false);
    }
  }, 500);

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        if (isMounted()) setFetching(true);
        if (isMounted()) setMeta(undefined);
        const res = await getLibraryList({
          category_ids: tagsActive.toString() || undefined,
          page: INIT,
          limit: LIMIT,
        });
        if (isMounted()) setMeta(res.meta);
        if (isMounted()) setData(res.data);
      } catch {
        // empty
      } finally {
        if (isMounted()) setFetching(false);
      }
    })();
  }, [tagsActive, isMounted]);

  return (
    <LibraryImages
      listImages={listImages}
      tagsList={tagList}
      tagsActive={tagsActive}
      page={meta?.page}
      totalPage={meta?.totalPages}
      fetching={fetching}
      loading={loading}
      handleClickImage={(idx) => handleClick && handleClick(idx, data)}
      handleShowMore={handleShowMore}
      handleClickTag={handleClickTag}
    />
  );
};

export default Images;
