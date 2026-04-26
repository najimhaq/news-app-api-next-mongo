import Header from '../components/header/page';
import Navbar from '../components/navbar/Navbar';
import BreakingNews from '../components/news/BreakingNews';

const MainLayout = ({ children }) => {
  return (
    <div className='container mx-auto'>
      <Header />
      <BreakingNews />
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
