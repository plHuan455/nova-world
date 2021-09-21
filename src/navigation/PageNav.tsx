import React, { FunctionComponent } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import Loading from 'components/atoms/Loading';
import useCallService from 'hooks/useCallService';
import { TemplateCode } from 'navigation';
import { getPageService } from 'services/navigation';
import { BasePageData } from 'services/navigation/types';
import { useAppSelector } from 'store/hooks';
import { getSlugByTemplateCode } from 'utils/language';

const PageNav: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { staticSlug } = useAppSelector((state) => state.menu);
  const pageData = useCallService(() => getPageService(slug), []);

  switch (pageData.status) {
    case 'pending': {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      return <Loading />;
    }
    case 'rejected': {
      const error = pageData.error && pageData.error.length > 0
        ? pageData.error[0]
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
        (template) => template.code === pageData.data?.pageData.templateCode,
      )?.component;

      return React.createElement<BasePageData<any>>(
        Component as FunctionComponent,
        pageData.data,
      );
    }
  }
};

export default PageNav;
