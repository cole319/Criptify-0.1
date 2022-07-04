import React, { useState, useEffect } from "react";
import { Button, Typography, Avatar, Menu } from "antd";
import { Link } from "react-router-dom";
import { BsCoin } from "react-icons/bs";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  MenuOutlined,
  FundOutlined,
} from "@ant-design/icons";

// import icon from "../images/crypto.png";
// import { sizeHeight } from "@mui/system";
// import { fontSize } from "@mui/system";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Link to="/">
          <BsCoin style={{ color: "white" }} size={30} />
        </Link>

        <Typography.Title level={2} className="logo">
          <Link to="/" style={{ color: "white" }}>
            Cryptify
          </Link>
        </Typography.Title>

        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />} style={{ fontSize: "1rem" }}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />} style={{ fontSize: "1rem" }}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        {/* <Menu.Item icon={<MoneyCollectOutlined />} style={{ fontSize: "1rem" }}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item> */}
        <Menu.Item icon={<BulbOutlined />} style={{ fontSize: "1rem" }}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
