import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route} from "react-router-dom";

import AgoraNavBar from "./features/navigation/AgoraNavBar";
import AddProduct from "./features/products/AddProduct";
import ProductsTable from "./features/products/ProductsTable";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <AgoraNavBar />
        </div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <ProductsTable />
            </div>
          )}
        />

        <Route
          exact
          path="/newProduct"
          render={() => (
            <div>
              <AddProduct/>
            </div>
          )}
        />
        <Route exact path="/Operations" render={() => <AddProduct />} />
      </div>
    </Router>
  );
}

export default App;
