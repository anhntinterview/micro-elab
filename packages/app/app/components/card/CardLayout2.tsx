import * as React from 'react';
import { Customer } from '@app/app/template/entity/customer.entity';

interface ICardLayout2Props {
  customer: Customer;
}

const CardLayout2: React.FunctionComponent<ICardLayout2Props> = ({ customer }) => {
  return (
    <div className="global-item-author is-image global-image">
      {/* <a
        href={`/post/${customer.username}`}
        className="global-link"
        title={customer.username}
      ></a>
      <img src={`${customer.avatar}`} loading="lazy" alt={`_${customer.avatar}`} />{' '} */}
    </div>
  );
};

export default CardLayout2;
