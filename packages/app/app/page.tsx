import styles from './page.module.scss';
import { NxWelcome } from "@core/nx-welcome";

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <NxWelcome title='Hello I am from Core'/>
      </div>
    </div>
  );
}
