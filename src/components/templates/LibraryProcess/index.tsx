import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import Text from 'components/atoms/Text';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Player from 'components/organisms/Player';
import mapModifiers from 'utils/functions';

export type LibraryProcessListTypes = {
  state: string;
  desc?: string;
  videoThumbnail?: string;
  videoSrc: string;
};

interface LibraryProcessProps {
  useLibraryProcessPage?: boolean;
  processList: LibraryProcessListTypes[];
  handleClick?: (index: number) => void;
}

const LibraryProcess: React.ForwardRefRenderFunction<
  HTMLDivElement,
  LibraryProcessProps
> = ({ processList, useLibraryProcessPage, handleClick }) => {
  const [nav1, setNav1] = useState<Slider | null>();
  const [nav2, setNav2] = useState<Slider | null>();
  const [videoItem, setVideoItem] = useState<LibraryProcessListTypes | null>(
    processList[0],
  );
  const [playerPlay, setPlayerPlay] = useState(false);

  const renderMilestones = () => {
    const result = processList.map((val) => ({
      stone: val.state,
    }));
    return result;
  };
  const milestoneArr = renderMilestones();
  const milestonesSettings = {
    dots: false,
    variableWidth: milestoneArr.length > 1,
    arrows: true,
    slidesToScroll: 1,
    infinite: false,
    focusOnSelect: milestoneArr.length > 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const contentSettings = {
    infinite: false,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    afterChange: (current: any) => {
      setVideoItem(processList[current]);
      setPlayerPlay(false);
    },
  };
  useEffect(() => {
    if (processList.length > 0) setVideoItem(processList[processList.length - 1]);
    if (nav1) {
      nav1.slickGoTo(0, true);
    }
  }, [processList, nav1]);
  return (
    <div
      className={mapModifiers(
        't-library-process',
        useLibraryProcessPage && 'uselibraryprocesspage',
      )}
    >
      {processList.length > 0 ? (
        <>
          <div className="t-library-process_milestones">
            <div className="t-library-process_milestones_wrapper">
              <Carousel
                asNavFor={nav2 as Slider}
                ref={(slider) => setNav1(slider)}
                settings={milestonesSettings}
              >
                {milestoneArr.length > 0
                  && milestoneArr.map((val, idx) => (
                    <div
                      className={`t-library-process_milestones_item ${
                        milestoneArr.length <= 1 ? ' single' : ''
                      }`}
                      key={idx.toString()}
                    >
                      <p>{val.stone}</p>
                    </div>
                  ))}
              </Carousel>
            </div>
          </div>
          <div className="t-library-process_content">
            <div className="t-library-process_content_wrapper">
              {videoItem && (
                <div className="t-library-process_content_video">
                  <Player
                    ratio="652x367"
                    isPlay={playerPlay}
                    videoThumbnail={videoItem.videoThumbnail}
                    videoSrc={videoItem.videoSrc}
                    hasControls
                    handleClickPlayBtn={() => setPlayerPlay(true)}
                  />
                </div>
              )}
              <div className="t-library-process_content_carousel">
                <Carousel
                  settings={contentSettings}
                  asNavFor={nav1 as Slider}
                  ref={(slider) => setNav2(slider)}
                >
                  {processList.map((val, idx) => (
                    <div
                      className="t-library-process_content_info"
                      key={idx.toString()}
                      onClick={() => {
                        if (handleClick) handleClick(idx);
                      }}
                    >
                      <div className="t-library-process_content_inner">
                        <div className="t-library-process_content_info-desc">
                          <Text
                            type="div"
                            modifiers={['20x24', '500', 'cyanCobaltBlue']}
                            innerHTML={val.desc}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LibraryProcess;
