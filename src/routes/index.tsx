import { useRoutes } from 'react-router-dom';

import { Landing } from '~/features/landing';

export const AppRoutes = () => {
  const routes = [{ path: '/', element: <Landing /> }, {}];

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
