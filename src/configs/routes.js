import {Dashboard, Login, Otp, Register} from "../pages/index.js";

export const beforeAuthRoutes = {
  login: '/auth/login',
  Otp: '/auth/otp',
  register: '/auth/register',
};

export const afterAuthRoutes = {
  dashboard: '/dashboard',
  profile: '/profile',
};


export const routesMapping = [
  {
    route: afterAuthRoutes.dashboard,
    Element: <Dashboard />,
  },

  {
    route: beforeAuthRoutes.login,
    Element: <Login />,
  },

  {
    route: beforeAuthRoutes.Otp,
    Element: <Otp />,
  },

  {
    route: beforeAuthRoutes.register,
    Element: <Register />,
  },
];

const alwaysShowRoutes = ['/', '/test'];

const beforeAuth = [beforeAuthRoutes.login, beforeAuthRoutes.register, beforeAuthRoutes.Otp];

export const filterRoutesByAuthStep = (isAuth) => {
  return routesMapping.filter((item) => {
    if (!isAuth) {
      if (beforeAuth.includes(item.route) || alwaysShowRoutes.includes(item.route)) {
        return item;
      }
    } else if (!beforeAuth.includes(item.route) || alwaysShowRoutes.includes(item.route)) {
      return item;
    }
  });
};
