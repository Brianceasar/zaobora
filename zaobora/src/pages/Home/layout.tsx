import React from "react";
import MainLayout from "../../layouts/MainLayout";

interface Props {
  children: React.ReactNode;
}

const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
};

export default HomeLayout;
