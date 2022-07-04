import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />

              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2022
            <Link to="/">Cryptify Inc.</Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link
              to="/"
              style={{ color: "white", textDecorationLine: "underline" }}
            >
              Home
            </Link>

            <Link
              to="/news"
              style={{ color: "white", textDecorationLine: "underline" }}
            >
              News
            </Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
