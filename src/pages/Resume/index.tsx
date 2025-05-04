import PageTitle from '../../components/PageTitle/index';
import TimeLine from '../../components/TimeLine';

const Resume = () => {
  return (
    <div className="container-lg">
      <div className="row">
        <PageTitle pageTitle="Resume" />
      </div>
      <TimeLine />
    </div>
  );
};

export default Resume;
