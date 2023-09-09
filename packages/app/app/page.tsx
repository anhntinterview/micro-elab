// https://themenectar.com/salient/blog-magazine/
// /

import Articles from '@app/components/articles';
import Hero from '@app/components/hero';
import Pagination from '@app/components/pagination';
import { MasterLayoutProvider } from './core/layout/layout.provider';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <MasterLayoutProvider>
      <Hero />
      <Articles />
      <Pagination />
    </MasterLayoutProvider>
  );
}
