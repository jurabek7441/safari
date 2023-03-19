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
      size: 23,
    },
    {
      id: 2,
      photo: GreyBeeWatch,
      name: "Grey bee wrist-watch",
      price: 10,
      category: "jeans",
      color: "white",
      size: 24,
    },
    {
      id: 3,
      photo: MulticoloredArmless,
      name: "Mini skirt",
      price: 10,
      category: "jumpsuits",
      color: "red",
      size: 25,
    },
    {
      id: 4,
      photo: MulticoloredArmless,
      name: "Red lightweight gown",
      price: 10,
      category: "tops",
      color: "green",
      size: 26,

    },
    {
      id: 5,
      photo: MulticoloredArmless,
      name: "Blue botton-down gown",
      price: 10,
      category: "jackets and coats",
      color: "black",
      size: 27,

    },
    {
      id: 6,
      photo: MoonAndStar,
      name: "Moon and star neckpiece",
      price: 10,
      category: "pants",
      color: "white",
      size: 28,

    },
    {
      id: 7,
      photo: TambourinCrossbody,
      name: "Tambourine Crossbody Bag ",
      price: 10,
      category: "shorts",
      color: "black",
      size: 29,

    },
    {
      id: 8,
      photo: KatyPerry,
      name: "Katy Perry Killer Queen EDP",
      price: 10,
      category: "skirts",
      color: "red",
      size: 30,

    },
    {
      id: 9,
      photo: HighHeels,
      name: "High heels ladies shoes",
      price: 10,
      category: "loungerie & underwear",
      color: "green",
      size: 31,

    },
    {
      id: 10,
      photo: NerdyOval,
      name: "Nerdy oval glasses",
      price: 10,
      category: "leather",
      color: "white",
      size: 32,
      
    },
    {
      id: 11,
      photo: DiamondLadies,
      name: "Diamond ladies ring",
      price: 10,
      category: "sweatrs & knits",
      color: "black",
      size: 40,

    },
    {
      id: 12,
      photo: MulticoloredArmless,
      name: "Ladies bush pants ",
      price: 10,
      category: "denim",
      color: "red",
      size: 50,

    },
    {
      id: 13,
      photo: GuilhermineEmbellished,
      name: "Guilhermina Embellished Slides",
      price: 10,
      category: "jens",
      color: "white",
      size: 60,

    },
    {
      id: 14,
      photo: SupergaPlaid,
      name: "Superga Plaid Sneakers",
      price: 10,
      category: "dressess",
      color: "black",
      size: 70,

    },
    {
      id: 15,
      photo: MulticoloredArmless,
      name: "Checked ladies trouser",
      price: 10,
      category: "tops",
      color: "red",
      size: 80,

    },
    {
      id: 16,
      photo: BaenieWinter,
      name: "Beanie winter fleece",
      price: 10,
      category: "pants",
      color: "green",
      size: 90,
      
    },
  ]);

  // local Storage

  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("localUser")) || []
  );

  let portalMap = useNavigate();
  let portalData = useNavigate();

  function localRefresh() {
    setLocalData(JSON.parse(localStorage.getItem("localUser")) || []);
  }

  const [inputData, setInputData] = useState({
    id: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    rasm: "",
  });

  function inputClear() {
    setInputData({
      id: "",
      name: "",
      surname: "",
      email: "",
      password: "",
      rasm: "",
    });
  }

  let getInputData = (e) => {
    let { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  //   let getFileData = (e) =>{
  //        setInputData({
  //         ...inputData,
  //         rasm: URL.createObjectURL(e.target.files[0]),
  //        });
  //   };

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
    portalMap("/localStorage");
  };

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
        categoryState,
        setCategoryState,
        colorState,
        setColorState,
        categoryBtn,
        colorBtn,
        sizeBtn,
        sizeState,
        setSizeState,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
