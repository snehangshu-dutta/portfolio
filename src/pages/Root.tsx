import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/index';
import { NAME, ROLE } from '../components/Navbar/data';
import Footer from '../components/footer';
import ThemeToggle from '../components/ThemeToggle';

const Root = () => {
  return (
    <>
      <ThemeToggle />
      <Navbar name={NAME} role={ROLE} />
      <div className="container-fluid">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Root;
