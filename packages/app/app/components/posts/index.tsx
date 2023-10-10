'use client';

import * as React from 'react';
import CardLayout2 from '../card/CardLayout2';
import CardLayout1 from '../card/CardLayout1';
import { usePostContext } from '../../template/context/post.provider';
import Loading from '../loading';

interface IPostsProps {}

const Posts: React.FunctionComponent<IPostsProps> = (props) => {
  const { list, isFetched } = usePostContext();

  return (
    <div className="loop-section global-padding">
      <div className="loop-subtitle">
        <small className="loop-subtitle-title global-title">
          See what we’ve <br />
          <span>written lately</span>
        </small>
        <div className="global-authors option-1-2-3">
          <div>
            {/* <CardLayout2 /> */}
          </div>
          <small>Meet our author</small>
        </div>
      </div>
      <div className="loop-wrap">
      {isFetched && list ? (
          list.map((item) => {
            return (
              <div className="global-authors option-1-2-3">
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

/*
import * as React from 'react';
import CardLayout2 from '../card/CardLayout2';
import CardLayout1 from '../card/CardLayout1';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Post } from '@app/app/template/entity/post.entity';
import { CustomerBodyDataValidation } from '@app/app/template/entity/customer.entity';
import { ROLE_NAME } from '@app/app/template/entity/role.entity';
import { PostBodyDataValidationType } from '@app/app/template/resource/post/type';

/*
const FeaturedPosts: React.FunctionComponent = () => {
  const newCustomer: CustomerBodyDataValidation = {
    username: 'vonguyengiap',
    first_name: 'Võ',
    last_name: 'Nguyên Giáp',
    phone_number: '+84333338333',
    email: 'vonguyengiap@gmail.com',
    password: '221089abcdE%',
    active: false,
    roles: [
      {
        name: ROLE_NAME.AUTHOR,
      },
    ],
    addresses: [
      {
        address_line1: 'An Xá',
        address_line2: 'Đại Phong Lộc, Lệ Thủy, Quảng Ninh',
        city: 'Quảng Bình',
        country: 'Đại Việt',
        phone_number: '000000011',
        postal_code: '00011',
      },
    ],
    tags: [
      {
        name: 'customer',
      },
    ],
  };
  const newPost: PostBodyDataValidationType = {
    bodyData: {
      title: 'Sign in with the Solana Name Service Powered by Auth0',
      ogImage: '',
      coverImage:
        'https://noted.lol/content/images/size/w2000/2023/09/openresume-self-hosted-noted.lol.jpg',
      excerpt:
        'OpenResume is a self-hosted web resume builder and Parser OpenResume',
      content:
        '<div><p>OpenResume is a self-hosted web resume builder and Parser OpenResume. Easily create your resume and download it as a PDF in an elegant formatted design. Just fill in the form and the app does the resume building for you. If you already have a resume, you can upload and parse the document.</p></div>',
      customerId: '88aef58b-2d8f-4981-be56-4b8d7dde1e8f',
      tags: [
        {
          name: 'post',
        },
      ],
    },
  };
  const query = useQuery({
    queryKey: ['get'],
    queryFn: () => fetch('http://localhost:3000/api/customer'),
  });
  console.log(`query: `, query);
  // const query = useQuery({
  //   queryKey: ['get'],
  //   queryFn: () => fetch('http://localhost:3000/api/nini'),
  // });
  // console.log(`query: `, query);
  const createPost2 = useMutation({
    mutationFn: (bodyData: { data: string }) =>
      fetch('http://localhost:3000/api/nini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      }),
  });
  const createPost = useMutation({
    mutationFn: (bodyData: PostBodyDataValidationType) =>
      fetch('http://localhost:3000/api/post/c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      }),
  });
  const createCustomer2 = useMutation({
    mutationFn: (bodyData: { msg: string }) =>
      fetch('http://localhost:3000/api/customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData),
      }),
  });
  const submitCustomer = async () => {
    const response = await fetch('http://localhost:3000/api/customer', {
      method: 'POST',
      body: JSON.stringify({ bodyData: newCustomer }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="loop-section global-padding">
      <button
        onClick={() =>
          createPost.mutate(newPost)
          // createPost2.mutate({ data: 'Hello POST' })
          // createCustomer2.mutate({ msg: 'Hello POST! Are you there?' })
          // submitCustomer()
        }
      >
        Add one Post
      </button>
      {data ? (
        data.map((item) => (
          <article key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.coverImage} alt="_img" />
            <p>{item.excerpt}</p>
          </article>
        ))
      ) : (
        <>Loading..</>
      )} }
      <div className="loop-subtitle">
        <button onClick={() => handleCreate()}>Create one</button>
        <small className="loop-subtitle-title global-title">
          See what we’ve <br />
          <span>written lately</span>
        </small>
        <div className="global-authors option-1-2-3">
          <div>
            <CardLayout2 />
          </div>
          <small>Meet our author</small>
          <small>Meet our authors</small>
          <small>Meet our top authors</small>
        </div>
      </div>
      <div className="loop-wrap">
        <CardLayout1 />
      </div>
    </div>
  );
};

export default FeaturedPosts;
*/
