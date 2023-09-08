'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="custom-error custom-wrap">
      <div className="custom-container">
        <div className="custom-error-content custom-content">
          <h1>404</h1>
          <p className="global-excerpt">Page not found</p>
          <div className="flex">
            <a href="" className="global-button">
              Back to homepage
            </a>
            <button className="global-button" onClick={() => reset()}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
