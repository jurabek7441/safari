import React, { useState } from "react";
import MulticoloredArmless from "../photo/multicoloredArmless.png";
import BaenieWinter from "../photo/baenieWinter.png";
import DiamondLadies from "../photo/diamondLadies.png";
import GreyBeeWatch from "../photo/Grey Bee Watch 1.png";
import GuilhermineEmbellished from "../photo/guilherminaEmbellished.png";
import HighHeels from "../photo/highHeels.png";
import KatyPerry from "../photo/katyPerry.png";
import MoonAndStar from "../photo/moonAndStar.png";
import NerdyOval from "../photo/nerdyOval.png";
import SupergaPlaid from "../photo/supergaPlaid.png";
import TambourinCrossbody from "../photo/tambourinCrossbody.png";
import KedsSneakers from "../photo/kedsSneakers.png";
import SummerShoes from "../photo/summerShoes.png";
import CasualFlat from "../photo/casualFlat.png";
import BlackStrappy from "../photo/blackStrappy.png";
import SupergaPlatform from "../photo/supergaPlatform.png";
import HeeledSandals from "../photo/heeledSandals.png";
import HajinkBoat from "../photo/hajinkBoat.png";
import CasualFlatSandals from "../photo/casualFlatSandals.png";
import SummerCork from "../photo/summerCork.png";
import AnkleBoots from "../photo/ankleBoots.png";

import { useNavigate } from "react-router-dom";

export const DataContext = React.createContext();

