// https://themenectar.com/salient/blog-magazine/
// /

import Articles from '@app/components/articles';
import Hero from '@app/components/hero';
import Pagination from '@app/components/pagination';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <>
      <Hero />
      <Articles />
      <Pagination />
    </>
  );
}
