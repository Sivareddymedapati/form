import React from "react";
import DataListContextProvider from "./Context/DataListContext";
import DataList from "./Components/DataList";
import DataForm from "./Components/DataForm";
import './App.css';
import Header from "./Components/Header";


const App = () => {
  return (
    <DataListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <DataForm />
            <DataList />
          </div>
        </div>
      </div>
    </DataListContextProvider>
  );
};

export default App;
