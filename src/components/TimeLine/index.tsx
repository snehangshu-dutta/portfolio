import TimeStamp from '../TimeStamp/index';
import { TIME_LINES } from './data';
import { isTTimeStampArray } from './utils';
import styles from './styles.module.scss';

const TimeLine = () => {
  return (
    <div className={`${styles.timeLineWrapper}`}>
      {TIME_LINES.map(({ phase, details }) => (
        <div className={`row ${styles.timeLineRow}`}>
          <div className="col-md-3 col-lg-6">
            <p className={styles.phaseTitle}>{phase}</p>
          </div>
          <div className="col-md-9 col-lg-6">
            {isTTimeStampArray(details) ? (
              <>
                {details.map(({ title, duration, description }) => (
                  <TimeStamp
                    key={title}
                    title={title}
                    duration={duration}
                    description={description}
                  />
                ))}
              </>
            ) : (
              <div className="row">
                <div className="com-md-12">
                  <ul>
                    {details.map((detail) => (
                      <li>
                        <b>{detail.domain} :</b>
                        <span>{detail.languange}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
