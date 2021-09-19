import React, { useEffect, useMemo, useState } from 'react';

import Loading from 'components/atoms/Loading';
import LibraryImages, {
  LibraryItemTypes,
} from 'components/organisms/LibraryImage';
import useCallService from 'hooks/useCallService';
import useDebounce from 'hooks/useDebounce';
import getLibraryCategoriesListService, {
  getLibraryList,
} from 'services/libraries';
import { LibraryListItemData } from 'services/libraries/type';
import { getImageURL } from 'utils/functions';

const INIT = 1;
const LIMIT = 5;

export interface ImagesProps {
  handleClick?: (idx: number, data: LibraryListItemData[]) => void;
}

const Images: React.FC<ImagesProps> = ({ handleClick }) => {
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
              imgSrc: getImageURL(item.media),
              title: item.title,
            });
          }
        });
      } else {
        result.push({
          imgSrc: getImageURL(item.media),
          title: item.title,
        });
      }
    });

    return result;
  }, [data, tagsActive]);

  const handleClickTag = (id: number) => {
    if (tagsActive.includes(id)) {
      setTagsActive((prev) => prev.filter((e) => e !== id));
    } else {
      setTagsActive([...tagsActive, id]);
    }
  };

  const handleShowMore = useDebounce(async () => {
    try {
      if (meta && meta.page < meta.totalPages) {
        setLoading(true);
        const res = await getLibraryList({
          category_ids: tagsActive.toString() || undefined,
          page: meta.page + 1,
          limit: LIMIT - 1,
        });
        setData([...data, ...res.data]);
        setMeta(res.meta);
      } else {
        setMeta((prev) => (prev ? { ...prev, page: 1 } : undefined));
        setData((prev) => prev.slice(0, LIMIT));
      }
      return null;
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  }, 500);

  useEffect(() => {
    (async () => {
      try {
        setFetching(true);
        setMeta(undefined);
        const res = await getLibraryList({
          category_ids: tagsActive.toString() || undefined,
          page: INIT,
          limit: LIMIT,
        });
        setMeta(res.meta);
        setData(res.data);

        return null;
      } catch (error) {
        return error;
      } finally {
        setFetching(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tagsActive]);

  if (category.status === 'pending') {
    return (
      <div className="p-library_loading">
        <Loading modifiers={['blue']} />
      </div>
    );
  }

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
