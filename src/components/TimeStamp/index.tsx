import { TTimeStamp } from './types';
import styles from './styles.module.scss';
import SapiensLogo from '../../assets/sapiens.webp';
import TPLogo from '../../assets/talentpace.png';
const TimeStamp = ({ title, description, duration }: TTimeStamp) => {
  return (
    <div className={`row ${styles.timeStampRow}`}>
      <div className={`col-md-4 ${styles.duration}`}>{duration}</div>
      <div className="col-md-8">
        <div className={styles.timeStampTitle}>
          {title.includes('Developer') && <img src={SapiensLogo} />}
          {title.includes('Software Engineer') && <img src={TPLogo} />}
          <p>{title}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimeStamp;
