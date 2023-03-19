import { useContext } from "react";
import { DataContext } from "../../Components/Context";
import { AiOutlineHeart } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";

export let Clothes_content = ({ state, value }) => {
  const { shopData, categoryState, colorState, sizeState } = useContext(DataContext);

  return (
    <div className="shopYourStyle_content">
      {shopData.filter(
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
        shopData
          .filter(
            (item) =>
              item.category
                .toLocaleLowerCase()
                .includes(categoryState.toLocaleLowerCase()) &&
              item.color
                .toLocaleLowerCase()
                .includes(colorState.toLocaleLowerCase()) &&
              item.color
                .includes(sizeState)&&
                value[0] <= item.price &&
                item.price <= value[1]
          )
          .map((item, index) => (
            <div className="shopYourStyle_card" key={index}>
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
  );
};
