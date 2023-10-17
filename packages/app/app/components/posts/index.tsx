'use client';

import * as React from 'react';
import CardLayout2 from '../card/CardLayout2';
import CardLayout1 from '../card/CardLayout1';
import { useElementContext } from '../../template/context/element.provider';
import Loading from '../loading';
import CRUDService from '@app/app/core/service/crud/crud.service';
import { exportGlobalPostContextProps } from '@app/app/template/resource/post.resource';
import { exportGlobalCustomerContextProps } from '@app/app/template/resource/customer.resource';

interface IPostsProps {}

const Posts: React.FunctionComponent<IPostsProps> = (props) => {
  /*
  const { query } = useElementContext();
  React.useEffect(() => {
    // Khi component được tạo, sử dụng fetchDataQuery để lấy dữ liệu từ API
    query.refetch();
  }, []);

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error</div>;
  }
  const data = query.data;
  console.log(`data: `,data);
  */

  const {
    globalPostProps: { query },
  } = useElementContext();
  const { isFetched, data } = query({ enable: true });

  return (
    <div className="loop-section global-padding">
      <div className="loop-subtitle">
        <small className="loop-subtitle-title global-title">
          See what we’ve <br />
          <span>written lately</span>
        </small>
        <div className="global-authors option-1-2-3">
          <div>{/* <CardLayout2 /> */}</div>
          <small>Meet our author</small>
        </div>
      </div>
      <div className="loop-wrap">
        {isFetched ? (
          data!.list.map((item) => {
            return (
              <div key={item.id} className="global-authors option-1-2-3">
                <div>
                  <CardLayout1 post={item} />
                </div>
                <small>Meet our author</small>
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Posts;
