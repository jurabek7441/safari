import { useContext, useEffect } from "react";
import { DataContext } from "../../Components/Context";
import { AiOutlineHeart } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";

export let Shoes_Content = ({ state, value }) => {
  const { shoesData, categoryState, colorState, sizeState, likeFunc } = useContext(DataContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="shopYourStyle_content">
      {shoesData.filter(
        (item) =>
          item.category
            .toLocaleLowerCase()
            .includes(categoryState.toLocaleLowerCase()) &&
          item.color
            .toLocaleLowerCase()
            .includes(colorState.toLocaleLowerCase()) &&
          item.color
            .includes(sizeState)
      ).length > 0 ? (
        shoesData
          .filter(
            (item) =>
              item.category
                .toLocaleLowerCase()
                .includes(categoryState.toLocaleLowerCase()) &&
              item.color
                .toLocaleLowerCase()
                .includes(colorState.toLocaleLowerCase()) &&
              item.color
                .includes(sizeState) &&
              value[0] <= item.price &&
              item.price <= value[1]
          )
          .map((item, index) => (
            <div className="shopYourStyle_card" 
            key={index}
            data-aos="zoom-out-up"
            >
              <figure>
                <img src={item.photo} alt={item.name} />
                <div className="card_hover">
                  <div className="card_like" onClick={() => likeFunc(item)}>
                    <i>
                      {item.like ? <AiOutlineHeart /> : <FcLike />}
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
  );
};
