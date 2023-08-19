import React, { type ReactElement, type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props): ReactElement => {
  return (
    <>
      <Navbar />
      <main className="min-h-screenNav w-full bg-gray-50">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
