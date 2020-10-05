import React, { useState, useEffect } from "react";
import { Grid, Image } from "semantic-ui-react";
import "./Body.css";
import SearchIcon from "@material-ui/icons/Search";
import { Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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
function BodyLeft() {
  const classes = useStyles();
  const [day, setDay] = useState("");
  const [price, setPrice] = useState("");

  const handleChange = (event) => {
    setDay(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleChangeService = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [state, setState] = useState({
    all: false,
    decorate: false,
    skin: false,
    film: false,
    ritual: false,
  });
  const { all, decorate, skin, film, ritual } = state;

  return (
    <Grid.Column width={4} className="body">
      <div className="body__left">
        <div className="body__search">
          <input
            className="body__leftInput"
            type="text"
            placeholder="Tìm kiếm"
          />
          <SearchIcon className="body__leftSearch" />
        </div>
        <div className="body__calendar">
          <span className="body_leftTitle">Thời gian tổ chức</span>
          <div className="body__time">
            <FormControl className={classes.formControl} className="body__time">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={day}
                onChange={handleChange}
              >
                <MenuItem value={10}>Sáng</MenuItem>
                <MenuItem value={20}>Trưa</MenuItem>
                <MenuItem value={30}>Tối</MenuItem>
              </Select>
            </FormControl>
            <form
              className="body__time"
              className={classes.container}
              noValidate
            >
              <TextField
                id="date"
                type="date"
                defaultValue="2020-10-29"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </div>
        </div>
        <div className="body__filterPrice">
          <span className="body_leftTitle">Lọc theo khoảng giá</span>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Giá</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={price}
              onChange={handleChangePrice}
            >
              <MenuItem value={1}>100.000 - 300.000</MenuItem>
              <MenuItem value={2}>300.000 - 500.000</MenuItem>
              <MenuItem value={3}>500.000 - 1.000.000</MenuItem>
              <MenuItem value={4}>Trên 1.000.000</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="body__service">
          <span className="body_leftTitle">Loại hình dịch vụ</span>
          <FormControl
            required
            component="fieldset"
            className={classes.formControl}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={all}
                    onChange={handleChangeService}
                    name="all"
                  />
                }
                label="Tất Cả"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={decorate}
                    onChange={handleChangeService}
                    name="decorate"
                  />
                }
                label="Trang Trí"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={skin}
                    onChange={handleChangeService}
                    name="skin"
                  />
                }
                label="Trang Phục"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={film}
                    onChange={handleChangeService}
                    name="film"
                  />
                }
                label="Quay Chụp "
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={ritual}
                    onChange={handleChangeService}
                    name="ritual"
                  />
                }
                label="Nghi Lễ Cưới"
              />
              <a href="#" className="body__servicePlus">
                +Xem Thêm
              </a>
            </FormGroup>
          </FormControl>
        </div>
        <div className="body__trademark">
          <span className="body_leftTitle">Thương Hiệu</span>
        </div>
      </div>
    </Grid.Column>
  );
}

export default BodyLeft;
