import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';

import Loading from 'components/atoms/Loading';
import useCallService from 'hooks/useCallService';
import { TemplateCode } from 'navigation';
import { getStaticHomeService } from 'services/navigation';
import { BasePageData } from 'services/navigation/types';
import { useAppSelector } from 'store/hooks';
import { getSlugByTemplateCode } from 'utils/language';

const HomeNav: React.FC = () => {
  const { staticSlug } = useAppSelector((state) => state.menu);

  const homeData = useCallService(() => getStaticHomeService(), []);

  switch (homeData.status) {
    case 'pending': {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      return <Loading />;
    }
    case 'rejected': {
      const error = homeData.error && homeData.error.length > 0
        ? homeData.error[0]
        : undefined;
      if (error?.code.toString() === '404') {
        return (
          <Redirect to={`/${getSlugByTemplateCode('ERROR_404', staticSlug)}`} />
        );
      }
      return <div>Error</div>;
    }
    default: {
      document.body.style.overflow = '';
      document.body.style.height = '';

      const Component = TemplateCode.find(
        (template) => template.code === homeData.data?.pageData.templateCode,
      )?.component;

      return React.createElement<BasePageData<any>>(
        Component as FunctionComponent,
        homeData.data,
      );
    }
  }
};

export default HomeNav;
