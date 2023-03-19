import { useContext, useEffect } from "react";
import { DataContext } from "../../Components/Context";
import { AiOutlineHeart } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

export let ShopYourStyle = ({ state }) => {
  const { shopData } = useContext(DataContext);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="shopYourStyle">
      <div className="shopYourStyle_title">
        <div className="shopYourStyle_name">
          <span></span>
          <h2>Shop your style</h2>
          <span></span>
        </div>
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
              <div
                className="shopYourStyle_card"
                key={index}
                data-aos="zoom-out-up"
              >
                <figure>
                  <img src={item.photo} alt={item.name} />
                  <div className="card_hover">
                    <div className="card_like">
                      <i>
                        <AiOutlineHeart />
                      </i>
                    </div>
                    <div className="card_cart">
                      <p>ADD TO CART</p>
                      <i>
                        <MdAddShoppingCart />
                      </i>
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
