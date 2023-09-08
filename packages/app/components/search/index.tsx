import * as React from 'react';

interface ISearchProps {}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  return (
    <div className="search-section">
      <div className="search-wrap">
        <div className="search-content">
          <form className="search-form">
            <input className="search-input" type="text" placeholder="Search" />
            <div className="search-meta">
              <span className="search-info">
                Please enter at least 3 characters
              </span>
              <span className="search-counter is-hide">
                <span className="search-counter-results">0</span>
                Results for your search
              </span>
            </div>
            <span className="search-close">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.997 10.846L1.369.219 1.363.214A.814.814 0 00.818.005.821.821 0 000 .822c0 .201.074.395.208.545l.006.006L10.842 12 .214 22.626l-.006.006a.822.822 0 00-.208.546c0 .447.37.817.818.817a.814.814 0 00.551-.215l10.628-10.627 10.628 10.628.005.005a.816.816 0 001.368-.603.816.816 0 00-.213-.552l-.006-.005L13.151 12l10.63-10.627c.003 0 .004-.003.006-.005A.82.82 0 0024 .817a.817.817 0 00-1.37-.602l-.004.004-10.63 10.627z"></path>
              </svg>
            </span>
          </form>
          <div className="search-results global-image"></div>
        </div>
      </div>
      <div className="search-overlay"></div>
    </div>
  );
};

export default Search;
