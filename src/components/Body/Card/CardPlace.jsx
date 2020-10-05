import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Card.css";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import Popup from "reactjs-popup";
import LazyLoad from "react-lazyload";
import "./Pop.css";
import firebase from "../../../firebase/firebase.js";
import HeartCheckbox from "react-heart-checkbox";
const CardPlace = ({ item }) => {
  const [image, setImage] = useState([item.image]);
  const [price, setPrice] = useState([item.price]);
  const [amount, setAmount] = useState([item.amount]);
  const [name, setName] = useState([item.name]);
  const [promotion, setPromotion] = useState([item.promotion]);
  const [checked, setChecked] = useState(false);
  const onClick = () => {
    setChecked(!checked);
  };

  return (
    <Card className="body__rightcard">
      <div className="body__rightCardplace">
        <Card.Img variant="top" src={image} className="body__cardImage" />
        <HeartCheckbox checked={checked} onClick={onClick} />
      </div>
      <Card.Body>
        <Card.Title className="body__cardTitle">{name}</Card.Title>
        <Card.Text className="body__cardAmount">
          {" "}
          <CardGiftcardIcon />
          &nbsp;Số lượng ưu đãi: {amount}
        </Card.Text>
        <div>
          {" "}
          <Card.Text className="body__cardPrice1">Giá sản phẩm</Card.Text>
          <Card.Text className="body__cardPrice2">{price} đ</Card.Text>
          <Card.Text className="body__cardPromotion">
            <del>1.450.000đ</del> -{promotion}%{" "}
          </Card.Text>
        </div>
      </Card.Body>
      <Popup modal trigger={<button className="body__popup">Chi tiết</button>}>
        {(close) => <Pop close={close} />}
      </Popup>

      <Card.Footer className="body__cardPrmotionCombo">
        <small className="text-muted">Combo -15%: 7xx.xxx đ</small>
      </Card.Footer>
    </Card>
  );
};

const Pop = (close) => {
  const [pop, setPop] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("cardproductplace").get();
      setPop(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);
  console.log(pop);
  return (
    <div className="modal">
      <a className="close" onClick={close}>
        &times;
      </a>
      {pop.map((item) => (
        <ViewPop item={item} />
      ))}
    </div>
  );
};

const ViewPop = ({ item }) => {
  const [image, setImage] = useState([item.image]);
  const [price, setPrice] = useState([item.price]);
  return <div className="header"> {image} </div>;
};
export default CardPlace;
