import React, { useRef } from "react";
import Slider from "react-slick";

import data from "../data.json";
import ItemMenu from "./items_menu";
import "../styles/menu.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Menu = () => {
  const sliderMenu = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false
  };

  const createMenuItem = () => {
    return data.map(menu => {
      return (
        <div className="title_menu">
          <h1>{menu.title}</h1>
          {menu.items.map(titles => {
            return (
              <div>
                <ItemMenu
                  titleItem={titles.title}
                  description={titles.description}
                  price={titles.precio}
                ></ItemMenu>
              </div>
            );
          })}
          <div className="title_menu">
            <h1>{menu.subtitle}</h1>
          </div>
          {menu.list.map(resp => {
            return (
              <div>
                <ItemMenu
                  titleItem={resp.title}
                  description={resp.description}
                  price={resp.precio}
                ></ItemMenu>
              </div>
            );
          })}
          <div className="title_menu">
            <h1>{menu.subtitle2}</h1>
          </div>
          {menu.items2.map(response => {
            return (
              <div>
                <ItemMenu
                  titleItem={response.title}
                  description={response.description}
                  price={response.precio}
                ></ItemMenu>
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="container_menu">
      <div className="logo_chef">
        <img src={require("../images/icon-chef.png")} alt="" />
      </div>
      <Slider ref={sliderMenu} {...settings}>
        {createMenuItem()}
      </Slider>
    </div>
  );
};

export default Menu;
