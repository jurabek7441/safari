import MulticoloredArmless from "../../photo/multicoloredArmless.png";
import BaenieWinter from "../../photo/baenieWinter.png";
import DiamondLadies from "../../photo/diamondLadies.png";
import GreyBeeWatch from "../../photo/Grey Bee Watch 1.png";
import GuilhermineEmbellished from "../../photo/guilherminaEmbellished.png";
import HighHeels from "../../photo/highHeels.png";
import KatyPerry from "../../photo/katyPerry.png";
import MoonAndStar from "../../photo/moonAndStar.png";
import NerdyOval from "../../photo/nerdyOval.png";
import SupergaPlaid from "../../photo/supergaPlaid.png";
import TambourinCrossbody from "../../photo/tambourinCrossbody.png";
import { useContext, useState } from "react";
import { DataContext } from "../../Components/Context";
import { AiOutlineHeart } from 'react-icons/ai'
import {MdAddShoppingCart} from 'react-icons/md'

export let ShopYourStyle = ({ state }) => {
  const { simple, text } = useContext(DataContext);

  let [shopData, setShopData] = useState([
    {
      id: 1,
      photo: MulticoloredArmless,
      name: "Multicolored armless top",
      price: 10,
      category: "denim",
    },
    {
      id: 2,
      photo: GreyBeeWatch,
      name: "Grey bee wrist-watch",
      price: 10,
      category: "dressess",
    },
    {
      id: 3,
      photo: MulticoloredArmless,
      name: "Mini skirt",
      price: 10,
      category: "dressess",
    },
    {
      id: 4,
      photo: MulticoloredArmless,
      name: "Red lightweight gown",
      price: 10,
      category: "dressess",
    },
    {
      id: 5,
      photo: MulticoloredArmless,
      name: "Blue botton-down gown",
      price: 10,
      category: "dressess",
    },
    {
      id: 6,
      photo: MoonAndStar,
      name: "Moon and star neckpiece",
      price: 10,
      category: "dressess",
    },
    {
      id: 7,
      photo: TambourinCrossbody,
      name: "Tambourine Crossbody Bag ",
      price: 10,
      category: "dressess",
    },
    {
      id: 8,
      photo: KatyPerry,
      name: "Katy Perry Killer Queen EDP",
      price: 10,
      category: "dressess",
    },
    {
      id: 9,
      photo: HighHeels,
      name: "High heels ladies shoes",
      price: 10,
      category: "dressess",
    },
    {
      id: 10,
      photo: NerdyOval,
      name: "Nerdy oval glasses",
      price: 10,
      category: "dressess",
    },
    {
      id: 11,
      photo: DiamondLadies,
      name: "Diamond ladies ring",
      price: 10,
      category: "dressess",
    },
    {
      id: 12,
      photo: MulticoloredArmless,
      name: "Ladies bush pants ",
      price: 10,
      category: "dressess",
    },
    {
      id: 13,
      photo: GuilhermineEmbellished,
      name: "Guilhermina Embellished Slides",
      price: 10,
      category: "dressess",
    },
    {
      id: 14,
      photo: SupergaPlaid,
      name: "Superga Plaid Sneakers",
      price: 10,
      category: "dressess",
    },
    {
      id: 15,
      photo: MulticoloredArmless,
      name: "Checked ladies trouser",
      price: 10,
      category: "dressess",
    },
    {
      id: 16,
      photo: BaenieWinter,
      name: "Beanie winter fleece",
      price: 10,
      category: "dressess",
    },
  ]);

  let clickFunc = () => {
    console.log(text);
  };

  return (
    <div className="shopYourStyle">
      <button onClick={() => clickFunc()}>click me</button>
      <div className="shopYourStyle_title">
        <h2>Shop your style</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida
          cursus adipiscing viverra at tortor, egestas odio parturient. Morbi ut
          lorem in erat. Et et molestie diam diam ultricies. Scelerisque duis
          diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae
          adipiscing id facilisis.
        </p>
      </div>
      <div className="shopYourStyle_content">
        {shopData.length > 0 &&
        shopData.filter((obj) => {
          if (state === "") {
            return obj;
          } else if (
            obj.name.toLowerCase().includes(state.toLowerCase().trim()) ||
            obj.price.toString().includes(state.toLowerCase().trim())
          ) {
            return obj;
          }
        }).length > 0 ? (
          shopData
            .filter((obj) => {
              if (state === "") {
                return obj;
              } else if (
                obj.name.toLowerCase().includes(state.toLowerCase().trim()) ||
                obj.price.toString().includes(state.toLowerCase().trim())
              ) {
                return obj;
              }
            })
            .map((item, index) => (
              <div className="shopYourStyle_card" key={index}>
                <figure>
                  <img src={item.photo} alt={item.name} />
                  <div className="card_hover">
                    <div className="card_like">
                      <i><AiOutlineHeart/></i>
                    </div>
                    <div className="card_cart">
                      <p>ADD TO CART</p>
                      <i><MdAddShoppingCart/></i>
                    </div>
                  </div>
                </figure>
                <div className="homeCard_content">
                  <h6>{item.name}</h6>
                  <h5>₦{item.price.toFixed(3)}</h5>
                </div>
                
              </div>
            ))
        ) : (
          <h2>no data...</h2>
        )}
      </div>
    </div>
  );
};
