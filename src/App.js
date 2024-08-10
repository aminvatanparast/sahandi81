import React , {useEffect, useRef} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {isAuthenticatedSelector} from "./store/user/user.selector.js";
import {filterRoutesByAuthStep} from "./configs/routes.js";
import {initFlowbite} from "flowbite";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  const scrollRef = useRef(null);
  const { pathname } = useLocation();
  const isAuth = useSelector(isAuthenticatedSelector);
  const routes = filterRoutesByAuthStep(isAuth);

  useEffect(() => {
    initFlowbite()
  } , [])

  useEffect(() => {
    scrollRef.current?.scrollIntoView?.({ behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      <div ref={scrollRef} />

      <Routes>
        {routes.map((item) => (
          <Route key={item.route} path={item.route} element={item.Element} />
        ))}
        <Route path={"*"} element={<NotFound/>} />
      </Routes>
    </>
  );
};

export default App;
