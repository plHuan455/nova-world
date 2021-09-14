/* eslint-disable no-unused-vars */
import React from 'react';

import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';
import { NewsData } from 'services/newsDetail/types';

interface ContentProps {
  breadcrumb?: BreadcrumbsData;
  newsData?: NewsData;
}

const Content: React.FC<ContentProps> = ({
  breadcrumb,
  newsData,
}) => (
  <Container>
    <Animate type="fadeInUp" extendClassName="p-newsdetail_content">
      <Text modifiers={['400', 'cyanCobaltBlue']}>{breadcrumb?.text}</Text>
      <div className="title">
        <Heading type="h6" modifiers={['500', 'cyanCobaltBlue']}>
          {newsData?.title}
        </Heading>
      </div>
      <div className="published">
        <Icon iconName="clock" />
        <Text modifiers={['400', 'dimGray']}>{newsData?.publishedAt}</Text>
      </div>
      <div className="content">
        <Text innerHTML={newsData?.content || ''} />
      </div>
    </Animate>
  </Container>
);

export default Content;
