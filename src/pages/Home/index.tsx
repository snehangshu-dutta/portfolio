import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../components/Navbar/data';
import styles from './styles.module.scss';

const Home = () => {
  return (
    <div className={`align-items-center ${styles.heroBannner}`}>
      <div className={`${styles.h100}`}>
        <div className={`row align-items-center ${styles.h100}`}>
          <div className="col-md-6 d-flex justify-content-end">
            <div className={styles.imageWrapper}></div>
          </div>
          <div className="col-md-4">
            <div className="textWrapper">
              <p className={styles.title}>Hello!</p>
              <p className={styles.subTitle}>A bit about me</p>
              <p className={styles.description}>
                Over 5+ years of work experience in building large-scale web
                frontend in leading companies in the space of Retail and Cloud.
              </p>
              <div className={`d-flex ${styles.linksWrapper}`}>
                {NAV_LINKS.map((link) => (
                  <Link
                    className={styles.linkItem}
                    to={link.path}
                    key={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
