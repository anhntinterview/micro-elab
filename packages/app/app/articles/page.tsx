import * as React from 'react';
import { MasterLayoutProvider } from '../core/layout/layout.provider';
import ApiService from '../core/service/api/api.service';
import { Post } from '../template/entity/post.entity';

interface IArticlesProps {}

const Articles: React.FunctionComponent<IArticlesProps> = async () => {
  const post = new ApiService();
  post.endpoint = '/post';
  const { list } = await post.get();

  return (
    <MasterLayoutProvider>
      <main className="global-main">
        <div className="archive-section">
          <h1 className="global-title">Authors</h1>
          <p className="archive-excerpt global-excerpt">
            Proin nulla felis, pharetra sed scelerisque vel, imperdiet eget
            velit. Suspendisse eros purus, pretium semper placerat vitae.
          </p>
        </div>
        <div className="custom-archive loop-section global-padding">
          <div className="global-subtitle">
            <small className="global-subtitle-title">
              Meet our <span>authors</span>
            </small>
          </div>
          <div className="loop-wrap is-authors">
            <div className="item is-loop">
              {list.map((item: Post) => (
                <>
                  <div className="item-image global-image global-image-orientation global-radius">
                    <a
                      href={`/articles/${item.id}`}
                      className="global-link"
                      aria-label="_article01"
                    ></a>
                    <img
                      srcSet={`${item.coverImage} 300w, 
                      ${item.coverImage} 600w`}
                      sizes="(max-width:480px) 300px, (max-width:768px) 600px"
                      src={`${item.coverImage}`}
                      alt="_article01"
                    />{' '}
                  </div>
                  <div className="item-content">
                    <h2 className="item-title">
                      <a href={`/arthor/${item.created_by}`}>
                        {item.created_by}
                      </a>
                    </h2>
                    <small>from Ho Chi Minh ∙ 1 post</small>
                    <p className="item-excerpt">{item.excerpt}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </main>
    </MasterLayoutProvider>
  );
};

export default Articles;
