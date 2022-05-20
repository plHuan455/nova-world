import React from 'react';
import { Redirect } from 'react-router-dom';

import i18n from 'i18n';
import { useAppSelector } from 'store/hooks';
import { getLangURL, getSlugByTemplateCode } from 'utils/language';

const ErrorNav: React.FC = () => {
  const baseSystem = useAppSelector((state) => state.systems.baseSystem?.staticPages.novaworld);

  return <Redirect to={`${getLangURL(i18n.language)}/${getSlugByTemplateCode('page404', baseSystem)}`} />;
};

export default ErrorNav;
