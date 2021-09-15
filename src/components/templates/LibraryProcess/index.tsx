import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';

import Text from 'components/atoms/Text';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';
import Player from 'components/organisms/Player';
import useScrollAnimate from 'hooks/useScrollAnimation';
import mapModifiers from 'utils/functions';

export type ProjectProcessListTypes = {
  state: string;
  desc?: string;
  videoThumbnail?: string;
  videoSrc: string;
};

interface ProjectProcessProps {
  imgTextureSrc?: string;
  title?: string;
  useProjectProcessPage?: boolean;
  processList: ProjectProcessListTypes[];
  handleClick?: (index: number) => void;
}

const ProjectProcess: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ProjectProcessProps
> = ({ processList, useProjectProcessPage, handleClick }) => {
  const [nav1, setNav1] = useState<Slider | null>();
  const [nav2, setNav2] = useState<Slider | null>();
  const [videoItem, setVideoItem] = useState<ProjectProcessListTypes | null>(
    processList[0],
  );
  const [playerPlay, setPlayerPlay] = useState(false);

  const aniRef = useRef<HTMLDivElement>(null);
  const animate = useScrollAnimate(aniRef);

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
    centerMode: milestoneArr.length > 1,
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
    if (processList.length > 0) setVideoItem(processList[0]);
  }, [processList]);
  return (
    <div
      className={mapModifiers(
        't-projectprocess',
        useProjectProcessPage && 'useprojectprocesspage',
      )}
      ref={aniRef}
    >
      {processList.length > 0 ? (
        <Container>
          <div className={animate ? 't-projectprocess_milestones animate animate-fadeInUp' : 't-projectprocess_milestones preanimate'}>
            <div className="t-projectprocess_milestones_wrapper">
              <Carousel
                asNavFor={nav2 as Slider}
                ref={(slider) => setNav1(slider)}
                settings={milestonesSettings}
              >
                {milestoneArr.length > 0
                  && milestoneArr.map((val, idx) => (
                    <div
                      className={`t-projectprocess_milestones_item ${
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
          <div className={animate ? 't-projectprocess_content animate animate-fadeInUp' : 't-projectprocess_content preanimate'}>
            <div className="t-projectprocess_content_wrapper">
              {videoItem && (
                <div className="t-projectprocess_content_video">
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
              <div className="t-projectprocess_content_carousel">
                <Carousel
                  settings={contentSettings}
                  asNavFor={nav1 as Slider}
                  ref={(slider) => setNav2(slider)}
                >
                  {processList.map((val, idx) => (
                    <div
                      className="t-projectprocess_content_info"
                      key={idx.toString()}
                      onClick={() => {
                        if (handleClick) handleClick(idx);
                      }}
                    >
                      <div className="t-projectprocess_content_inner">
                        <div className="t-projectprocess_content_info-desc">
                          <Text
                            type="div"
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
        </Container>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProjectProcess;
