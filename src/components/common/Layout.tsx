import React from "react";
import { Outlet } from "react-router-dom";
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';

export const Layout = () => {
  return (
    <>
      <PageHeader />
      <Outlet />
      <PageFooter />
    </>
  );
};

export default Layout;