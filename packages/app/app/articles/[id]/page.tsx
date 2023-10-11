import ApiService from '@app/app/core/service/api/api.service';
import { Post } from '@app/app/template/entity/post.entity';
import * as React from 'react';

interface IArticleProps {
  params: {
    id: string;
  };
}

const Article: React.FunctionComponent<IArticleProps> = async ({ params }) => {
  const { id } = params;
  const postById = new ApiService();
  postById.endpoint = `/post/${id}`;
  const post: Post = await postById.get();
  console.log(`res: `, post);
  return (
    <article className="post-section">
      <div className="post-header">
        <div className="post-header-wrap global-padding">
          <div className="post-header-container">
            <div className="post-header-content">
              <div>
                <div className="post-tags global-tags">
                  <a href="/tag/design/">Design</a>
                  <a href="/tag/idea/">Idea</a>
                  <a href="/tag/review/">Review</a>
                </div>
                <h1 className="post-title global-title">{post.title}</h1>
                <p className="post-excerpt global-excerpt">{post.excerpt}</p>
              </div>
              <div className="post-meta">
                <div className="post-authors global-authors">
                  <div>
                    <div className="post-item-author global-item-author is-image global-image">
                      <a
                        href="/author/liza/"
                        className="global-link"
                        title="Liza Harber"
                      ></a>
                      <img
                        src={post.coverImage}
                        loading="lazy"
                        alt="Liza Harber"
                      />{' '}
                    </div>
                  </div>
                </div>
                <div className="post-meta-content">
                  <a href="/author/liza/">{post.created_by}</a>
                  <time dateTime="2022-01-19">
                    {new Date(post.created_at).toDateString()}
                  </time>
                </div>
              </div>
            </div>
            <div className="post-header-image">
              <figure>
                <div className="global-image global-image-orientation global-radius">
                  <img
                    sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
                    src={post.coverImage}
                    alt="New technology is not good or evil in and of itself"
                  />
                </div>
                <figcaption>
                  Photo by <a href="">Brando Makes Branding</a> /{' '}
                  <a href="">Unsplash</a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>{' '}
      <div className="post-content global-padding">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="post-share-section">
          <small>Share this post</small>
          <div className="post-share-wrap">
            <a
              href="https://twitter.com/intent/tweet?text=New%20technology%20is%20not%20good%20or%20evil%20in%20and%20of%20itself&amp;url=https://basho.fueko.net/new-technology-is-not-good-or-evil-in-and-of-itself/"
              target="_blank"
              rel="noopener"
              aria-label="Share on Twitter"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://basho.fueko.net/new-technology-is-not-good-or-evil-in-and-of-itself/"
              target="_blank"
              rel="noopener"
              aria-label="Share on Facebook"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/shareArticle?mini=true&amp;title=New%20technology%20is%20not%20good%20or%20evil%20in%20and%20of%20itself&amp;url=https://basho.fueko.net/new-technology-is-not-good-or-evil-in-and-of-itself/"
              target="_blank"
              rel="noopener"
              aria-label="Share on Linkedin"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
            <a
              href="javascript:"
              className="post-share-link"
              id="copy"
              data-clipboard-target="#copy-link"
              aria-label="Copy link"
            >
              <svg
                role="img"
                viewBox="0 0 33 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M27.3999996,13.4004128 L21.7999996,13.4004128 L21.7999996,19 L18.9999996,19 L18.9999996,13.4004128 L13.3999996,13.4004128 L13.3999996,10.6006192 L18.9999996,10.6006192 L18.9999996,5 L21.7999996,5 L21.7999996,10.6006192 L27.3999996,10.6006192 L27.3999996,13.4004128 Z M12,20.87 C7.101,20.87 3.13,16.898 3.13,12 C3.13,7.102 7.101,3.13 12,3.13 C12.091,3.13 12.181,3.139 12.272,3.142 C9.866,5.336 8.347,8.487 8.347,12 C8.347,15.512 9.866,18.662 12.271,20.857 C12.18,20.859 12.091,20.87 12,20.87 Z M20.347,0 C18.882,0 17.484,0.276 16.186,0.756 C14.882,0.271 13.473,0 12,0 C5.372,0 0,5.373 0,12 C0,18.628 5.372,24 12,24 C13.471,24 14.878,23.726 16.181,23.242 C17.481,23.724 18.88,24 20.347,24 C26.975,24 32.347,18.628 32.347,12 C32.347,5.373 26.975,0 20.347,0 Z"></path>
              </svg>
            </a>
            <small className="share-link-info global-alert">
              The link has been copied!
            </small>
          </div>
          <input
            type="text"
            value="https://basho.fueko.net/new-technology-is-not-good-or-evil-in-and-of-itself/"
            id="copy-link"
            aria-label="Copy link input"
          />
        </div>{' '}
      </div>
    </article>
  );
};

export default Article;
