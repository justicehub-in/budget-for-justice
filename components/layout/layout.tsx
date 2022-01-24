import Nav from '../_shared/Nav';
import Footer from '../_shared/Footer';
import Skiplink from 'components/_shared/Skiplink';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Skiplink />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
