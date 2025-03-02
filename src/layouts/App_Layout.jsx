import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen px-30 container">
        <Header /> {/* Header  */}
        <Outlet /> {/* body  */}
      </main>

      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with 💓 by Shubham Kumar Singh
      </div>
    </div>
  );
};

export default AppLayout;
