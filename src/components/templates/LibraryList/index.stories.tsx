import { Story, Meta } from '@storybook/react';
import React from 'react';

import LibraryList from '.';

import imageLibraryData, { cateList, tagsList } from 'assets/dataDummy/imageLibrary';

export default {
  title: 'Components/templates/LibraryList',
  component: LibraryList,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <LibraryList
    title="thư viện"
    cateList={cateList}
    tagList={tagsList}
    listData={imageLibraryData}
    handleClickImage={(idx) => console.log(idx)}
    handleShowMore={() => console.log('show more')}
    handleClickTabPanel={(idx) => console.log(idx)}
  />
);
