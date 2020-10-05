import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import ListAltIcon from "@material-ui/icons/ListAlt";
import RemoveFromQueueIcon from "@material-ui/icons/RemoveFromQueue";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { Dropdown } from "react-bootstrap";
import "./Header.css";
import { DropdownDivider } from "semantic-ui-react";
import firebase from "../../firebase/firebase.js";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={require("../../image/logo.jpg")} />
      </Link>
      <div className="header__search">
        <SearchIcon className="header__searchIcon" />
        <input
          className="header__searchInput"
          type="text"
          placeholder="Tìm kiếm"
        />
      </div>
      <div className="right">
        <div className="header__price">
          <LocalAtmIcon />
          <h5>Báo giá nhanh</h5>
        </div>
        <div className="header__partner">
          <GroupAddIcon />
          <h5>Trở thành đối tác</h5>
        </div>
        <div className="header__language">
          <img
            className="header__languageLogo"
            src={require("../../image/covn.png")}
          />
          <ArrowDropDownIcon />
        </div>
        <div className="header__cart">
          <AddShoppingCartOutlinedIcon />
        </div>

        <Dropdown className="header__profile">
          <Dropdown.Toggle>
            <AccountCircleIcon />
            <ArrowDropDownIcon />
          </Dropdown.Toggle>

          <Dropdown.Menu className="header__menudropdown">
            <Dropdown.Item className="header__dropdown" href="#">
              <ListAltIcon class="header__profileicon" />
              <span>Danh sách báo giá</span>
            </Dropdown.Item>
            <Dropdown.Item className="header__dropdown" href="#">
              <RemoveFromQueueIcon class="header__profileicon" />
              <span> Quản lý đơn hàng</span>
            </Dropdown.Item>
            <Dropdown.Item className="header__dropdown" href="#">
              <CreditCardIcon class="header__profileicon" />
              <span>Thông tin thanh toán</span>
            </Dropdown.Item>
            <Dropdown.Item className="header__dropdown" href="#">
              <StarBorderIcon class="header__profileicon" />
              <span> Nhận xét sản phẩm</span>
            </Dropdown.Item>
            <Dropdown.Item className="header__dropdown" href="#">
              <VisibilityOutlinedIcon class="header__profileicon" />
              <span> Sản phẩm đã xem</span>
            </Dropdown.Item>
            <Dropdown.Item className="header__dropdown" href="#">
              <FavoriteBorderOutlinedIcon class="header__profileicon" />
              <span> Danh sách yêu thích</span>
            </Dropdown.Item>
            <Dropdown.Item className="header__dropdown" href="#">
              <QuestionAnswerOutlinedIcon class="header__profileicon" />
              <span> Hỏi đáp</span>
            </Dropdown.Item>
            <hr></hr>
            <DropdownDivider />
            <Dropdown.Item className="header__dropdown" href="#">
              <PermIdentityOutlinedIcon class="header__profileicon " />
              <span> Thông tin cá nhân</span>
            </Dropdown.Item>
            <DropdownDivider />
            <hr></hr>
            <Dropdown.Item className="header__dropdown exit" href="#">
              <ExitToAppOutlinedIcon className="header__profileicon" />
              <span> Đăng xuất</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
