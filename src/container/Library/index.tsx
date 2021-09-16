import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import eventList from 'assets/dataDummy/eventLibrary';
import imageLibraryData, { cateList, tagsList } from 'assets/dataDummy/imageLibrary';
import processData from 'assets/dataDummy/processLibrary';
import Banner from 'components/organisms/Banner';
import LibraryEventPopup, { EventCardProps } from 'components/templates/LibraryEventPopup';
import LibraryList, { ListDataType } from 'components/templates/LibraryList';
import useMainLayout from 'hooks/useMainLayout';

const LibraryContainer: React.FC = () => {
  const history = useHistory();
  useMainLayout('another');
  const [popupData, setPopupData] = useState<{isOpen: boolean, eventData: EventCardProps | null}>({
    isOpen: false,
    eventData: null,
  });
  const [activeTab, setActiveTab] = useState(0);
  const [listData, setListData] = useState<ListDataType>([]);

  const handlePopup = (idx: number) => {
    setPopupData({ ...popupData, isOpen: true, eventData: eventList[idx] });
  };

  useEffect(() => {
    switch (activeTab) {
      case 1:
        return setListData(processData);
      case 2:
        return setListData(eventList);
      default:
        return setListData(imageLibraryData);
    }
  }, [activeTab]);
  return (
    <>
      <section>
        <Banner thumbnail="https://source.unsplash.com/random" />
      </section>
      <section className="p-library_list-section s-wrap s-donut">
        <LibraryList
          activeTab={activeTab}
          cateList={cateList}
          tagList={tagsList}
          listData={listData}
          handleClickImage={(idx) => history.push({
            pathname: '/thu-vien-hinh-anh',
            state: { index: idx },
          })}
          handleClickEvent={handlePopup}
          handleShowMore={() => console.log('show more')}
          handleClickTabPanel={(idx) => setActiveTab(idx)}
        />
      </section>
      <LibraryEventPopup
        isOpen={popupData.isOpen}
        handleClose={() => setPopupData({ ...popupData, isOpen: false })}
        eventData={popupData.eventData}
      />
    </>
  );
};

export default LibraryContainer;
