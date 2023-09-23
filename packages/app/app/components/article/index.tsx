import * as React from 'react';

interface IArticleProps {}

const Article: React.FunctionComponent<IArticleProps> = (props) => {
  return (
    <>
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
                  <h1 className="post-title global-title">
                    New technology is not good or evil in and of itself
                  </h1>
                  <p className="post-excerpt global-excerpt">
                    Vestibulum vehicula dui venenatis neque tempor, accumsan
                    iaculis sapien ornare. Sed at ante porta, ullamcorper massa
                    eu, ullamcorper sapien. Donec pretium tortor augue. Integer
                    egestas ut tellus sed pretium. Nullam tristique augue ut
                    mattis vulputate. Duis et lorem in odio ultricies porttitor.
                  </p>
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
                          src="/content/images/size/w300/2022/03/good-faces-onKIR2oTW0o-unsplash.jpg"
                          loading="lazy"
                          alt="Liza Harber"
                        />{' '}
                      </div>
                    </div>
                  </div>
                  <div className="post-meta-content">
                    <a href="/author/liza/">Liza Harber</a>
                    <time dateTime="2022-01-19">
                      January 19, 2022 — 3 minutes read
                    </time>
                  </div>
                </div>
              </div>
              <div className="post-header-image">
                <figure>
                  <div className="global-image global-image-orientation global-radius">
                    <img
                      srcSet="/content/images/size/w300/2022/03/photo-1559650656-5d1d361ad10e.jpeg 300w, 
                    /content/images/size/w600/2022/03/photo-1559650656-5d1d361ad10e.jpeg 600w,
                    /content/images/size/w1200/2022/03/photo-1559650656-5d1d361ad10e.jpeg 1200w"
                      sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
                      src="/content/images/size/w1200/2022/03/photo-1559650656-5d1d361ad10e.jpeg"
                      alt="New technology is not good or evil in and of itself"
                    />
                  </div>
                  <div>
                    Photo by{' '}
                    <a href="https://unsplash.com/@brandomakesbranding?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">
                      Brando Makes Branding
                    </a>{' '}
                    /{' '}
                    <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">
                      Unsplash
                    </a>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="post-content global-padding">
          <p>
            {`Anteger venenatis hendrerit quam nec ultrices. Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta, ullamcorper massa eu, ullamcorper sapien. Duis sapien eros, laoreet ac tempus ut, auctor vel nulla. Nunc tincidunt, risus eu congue gravida, ligula dolor sodales felis, in finibus nunc est quis leo. </p><ul><li>Mauris accumsan ante mi, venenatis porta nunc dignissim eu. </li><li>Vestibulum quis tincidunt massa. </li><li>Donec pretium tortor augue. Integer egestas ut tellus sed pretium. Nullam tristique augue ut mattis vulputate. </li></ul><p>Duis et lorem in odio ultricies porttitor. Nulla maximus diam turpis, et suscipit tortor fermentum in. Aliquam fringilla, lacus a iaculis porta, lectus nulla facilisis enim, ac volutpat velit eros quis dolor. Praesent tortor neque, feugiat eget ante et, placerat fermentum metus.</p><figure className="kg-card kg-image-card kg-width-wide kg-card-hascaption"><img src="/content/images/2022/03/brando-makes-branding-B0kRAfteJZY-unsplash.jpg" className="kg-image lightense-target" alt="" loading="lazy" width="2000" height="1318" srcset="/content/images/size/w600/2022/03/brando-makes-branding-B0kRAfteJZY-unsplash.jpg 600w, /content/images/size/w1000/2022/03/brando-makes-branding-B0kRAfteJZY-unsplash.jpg 1000w, /content/images/size/w1600/2022/03/brando-makes-branding-B0kRAfteJZY-unsplash.jpg 1600w, /content/images/size/w2400/2022/03/brando-makes-branding-B0kRAfteJZY-unsplash.jpg 2400w" sizes="(min-width: 1200px) 1200px"><figcaption>Photo by <a href="https://unsplash.com/@brandomakesbranding?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Brando Makes Branding</a></figcaption></figure><p>Aenean rhoncus lacinia viverra. Nunc eu tincidunt est, a dictum tortor. Praesent faucibus tempus sollicitudin. Ut auctor blandit sem sit amet tristique. Maecenas ligula sapien, imperdiet sed nibh in, euismod dictum lorem. Ut ex libero, tempus in massa eu, laoreet tristique sapien. Nunc ultricies finibus nunc, sit amet aliquam tellus porttitor id. Nulla egestas ac magna id rutrum. Aliquam erat volutpat. Duis venenatis, ipsum eget dictum tempor, magna lectus consectetur magna, eu ornare orci dui sed velit. Sed id augue quis magna dapibus gravida a et tellus.</p><blockquote className="kg-blockquote-alt">Sit amet consectetur erat sollicitudin eu. Donec mattis nisi ut pulvinar iaculis. </blockquote><p>Quisque vulputate ultricies est, eget sagittis arcu pharetra convallis. Morbi dictum venenatis ipsum, sed fermentum tortor pharetra ut. Nulla facilisi. Sed lobortis, lectus tristique convallis hendrerit, est lorem luctus dolor, eu lobortis lectus augue eu velit. Pellentesque fermentum nunc est, in semper elit varius at. Phasellus vel dui et ligula interdum aliquet. Pellentesque rutrum dapibus ligula ac pharetra. In ut tempus sapien. Duis pharetra consequat egestas. </p><p>Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sed velit arcu. Suspendisse rhoncus arcu eget lorem pretium convallis eget vitae nibh. Nullam vehicula egestas est, non fringilla elit consectetur non. Suspendisse in euismod diam. Nullam fringilla odio vitae elit mollis semper. Mauris ultrices hendrerit ipsum, at gravida est ornare sed. Nunc egestas nibh id lobortis facilisis. Donec urna nibh, dignissim sit amet velit nec, elementum ultrices mauris. Vivamus fringilla dui eu orci tincidunt porttitor. Nunc sagittis augue et dui ornare, vitae aliquet metus pretium. Fusce eu ipsum ligula.</p><h4 id="nullam-eleifend-purus-tellus">Nullam eleifend purus tellus</h4><p>Vel lobortis mauris tempus sit amet. Aliquam erat volutpat. Duis et ipsum pulvinar, iaculis nibh in, maximus lectus. Phasellus nec dictum tellus, ut tincidunt lectus. Quisque efficitur, leo eget tempor pretium, leo nisi accumsan arcu, pellentesque pharetra nulla ipsum sed erat. In commodo, nunc nec tempus volutpat, nisi lacus euismod diam, ac molestie turpis nunc vitae erat. Donec blandit commodo risus, eget pellentesque diam tincidunt eget. Suspendisse imperdiet efficitur mauris et ornare. Pellentesque tincidunt nunc dui, sed dictum mi mattis ac. Donec ac libero condimentum, bibendum ipsum non, elementum velit. Quisque egestas ipsum vel dignissim dignissim.</p><div className="kg-card kg-header-card kg-width-full kg-size-small kg-style-dark" style="" data-kg-background-image=""><h2 className="kg-header-card-header" id="i-have-my-own-definition-of-minimalism-which-is-that-which-is-created-with-a-minimum-of-means">I have my own definition of minimalism, which is that which is created with a minimum of means</h2></div><p>Quisque blandit et erat id lobortis. Sed eu venenatis erat. Nunc non libero in nunc aliquet varius. Suspendisse vitae congue dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla pharetra ligula in dictum porttitor. Duis sed congue lectus. Morbi sed ipsum egestas nulla gravida sodales. Aenean lacus quam, malesuada placerat viverra ut, lacinia vel enim. Donec non tortor nec sapien tincidunt imperdiet.</p><figure className="kg-card kg-bookmark-card"><a className="kg-bookmark-container" href="https://unsplash.com/photos/ljurPRAnLAQ"><div className="kg-bookmark-content"><div className="kg-bookmark-title">Photo by Brando Makes Branding on Unsplash</div><div className="kg-bookmark-description">iPhone (www.brando.ltd) . Download this photo by Brando Makes Branding on Unsplash</div><div className="kg-bookmark-metadata"><img className="kg-bookmark-icon" src="https://unsplash.com/apple-touch-icon.png" alt=""><span className="kg-bookmark-author">Unsplash</span><span className="kg-bookmark-publisher">Brando Makes Branding</span></div></div><div className="kg-bookmark-thumbnail"><img src="https://images.unsplash.com/photo-1559651451-4203db8d2776?ixlib=rb-1.2.1&amp;q=60&amp;fm=jpg&amp;crop=faces%2Cedges&amp;cs=tinysrgb&amp;w=1200&amp;fit=crop&amp;auto=format&amp;h=630&amp;mark-w=64&amp;mark-align=top%2Cleft&amp;mark-pad=50&amp;blend-mode=normal&amp;blend-alpha=10&amp;blend-w=1&amp;mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&amp;blend=000000" alt=""></div></a></figure><p>Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sed velit arcu. Suspendisse rhoncus arcu eget lorem pretium convallis eget vitae nibh. Nullam vehicula egestas est, non fringilla elit consectetur non. Suspendisse in euismod diam. Nullam fringilla odio vitae elit mollis semper. Mauris ultrices hendrerit ipsum, at gravida est ornare sed. Nunc egestas nibh id lobortis facilisis. Donec urna nibh, dignissim sit amet velit nec, elementum ultrices mauris. Vivamus fringilla dui eu orci tincidunt porttitor. Nunc sagittis augue et dui ornare, vitae aliquet metus pretium. Fusce eu ipsum ligula.</p><p>Nullam aliquet consequat sollicitudin. Maecenas elementum finibus velit non vestibulum. Aliquam semper venenatis tellus sit amet volutpat. Suspendisse commodo nibh sit amet dapibus pharetra. Phasellus pulvinar elementum imperdiet. Donec placerat id dui vitae congue. Praesent risus nisl, ullamcorper nec mattis non, congue ac enim. Aliquam erat volutpat. Nulla fringilla urna quis dui sodales, vitae tristique felis viverra. Donec pretium tellus lorem, efficitur porta ex ullamcorper id.`}
          </p>
          <div className="post-share-section">
            <small>Share this post</small>
            <div className="post-share-wrap">
              <a
                href="https://twitter.com/intent/tweet?text=New%20technology%20is%20not%20good%20or%20evil%20in%20and%20of%20itself&amp;url=/new-technology-is-not-good-or-evil-in-and-of-itself/"
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
                href="https://www.facebook.com/sharer/sharer.php?u=/new-technology-is-not-good-or-evil-in-and-of-itself/"
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
                href="https://www.linkedin.com/shareArticle?mini=true&amp;title=New%20technology%20is%20not%20good%20or%20evil%20in%20and%20of%20itself&amp;url=/new-technology-is-not-good-or-evil-in-and-of-itself/"
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
              value="/new-technology-is-not-good-or-evil-in-and-of-itself/"
              id="copy-link"
              aria-label="Copy link input"
            />
          </div>
        </div>
      </article>
      ;
    </>
  );
};

export default Article;
