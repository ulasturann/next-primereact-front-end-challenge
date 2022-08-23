import type { NextPage } from 'next';
import Content from '../components/Dashboard';
import Sidebar from '../components/SidebarComponent';
import Toolbar from '../components/Toolbar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Head from 'next/head';
const Home: NextPage = () => {
  return (
    <div
      className="min-h-screen flex relative lg:static surface-50 filter"
      style={{ fontFamily: 'Inter' }}
    >
      <Sidebar />
      <div className="min-h-screen flex flex-column relative flex-auto">
        <Toolbar />
        <Content />
      </div>
    </div>
  );
};

export default Home;
