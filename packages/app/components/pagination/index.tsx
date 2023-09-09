import * as React from 'react';
import { paginationStyle1 } from './cssInline';

interface IPaginationProps {}

const Pagination: React.FunctionComponent<IPaginationProps> = (props) => {
  return (
    <div className="pagination-section">
      <a href="/page/2/" aria-label="Load more" style={paginationStyle1}></a>
      <button className="global-button">Load more</button>
    </div>
  );
};

export default Pagination;
