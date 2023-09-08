import { permanentMarker } from '@app/app/util/font';
import * as React from 'react';

export default function RightMainLayout1({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="custom-container">
      <div className="custom-logo-wrap">
        <div className="custom-logo">
          <a href="/" className={`${permanentMarker.className} text-xl`}>
            <span>Freedom Walking</span>
          </a>
        </div>
      </div>
      <div className="custom-content">{children}</div>
    </div>
  );
}
