import React, { useRef } from "react";
import Slider from "react-slick";

import ItemMenu from "./items_menu";

import "../styles/menu.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Menu = () => {
  const sliderMenu = useRef(null);
  const menuItem = [
    {
      id: 1,
      title: "ENTRADAS",
      items: [
        {
          id: 1,
          title: "TÁRTARA DE ATÚN",
          description:
            "Aleta amarilla con palmitos y aguacate a la vinagreta de balsámico y aceite de ajonjolí, 250g",
          precio: "$250.00"
        },
        {
          id: 2,
          title: "BETABELES A LAS BRASAS",
          description:
            "Con queso de cabra, pistache caramelizado, jocoque árabe, arúgula y aceite de frutas, 350g",
          precio: "$250.00"
        },
        {
          id: 3,
          title: "TUÉTANOS",
          description: "1kg",
          precio: "$250.00"
        },
        {
          id: 4,
          title: "Chichulines Pamperos",
          description: "350g",
          precio: "$250.00"
        },
        {
          id: 5,
          title: "Mollejas de Res",
          description: "150g",
          precio: "$250.00"
        },
        {
          id: 6,
          title: "CHORIZO CRIOLLO",
          description: "Tipo argentino, 3 pzas, 300g",
          precio: "$250.00"
        },
        {
          id: 7,
          title: "CHORIZO MEXICANO",
          description: "Picosito, 3 pzas, 300g",
          precio: "$250.00"
        },
        {
          id: 8,
          title: "ESPÁRRAGOS TRIGUEROS",
          description: "A la parrilla, al dente con queso parmesano 150g",
          precio: "$250.00"
        },
        {
          id: 9,
          title: "ALCACHOFA A LAS BRASAS",
          description: "Producto español, 100g",
          precio: "$250.00"
        },
        {
          id: 10,
          title: "JAMÓN IBÉRICO DE BELLOTA",
          description: "Con tomate y pimiento asado 450g",
          precio: "$250.00"
        },
        {
          id: 11,
          title: "PROVOLETA CAMINITO",
          description: "3 mitades",
          precio: "$250.00"
        },
        {
          id: 12,
          title: "REVUELTO CASA LUCIO",
          description:
            "De papas, aceite de olivo, huevo y un toque de ajo, 500g",
          precio: "$250.00"
        },
        {
          id: 13,
          title: "REVUELTO DE ESPÁRRAGOS",
          description:
            "Espárragos, aceite de olivo, huevo y un toque de ajo, 500g",
          precio: "$250.00"
        },
        {
          id: 14,
          title: "PULPO ENTERO A LAS BRASAS",
          description: "700g",
          precio: "$250.00"
        },
        {
          id: 15,
          title: "PULPO ENTERO AL PASTOR",
          description: "700g",
          precio: "$250.00"
        },
        {
          id: 16,
          title: "CECINA DE LA PATAGONIA",
          description: "300g",
          precio: "$250.00"
        },
        {
          id: 17,
          title: "GUACAMOLE",
          description: "Orden",
          precio: "$250.00"
        },
        {
          id: 18,
          title: "LENGUA DE RES A LA VINAGRETA",
          description: "250g",
          precio: "$250.00"
        },
        {
          id: 18,
          title: "PROVOLETA A LA LEÑA",
          description: "350g",
          precio: "$250.00"
        }
      ]
    },
    {
      id: 2,
      title: "CARNES DE NOVILLO A LAS BRASAS",
      items: [
        {
          id: 1,
          title: "TAPA DE BIFE CORTE ESPECIAL",
          description: "1kg, Angus",
          precio: "$850.00"
        },
        {
          id: 2,
          title: "ASADO DE TIRAL",
          description: "3 pzas, 750g, Angus",
          precio: "$850.00"
        },
        {
          id: 3,
          title: "BIFE DE LOMO",
          description: "Tierno filete de res, 500g, Angus",
          precio: "$850.00"
        },
        {
          id: 4,
          title: "Lomo en Caña",
          description: "Para tres personas. 1200g, Angus",
          precio: "$850.00"
        },
        {
          id: 5,
          title: "CORAZÓN DE CUADRIL",
          description: "Nuevo, 800g",
          precio: "$850.00"
        },
        {
          id: 6,
          title: "BIFE DE CHORIZO",
          description: "500g, *Alto choice importado",
          precio: "$850.00"
        },
        {
          id: 7,
          title: "BIFE DE CHORIZO CON HUESO “LA VACA”",
          description: "600g, *Alto choice importado",
          precio: "$850.00"
        },
        {
          id: 8,
          title: "BIFE DE CHORIZO MONARCA",
          description: "800g, *Alto choice importado",
          precio: "$850.00"
        },
        {
          id: 9,
          title: "BIFE ANCHO “NY",
          description: "Corte para conocedores, 500g, *Alto choice importado",
          precio: "$850.00"
        },
        {
          id: 10,
          title: "CHURRASCO",
          description: "500g, *Choice",
          precio: "$850.00"
        },
        {
          id: 11,
          title: "COLOSAL OJO DE BIFE",
          description: "Corte para conocedores, 1,200g, *Choice",
          precio: "$850.00"
        },
        {
          id: 12,
          title: "ARRACHERA",
          description: "500g, Angus",
          precio: "$850.00"
        },
        {
          id: 13,
          title: "ARRACHERA",
          description: "500g, Angus",
          precio: "$850.00"
        },
        {
          id: 14,
          title: "TORRETA A LA CABALLERIZA",
          description:
            "Pincho de Bife de lomo en 3 medallones con rodajas de tomate a las brasas, 650g, Angus",
          precio: "$850.00"
        },
        {
          id: 15,
          title: "COSTILLAR DE CORDERO DE NUEVA ZELANDA",
          description: "A la parrilla, tiernas y jugosas, 6 pzas, 400g",
          precio: "$850.00"
        },
        {
          id: 16,
          title: "MILANESA “BUENOS AIRES",
          description: "500g, Angus",
          precio: "$850.00"
        },
        {
          id: 17,
          title: "PECHO DE POLLO A LAS BRASAS “PECHUGA”",
          description: "Tiernas y jugosas, 400g",
          precio: "$850.00"
        },
        {
          id: 18,
          title: "CORTE ESPECIAL A LA PIEDRA",
          description: "700g, Angus",
          precio: "$850.00"
        },
        {
          id: 19,
          title: "LECHÓN (ENTERO) “CRUZ ALTA”",
          description:
            "4.5kg Se ornea a la leña a fuego lento durante 8hrs, favor de ordenar 24 hrs de anticipación",
          precio: "$850.00"
        }
      ]
    },
    {
      id: 3,
      title: "",
      subtitle1: "Pescados y Mariscos",
      items: [
        {
          id: 1,
          title: "CHURRASCO DE SALMÓN ROSADO",
          description: "450g",
          precio: "$250.00"
        },
        {
          id: 2,
          title: "BIFE DE ATÚN FRESCO A LA PARRILLA",
          description: "480g",
          precio: "$250.00"
        },
        {
          id: 3,
          title: "CAMARONES RÍO DE PLATA",
          description: "480g",
          precio: "$350.00"
        },
        {
          id: 4,
          title: "BIFE DE ATÚN AL PASTOR",
          description: "480g",
          precio: "$350.00"
        },
        {
          subItem: [
            {
              id: 1,
              title: "SOPA DE FIDEOS",
              description: "300ml",
              precio: "$250.00"
            },
            {
              id: 2,
              title: "SOPA DE LENTEJAS",
              description: "300ml",
              precio: "$250.00"
            },
            {
              id: 3,
              title: "CREMA DE ROQUEFORT AL CHIPOTLE",
              description: "300ml",
              precio: "$350.00"
            },
            {
              id: 4,
              title: "CREMA DE CHILE POBLANO Y PANELA",
              description: "300ml",
              precio: "$350.00"
            },
            {
              id: 5,
              title: "JUGO DE CARNE",
              description: "300ml",
              precio: "$350.00"
            }
          ]
        }
      ],
      subtitle2: "Cremas y Sopas"
    },
    {
      id: 4,
      title: "ENSALADAS",
      items: [
        {
          id: 1,
          title: "Caprese",
          description:
            "Rodajas de jitomate, queso mozzarella fresco, hojas de albahaca, aceite de oliva, pimienta negra y sal gruesa. 400g",
          precio: "$250.00"
        },
        {
          id: 2,
          title: "PRADERA VERDE",
          description:
            "4 Diferentes tipos de lechuga, tomates cherry, cebollamorada y pimientos, 300g",
          precio: "$250.00"
        },
        {
          id: 3,
          title: "PORTEÑA",
          description:
            "Lechugas, gourmet, germen de alfalfa, poro frito, tomates, queso feta con aderezo de aceitunas negras y anchoas, 300g",
          precio: "$250.00"
        },
        {
          id: 4,
          title: "REMOLACHA",
          description: "Betabel, apio, manzana y mayoneza casera, 400g",
          precio: "$250.00"
        },
        {
          id: 5,
          title: "GATO DUMAS",
          description:
            "Variedad de lechugas, frutas tropicales, poro frito, apio con aderezo de frambuesa y vinagre balsámico, 580g",
          precio: "$250.00"
        },
        {
          id: 6,
          title: "ROSSO",
          description:
            "Rodajas gruesas de tomates, cama de lechugas, aceite de oliva, pimienta negra y sal gruesa, 650g",
          precio: "$250.00"
        }
      ]
    },
    {
      id: 5,
      title: "Acompañamientos",
      items: [
        {
          id: 1,
          title: "PAPAS FRITAS",
          description: "500g",
          precio: "$250.00"
        },
        {
          id: 2,
          title: "PAPAS REJILLA",
          description: "500g",
          precio: "$250.00"
        },
        {
          id: 3,
          title: "VERDURAS AL VAPOR",
          description: "500g",
          precio: "$250.00"
        },
        {
          id: 4,
          title: "ESPINACAS A LA CREMA GRATINADAS",
          description: "500g",
          precio: "$250.00"
        },
        {
          id: 5,
          title: "MORRONES ASADOS",
          description: "2 pzas",
          precio: "$250.00"
        },
        {
          id: 6,
          title: "PAPA AL HORNO",
          description: "1 pza",
          precio: "$250.00"
        }
      ]
    },
    {
      id: 6,
      title: "Empanadas",
      items: [
        {
          id: 1,
          title: "Humita",
          description: "De crema de elote, 1pza",
          precio: "$250.00"
        },
        {
          id: 1,
          title: "SANTAFECINA",
          description: "De carne, 1pza",
          precio: "$250.00"
        },
        {
          id: 1,
          title: "ESPINACAS CON QUESO",
          description: "1pza",
          precio: "$250.00"
        },
        {
          id: 1,
          title: "Fusión",
          description: "Flor de calabaza, cuitlacoche y queso mozzarella, 1pza",
          precio: "$250.00"
        }
      ]
    },
    {
      id: 7,
      title: "Tiraditos",
      items: [
        {
          id: 1,
          title: "Res",
          description: "250g",
          precio: "$250.00"
        },
        {
          id: 2,
          title: "Atun",
          description: "250g",
          precio: "$250.00"
        },
        {
          id: 3,
          title: "Salmón",
          description: "250g",
          precio: "$250.00"
        }
      ]
    },
    {
      id: 8,
      title: "PASTAS DE LA CASA",
      items: [
        {
          id: 1,
          title: "LASAGNA DE ALCACHOFAS",
          description:
            "A las brasas, en salsa de 4 quesos y chile chipotle, 500g",
          precio: "$250.00"
        },
        {
          id: 2,
          title: "TALLARINES",
          description: "310g",
          precio: "$250.00"
        },
        {
          id: 3,
          title: "RAVIOLES",
          description: "Rellenos de queso ricotta, 310g",
          precio: "$250.00"
        },
        {
          id: 4,
          title: "TALLARINES AL OLIO Y AJO",
          description: "Con espárragos a las brasas, 310g",
          precio: "$250.00"
        },
        {
          id: 5,
          title: "FUSILLI",
          description: "310g",
          precio: "$250.00"
        },
        {
          id: 6,
          title: "SPAGHETTI",
          description: "310g",
          precio: "$250.00"
        },
        {
          id: 7,
          title: "PENNE",
          description: "Pasta corta 310g",
          precio: "$250.00"
        },
        {
          id: 8,
          title: "LASAGNA AL HORNO",
          description: "Carne, queso ricotta y espinacas, 600g",
          precio: "$250.00"
        },
        {
          id: 9,
          title: "FETTUCCINE",
          description: "310g",
          precio: "$250.00"
        }
      ]
    },
    {
      id: 9,
      title: "PIZZAS A LA LEÑA",
      items: [
        {
          id: 1,
          title: "4 QUESOS",
          description: "Mozzarella, parmesano, roquefort y feta, 500g",
          precio: "$250.00"
        },
        {
          id: 2,
          title: "CHAMPIÑONES",
          description: "Tomate, mozzarella, y champiñones, 500g",
          precio: "$250.00"
        },
        {
          id: 3,
          title: "ORVIETO",
          description: "Salami, champiñones y pimientos, 500g",
          precio: "$250.00"
        },
        {
          id: 4,
          title: "MOZZARELLA",
          description:
            "Salsa de tomate, queso, albahaca y aceite de oliva, 500g",
          precio: "$250.00"
        },
        {
          id: 5,
          title: "MARGARITA",
          description: "Salsa de tomate y queso, 500g",
          precio: "$250.00"
        },
        {
          id: 6,
          title: "MAR DE PLATA",
          description:
            "Salasa de tomate, anchoas, aceitunas negras y aceite de oliva, 500g",
          precio: "$250.00"
        },
        {
          id: 7,
          title: "MEXICANA",
          description:
            "Salsa de tomate, queso oaxaca, chorizo y rajas de poblano, 500g",
          precio: "$250.00"
        }
      ]
    },
    {
      id: 8,
      title: "POSTRES",
      items: [
        {
          id: 1,
          title: "PAY DE MANZANA",
          description: "225g",
          precio: "$250.00"
        },
        {
          id: 2,
          title: "PAY DE COCO CON HELADO",
          description: "250g",
          precio: "$250.00"
        },
        {
          id: 3,
          title: "PAVLOVA DE FRUTAS Y CREMA BADITA",
          description: "150g",
          precio: "$250.00"
        },
        {
          id: 4,
          title: "COPA DE HELADO DE VAINILLA Y FRESAS FLAMEADAS",
          description: "250g",
          precio: "$250.00"
        },
        {
          id: 5,
          title: "CRÈME BRÛLÉE",
          description: "El clásico, 300g",
          precio: "$250.00"
        },
        {
          id: 6,
          title: "ALFAJOR",
          description: "170g",
          precio: "$250.00"
        },
        {
          id: 7,
          title: "CRÈME BRÛLÉE DE CHOCOLATE",
          description: "Con pistaches tostados 300g",
          precio: "$250.00"
        },
        {
          id: 8,
          title: "CHEESE CAKE",
          description: "Con crema batida y fresas, 280g",
          precio: "$250.00"
        },
        {
          id: 9,
          title: "FLAN SANTAFECINO",
          description: "200g",
          precio: "$250.00"
        },
        {
          id: 10,
          title: "PASTELILLO CALIENTE",
          description: "Con fondue de chocolate y helado de vainilla, 200g",
          precio: "$250.00"
        },
        {
          id: 11,
          title: "CRUJIENTE DE PLÁTANO",
          description: "Con dulce de leche de vaca, 250g",
          precio: "$250.00"
        }
      ]
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const createMenuItem = () => {
    return menuItem.map(menu => {
      return (
        <div className="title_menu">
          <h1>{menu.title}</h1>
          <p className="subtitle_menu">{menu.subtitle1}</p>
          {menu.items.map(titles => {
            return (
              <div>
                <ItemMenu
                  titleItem={titles.title}
                  description={titles.description}
                ></ItemMenu>
              </div>
            );
          })}
          {
            <p className="subtitle_menu">{menu.subtitle2}</p>
            /*{menu.items.map(titles => {
            let data = Array.from(menu.items);
            console.log(data);
            data.map(resp => {
              // console.log(resp);
            });

            return (
              <div>
                <ItemMenu
                  titleItem={titles.title}
                  description={titles.description}
                ></ItemMenu>
              </div>
            );
          })} */
          }
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
