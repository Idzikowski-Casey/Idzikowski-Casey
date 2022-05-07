import React from "react";
import { HomeButton } from "../wurdle/header";
import { AppContextProvider, AppPages } from "../xdd";

function App() {
  return (
    <div>
      <AppContextProvider>
        <div className="home-btn-con">
          <HomeButton />
        </div>
        <AppPages />
      </AppContextProvider>
    </div>
  );
}

export default App;
