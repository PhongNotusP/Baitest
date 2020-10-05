import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./Card.css";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
const CardService = ({ items }) => {
  console.log(items);
  // const [image, setImage] = useState([items.image]);
  // const [price, setPrice] = useState([items.price]);
  // const [amount, setAmount] = useState([items.amount]);
  // const [name, setName] = useState([items.name]);
  // const [promotion, setPromotion] = useState([items.promotion]);

  return (
    <Card className="body__rightcard">
      <Card.Img
        variant="top"
        /*src={image}*/ className="body__rightCardplace"
      />
      <Card.Body>
        <Card.Title className="body__cardTitle">{}</Card.Title>
        <Card.Text className="body__cardAmount">
          {" "}
          <CardGiftcardIcon />
          &nbsp;Số lượng ưu đãi: {}
        </Card.Text>
        <div>
          {" "}
          <Card.Text className="body__cardPrice1">Giá sản phẩm</Card.Text>
          <Card.Text className="body__cardPrice2">{} đ</Card.Text>
          <Card.Text className="body__cardPromotion">
            <del>1.450.000đ</del> -{}%{" "}
          </Card.Text>
        </div>
      </Card.Body>
      <Card.Footer className="body__cardPrmotionCombo">
        <small className="text-muted">Combo -15%: 7xx.xxx đ</small>
      </Card.Footer>
    </Card>
  );
};

export default CardService;
