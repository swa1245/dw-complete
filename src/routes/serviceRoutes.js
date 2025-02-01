// Helper function to convert service title to URL-friendly path
export const getServicePath = (title) => {
  const paths = {
    'IT Infrastructure': '/services/it-infrastructure',
    'Web Development': '/services/web-development',
    'App Development': '/services/MobileAppDevelopment',
    'ERP Systems': '/services/erp-systems',
    'Software Development': '/services/software-development',
    'AI & Machine Learning': '/services/ai-machine-learning',
    'Software Maintenance & Support': '/services/software-maintenance',
    'Resource Outsourcing': '/services/resource-outsourcing',
    'IT Consulting & Services': '/services/it-consulting'
  };
  return paths[title] || '/services';
};

// Service routes configuration
export const serviceRoutes = [
  {
    path: '/services/it-infrastructure',
    component: 'ItInfrac'
  },
  {
    path: '/services/web-development',
    component: 'WebDevelopment'
  },
  {
    path: '/services/MobileAppDevelopment',
    component: 'MobileAppDevelopment'
  },
  {
    path: '/services/erp-systems',
    component: 'ERPSystems'
  },
  {
    path: '/services/software-development',
    component: 'SoftwareDevelopment'
  },
  {
    path: '/services/ai-machine-learning',
    component: 'AIMachineLearning'
  },
  {
    path: '/services/software-maintenance',
    component: 'SoftwareMaintenance'
  },
  {
    path: '/services/resource-outsourcing',
    component: 'ResourceOutsourcing'
  },
  {
    path: '/services/it-consulting',
    component: 'ITConsulting'
  }
];
