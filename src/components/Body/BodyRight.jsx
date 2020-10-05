import React, { useEffect, useState } from "react";
import { Grid, Image } from "semantic-ui-react";
import "./Body.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import CardService from "./Card/CardService";
import CardPlace from "./Card/CardPlace";
import firebase from "../../firebase/firebase.js";
import { CardDeck } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function BodyRight() {
  const handleChange = (event) => {
    setProduct(event.target.value);
  };
  const classes = useStyles();
  const [product, setProduct] = useState("");
  ///////////////////////////////////////////////////
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("cardproductplace").get();
      setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const [itemsservice, setItemsservice] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("cardproductservice").get();
      setItemsservice(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);
  const [filter, setFilter] = useState([]); //data
  const [optionMenu, setOptionMenu] = useState([]);
  const [search, setSearch] = useState([]);
  const [filterdOptionMenu, setFilteredOptionMenu] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("cardproductplace").get();
      setFilter(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);
  console.log(filter);
  useEffect(() => {
    setFilteredOptionMenu(
      optionMenu
        .filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((items) => items.name)
    );
  }, [search, optionMenu]);
  console.log(filterdOptionMenu);
  return (
    <>
      <Grid.Column width={12} className="body">
        <div className="body__right">
          <Tabs>
            <TabList className="body__rightMenu">
              <Tab className="body__rightItem">Địa điểm</Tab>
              <Tab className="body__rightItem">Dịch vụ</Tab>
              <div className="body__rightView">
                <span className="body__rightFil">Hiển thị theo: </span>
                <FormControl
                  className={classes.formControl}
                  className="body__rightSelect"
                >
                  <InputLabel id="demo-simple-select-label">
                    Sản Phẩm
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={product}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Makup Super Star</MenuItem>
                    <MenuItem value={2}>Super Mario</MenuItem>
                    <MenuItem value={3}>Super Saya</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </TabList>
            <TabPanel>
              <div className="body__rightTitle">
                <span className="body__rightTitleSpan">
                  150 Tiệc cưới/Báo hỷ tại{" "}
                  <a href="#" className="body__rightTitleA">
                    &nbsp;Hồ Chí Minh
                  </a>
                  <input
                    className="body__rightTitleA"
                    type="text"
                    placeholder="Tìm kiếm"
                    onChange={(e) => setSearch(e.target)}
                  />
                </span>
              </div>
              <CardDeck>
                {items.map((item, index) => (
                  <CardPlace item={item} key={index} />
                ))}
              </CardDeck>
            </TabPanel>
            <TabPanel>
              <div className="body__rightTitle">
                <span className="body__rightTitleSpan">
                  120 Tiệc cưới/Báo hỷ tại{" "}
                  <a href="#" className="body__rightTitleA">
                    &nbsp;Đà Nẵng
                  </a>
                </span>
              </div>
              <CardDeck>
                {itemsservice.map((items, index) => (
                  <CardService items={items} key={index} />
                ))}
              </CardDeck>
              <CardService />
            </TabPanel>
          </Tabs>
        </div>
      </Grid.Column>
    </>
  );
}

export default BodyRight;