export default function ContextProvider({ children }) {

  let [shopData, setShopData] = useState([
    {
      id: 1,
      photo: MulticoloredArmless,
      name: "Multicolored armless top",
      price: 10,
      category: "denim",
      color: "black",
      size: "23",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 2,
      photo: GreyBeeWatch,
      name: "Grey bee wrist-watch",
      price: 10,
      category: "jeans",
      color: "white",
      size: "24",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 3,
      photo: MulticoloredArmless,
      name: "Mini skirt",
      price: 10,
      category: "jumpsuits",
      color: "red",
      size: "25",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 4,
      photo: MulticoloredArmless,
      name: "Red lightweight gown",
      price: 10,
      category: "tops",
      color: "green",
      size: "26",
      like: false,
      cart: false,
      count: 0,
      discount: 0,

    },
    {
      id: 5,
      photo: MulticoloredArmless,
      name: "Blue botton-down gown",
      price: 10,
      category: "jackets and coats",
      color: "black",
      size: "27",
      like: false,
      cart: false,
      count: 0,
      discount: 0,

    },
    {
      id: 6,
      photo: MoonAndStar,
      name: "Moon and star neckpiece",
      price: 10,
      category: "pants",
      color: "white",
      size: "28",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 7,
      photo: TambourinCrossbody,
      name: "Tambourine Crossbody Bag ",
      price: 10,
      category: "shorts",
      color: "black",
      size: "29",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 8,
      photo: KatyPerry,
      name: "Katy Perry Killer Queen EDP",
      price: 10,
      category: "skirts",
      color: "red",
      size: "30",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 9,
      photo: HighHeels,
      name: "High heels ladies shoes",
      price: 10,
      category: "loungerie & underwear",
      color: "green",
      size: "31",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 10,
      photo: NerdyOval,
      name: "Nerdy oval glasses",
      price: 10,
      category: "leather",
      color: "white",
      size: "32",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 11,
      photo: DiamondLadies,
      name: "Diamond ladies ring",
      price: 10,
      category: "sweatrs & knits",
      color: "black",
      size: "40",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 12,
      photo: MulticoloredArmless,
      name: "Ladies bush pants ",
      price: 10,
      category: "denim",
      color: "red",
      size: "50",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 13,
      photo: GuilhermineEmbellished,
      name: "Guilhermina Embellished Slides",
      price: 10,
      category: "jens",
      color: "white",
      size: "60",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 14,
      photo: SupergaPlaid,
      name: "Superga Plaid Sneakers",
      price: 10,
      category: "dressess",
      color: "black",
      size: "70",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 15,
      photo: MulticoloredArmless,
      name: "Checked ladies trouser",
      price: 10,
      category: "tops",
      color: "red",
      size: "80",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 16,
      photo: BaenieWinter,
      name: "Beanie winter fleece",
      price: 10,
      category: "pants",
      color: "green",
      size: "90",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
  ]);





  //shoes data
  let [shoesData, setShoesData] = useState([
    {
      id: 211,
      photo: HighHeels,
      name: "High heels ladies shoes",
      price: 10,
      category: "booties",
      color: "black",
      size: "35.5/5",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 212,
      photo: KedsSneakers,
      name: "Keds sneakers",
      price: 10,
      category: "flats",
      color: "white",
      size: "36.5/5",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 213,
      photo: GuilhermineEmbellished,
      name: "Guilhermina Embellished Slides",
      price: 10,
      category: "boots",
      color: "red",
      size: "37.5/6.5",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 214,
      photo: SummerShoes,
      name: "Summer shoes",
      price: 10,
      category: "sandals",
      color: "green",
      size: "38/7",
      like: false,
      cart: false,
      count: 0,
      discount: 0,

    },
    {
      id: 215,
      photo: CasualFlat,
      name: "Casual Flat Loafers",
      price: 10,
      category: "sneakers",
      color: "black",
      size: "39/7.5",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 216,
      photo: BlackStrappy,
      name: "Black strappy peeptoe",
      price: 10,
      category: "slides & slippers",
      color: "white",
      size: "39.5/8",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 217,
      photo: SupergaPlatform,
      name: "Superga Platform Sneakers ",
      price: 10,
      category: "heels",
      color: "black",
      size: "40/7.5",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 218,
      photo: HeeledSandals,
      name: "Heeled sandals",
      price: 10,
      category: "wedges",
      color: "red",
      size: "41/9.5",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 219,
      photo: HajinkBoat,
      name: "HAJINK Boat Shoes",
      price: 10,
      category: "mules",
      color: "green",
      size: "41.5/10",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 2110,
      photo: CasualFlatSandals,
      name: "Casual Flat Sandals",
      price: 10,
      category: "party shoes",
      color: "white",
      size: "42/10.5",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 2111,
      photo: SummerCork,
      name: "Summer Cork Slippers",
      price: 10,
      category: "vegan shoes",
      color: "black",
      size: "42/11",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
    {
      id: 2112,
      photo: AnkleBoots,
      name: "Ankle boots",
      price: 10,
      category: "oxfords",
      color: "green",
      size: "43/12",
      like: false,
      cart: false,
      count: 0,
      discount: 0,
    },
  ]);

  //              data





  // local Storage

  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("localUser")) || shopData
  );

  let portalMap = useNavigate();
  let portalData = useNavigate();

  function localRefresh() {
    setLocalData(JSON.parse(localStorage.getItem("localUser")) || []
    );
  }


  const [inputData, setInputData] = useState({
    id: "",
    photo: "",
    name: "",
    price: "",
    category: "",
    color: "",
    size: "",
    like: false,
    cart: false,
    count: 0,
    discount: "",
  });

  function inputClear() {
    setInputData({
      id: "",
      photo: "",
      name: "",
      price: "",
      category: "",
      color: "",
      size: "",
      like: false,
      cart: false,
      count: 0,
      discount: "",
    });
  }

  let getInputData = (e) => {
    let { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

    let getFileData = (e) =>{
         setInputData({
          ...inputData,
          rasm: URL.createObjectURL(e.target.files[0]),
         });
    };

  let sendData = () => {
    if (inputData.id === "") {
      if (localStorage.getItem("localUser")) {
        localStorage.setItem(
          "localUser",
          JSON.stringify([
            ...localData,
            { ...inputData, id: new Date().getTime() },
          ])
        );
      } else {
        localStorage.setItem(
          "localUser",
          JSON.stringify([{ ...inputData, id: new Date().getTime() }])
        );
      }
    } else {
      localStorage.setItem(
        "localUser",
        JSON.stringify(
          localData.map((elem) => (elem.id === inputData.id ? inputData : elem))
        )
      );
    }
    portalMap("/localMap");
    inputClear();
    localRefresh();
  };

  //    deleteFunc

  let deleteFunc = (id) => {
    localStorage.setItem(
      "localUser",
      JSON.stringify(localData.filter((elem) => elem.id !== id))
    );
    localRefresh();
  };

  //     editFunc

  let editFunc = (item) => {
    setInputData(item);
    portalMap("/adminClothes");
  };


  // likeFunc

  let likeFunc = (item) => {
    setShopData(
      shopData.map((element) =>
        element.id === item.id ? { ...element, like: !element.like } : element)
    );
  }

  // add to cart

  let addCartFunc = (item) => {
    setShopData(
      shopData.map((element) =>
        element.id === item.id ? { ...element, cart: !element.cart } : element)
    );
  }

  // plusFunc

  let plusFunc = (item) => {
    setShopData(
      shopData.map((obj) =>
        obj.id === item.id && obj.count < 10
          ? { ...obj, count: obj.count + 1 }
          : obj
      )
    );
  };
  // minus Func
  let minusFunc = (item) => {
    if (item.count > 0) {
      setShopData(
        shopData.map((obj) =>
          obj.id === item.id ? { ...obj, count: obj.count - 1 } : obj
        )
      );
    } else {
      alert("error");
    }
  };

  // delete Func

  // let deleteFunc = (item)=>{

  // }
  // filter & category

  let [categoryState, setCategoryState] = useState('');
  let [colorState, setColorState] = useState('');
  let [sizeState, setSizeState] = useState('');


  let categoryBtn = [
    "",
    "Dresses",
    "Denim",
    "Jeans",
    "Jumpsuits",
    "Tops",
    "Jackets and coats",
    "Pants",
    "Shorts",
    "Skirts",
    "Loungerie & underwear",
    "Leather",
    "Sweatrs & knits",
  ];
  let shoesCategoryBtn = [
    "",
    "Booties",
    "Flats",
    "Boots",
    "Sandals",
    "Sneakers",
    "Slides & Slippers",
    "Heels",
    "Wedges",
    "Mules",
    "Party shoes",
    "Vegan shoes",
    "Oxfords",
  ]
  let colorBtn = [
    "beige",
    "blue",
    "black",
    "red",
    "orange",
    "green",
    "brown",
    "purple",
    "gold",
    "taupe",
    "white",
    "pink",
  ];
  let sizeBtn = [
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    40,
    50,
    60,
    70,
    80,
    90,
  ]
  let shoesSizeBtn = [
    "35.5/5",
    "36.5/5.5",
    "37.5/6.5",
    "38/7",
    "39/7.5",
    "39.5/8",
    "40/7.5",
    "41/9.5",
    "41.5/10",
    "42/10.5",
    "42/11",
    "43/12",
  ]
  return (
    <DataContext.Provider
      value={{
        getInputData,
        inputData,
        sendData,
        localData,
        deleteFunc,
        editFunc,
        shopData,
        setShopData,
        categoryState,
        setCategoryState,
        colorState,
        setColorState,
        categoryBtn,
        colorBtn,
        sizeBtn,
        sizeState,
        setSizeState,
        shoesCategoryBtn,
        shoesSizeBtn,
        shoesData,
        likeFunc,
        addCartFunc,
        plusFunc,
        minusFunc,
        getFileData
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
