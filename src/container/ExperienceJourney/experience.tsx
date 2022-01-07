import React from 'react';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';
import ExperienceJourneyCard, { ExperienceJourneyCardProps } from 'components/organisms/ExperienceJourneyCard';
import useScrollInfinite from 'hooks/useScrollInfinite';

type ExperienceProps = {
  title: string;
  description: string;
  data:ExperienceJourneyCardProps[];
  handleLoadMore?: () => void;
  loading?: boolean;
}

const checkPositionCard = (index:number) => {
  switch (index) {
    case 1:
      return 'custom';
    case 2:
      return 'bottom';
    case 3:
      return 'left';

    default:
      return 'right';
  }
};

const BgLayer:React.FC<{index:number}> = ({ index }) => {
  switch (index) {
    case 1:
      return (
        <div className="p-experience-journey_leaf-top" />
      );
    case 2:
      return (
        <>
          <div className="p-experience-journey_line-top" />
          <div className="p-experience-journey_bg-linear" />
        </>
      );
    case 3:
      return (
        <div className="p-experience-journey_beach" />
      );

    default:
      return (
        <>
          <div className="p-experience-journey_leaf-middle" />
          <div className="p-experience-journey_leaf-bottom" />
          <div className="p-experience-journey_line-bottom" />
        </>
      );
  }
};

const fnLoop = (key:number) => {
  if (key + 1 <= 4) return key + 1;
  return key + 1 - Math.floor((key + 1) / 4) * 4;
};

const Experience:React.FC<ExperienceProps> = ({
  title,
  description,
  data,
  loading,
  handleLoadMore,
}) => {
  const { setNode } = useScrollInfinite(handleLoadMore);
  return (
    <>
      <Container>
        <Animate type="beatSmall">
          <div className="p-experience-journey_title">
            <Heading type="h2">
              {title}
              <Divider />
            </Heading>
          </div>
          <div className="p-experience-journey_description">
            <Text modifiers={['center']} innerHTML={description} />
          </div>
        </Animate>
      </Container>
      <div className="p-experience-journey_content">
        {
        data.map((item, key) => (
          <div
            key={`card-${key.toString()}`}
            className="p-experience-journey_card-item"
            ref={key + 1 === data.length ? (node) => setNode(node) : undefined}
          >
            <BgLayer index={fnLoop(key)} />
            <Container>
              <Animate
                type={key % 2 === 0 ? 'scaleY' : 'scaleX'}
              >
                <ExperienceJourneyCard
                  position={checkPositionCard(fnLoop(key))}
                  {...item}
                />
              </Animate>
            </Container>
          </div>
        ))
      }
        { loading && <Loading modifiers={['blue']} />}
      </div>
    </>
  );
};

export default Experience;
