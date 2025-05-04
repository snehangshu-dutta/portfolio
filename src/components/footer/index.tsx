import styles from './styles.module.scss';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className={`${styles.footerWrapper}`}>
      <div className="row">
        <hr />
        <div className={`col-md-6 col-lg-3 ${styles.footerElement}`}>
          <p className="mb-2">Phone</p>
          <a href="tel:8293483981">8293483981</a>
        </div>
        <div className={`col-md-6 col-lg-3 ${styles.footerElement}`}>
          <p className="mb-2">Email</p>
          <a href="mailto:jobs.snehangshu@gmail.com">
            jobs.snehangshu@gmail.com
          </a>
        </div>
        <div className={`col-md-6 col-lg-3 ${styles.footerElement}`}>
          <p className="mb-2">Follow Me</p>
          <a
            href="https://www.linkedin.com/in/snehangshudutta/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </div>
        <div className={`col-md-6 col-lg-3 ${styles.footerElement}`}>
          <span>
            © {new Date().getFullYear().toString()} By Snehangshu Dutta.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
