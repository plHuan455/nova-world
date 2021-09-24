import React, { FunctionComponent, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import Loading from 'components/atoms/Loading';
import MainLayout from 'components/templates/MainLayout';
import useCallService from 'hooks/useCallService';
import { TemplateCode } from 'navigation';
import { getPageService } from 'services/navigation';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setPageTranslation } from 'store/locales';
import { getSlugByTemplateCode } from 'utils/language';

const NotFound = React.lazy(() => import('pages/NotFound'));

const PageNav: React.FC = () => {
  const dispatch = useAppDispatch();
  const { slug } = useParams<{ slug: string }>();
  const { staticSlug } = useAppSelector((state) => state.menu);
  const pageData = useCallService(() => getPageService(slug), [slug]);

  useEffect(() => {
    if (pageData) {
      dispatch(setPageTranslation(pageData.data?.pageData.translations));
    }
  }, [dispatch, pageData]);

  switch (pageData.status) {
    case 'pending': {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      return (
        <MainLayout>
          <div style={{
            paddingTop: 68,
            paddingBottom: '100vh',
          }}
          >
            <Loading modifiers={['blue']} />
          </div>
        </MainLayout>
      );
    }
    case 'rejected': {
      const error = pageData.error && pageData.error.length > 0
        ? pageData.error[0]
        : undefined;
      if (error?.code.toString() === '404') {
        return (
          <Redirect to={`/${getSlugByTemplateCode('page404', staticSlug)}`} />
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

      if (Component) {
        return React.createElement<BasePageData<any>>(
          Component as FunctionComponent,
          pageData.data,
        );
      }
      return React.createElement(
        NotFound,
      );
    }
  }
};

export default PageNav;
