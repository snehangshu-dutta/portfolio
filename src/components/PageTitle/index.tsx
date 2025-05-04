import { TPageTitleProps } from './type';
import styles from './styles.module.scss';

const PageTitle = ({ pageTitle }: TPageTitleProps) => {
  return <p className={styles.pageTitle}>{pageTitle}</p>;
};

export default PageTitle;
