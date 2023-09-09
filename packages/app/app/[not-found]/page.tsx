'use client';

import { MasterLayoutProvider } from "../core/layout/layout.provider";

export default function Custom404() {
  return (
    <MasterLayoutProvider>
      <div className="custom-error custom-wrap">
        <div className="custom-container">
          <div className="custom-error-content custom-content">
            <h1>404</h1>
            <p className="global-excerpt">Page not found</p>
            <div className="flex">
              <a href="/" className="global-button">
                Back to homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    </MasterLayoutProvider>
  );
}
