import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import Team from '../pages/Team';
import Contact from '../pages/Contact';
import ECommerce from '../pages/projects/ECommerce';
import Healthcare from '../pages/projects/Healthcare';
import Finance from '../pages/projects/Finance';
import SmartHome from '../pages/projects/SmartHome';
import AiContent from '../pages/projects/AiContent';
import SupplyChain from '../pages/projects/SupplyChain';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/services', element: <Services /> },
      { path: '/portfolio', element: <Portfolio /> },
      // { path: '/team', element: <Team /> },
      { path: '/contact', element: <Contact /> },
      { path: '/projects/ecommerce', element: <ECommerce /> },
      { path: '/projects/healthcare', element: <Healthcare /> },
      { path: '/projects/finance', element: <Finance /> },
      { path: '/projects/smarthome', element: <SmartHome /> },
      { path: '/projects/ai-content', element: <AiContent /> },
      { path: '/projects/supply-chain', element: <SupplyChain /> },
    ],
  },
]);

export default router;
