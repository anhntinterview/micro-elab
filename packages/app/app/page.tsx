// https://basho.fueko.net/
import Hero from '@app/app/components/hero';
import Pagination from '@app/app/components/pagination';
import { MasterLayoutProvider } from './core/layout/layout.provider';
import { Metadata } from 'next';
import Post from './components/posts';

export const metadata: Metadata = {
  title: "Freedom Walking Blog",
  description:
    "Robert's blog.",
}

export default async function Index() {
  return (
    <MasterLayoutProvider>
      <Hero />
      <Post />
      <Pagination />
    </MasterLayoutProvider>
  );
}

