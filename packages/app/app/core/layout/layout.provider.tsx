import * as React from 'react';
import { Suspense } from 'react';

import Header from '@app/components/layout/header';
import Footer from '@app/components/layout/footer';
import Search from '@app/components/search';
import AsideLayout1 from '@app/components/layout/AsideLayout1';
import RightMainLayout1 from '@app/components/layout/RightMainLayout1';

export const FormLayoutProvider = ({
  children,
  bgConfig,
}: {
  children: React.ReactNode;
  bgConfig: string;
}) => {
  return (
    <div className="custom-wrap">
      <Suspense>
        <AsideLayout1
          urlImage={bgConfig}
        />
        <RightMainLayout1>{children}</RightMainLayout1>
      </Suspense>
    </div>
  );
};

export const MasterLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="global-wrap">
      <div className="global-content">
        <Search />
        <Header />
        <Suspense>
          <div>{children}</div>
        </Suspense>
        <Footer />
      </div>
    </div>
  );
};