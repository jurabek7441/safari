import { useContext } from "react";
import { DataContext } from "./Context";
import { CiCircleRemove } from "react-icons/ci"
import * as React from 'react';
import { FcLikePlaceholder } from "react-icons/fc"
import { FcLike } from "react-icons/fc"
import { useNavigate } from "react-router-dom";



export let Cart = () => {
    const { shopData, plusFunc, minusFunc, likeFunc, addCartFunc } = useContext(DataContext);
    let toShop = useNavigate();
    return (
        <div className="cart">
            <h2>Shopping Cart
                ({shopData.filter((item) => item.cart === true).length} item)
            </h2>
            <div className="cartContent">

                {shopData
                    .filter((item) => item.cart === true)
                    .map((obj) => (
                        <div className="cartCard" key={obj.id}>


                            <div className="cartCard_content">
                                <figure>
                                    <img src={obj.photo} alt={obj.name} />
                                </figure>
                                <div className="cartCard_info">
                                    <h3>{obj.name}</h3>
                                    <h6>Size - {obj.size}</h6>
                                    <div className="cartCard_actions">
                                        <button className="buyNow"
                                            onClick={() => likeFunc(obj)}
                                        >
                                            {obj.like ? <FcLike /> : <FcLikePlaceholder />}  MOVE TO FAVORITES
                                        </button>
                                        <button className="remove"
                                            onClick={() => addCartFunc(obj)}
                                        >
                                            <i>
                                                <CiCircleRemove />

                                            </i>
                                            REMOVE
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="cart_priceCount">

                                <div className="cartQuantity">
                                    <button className="countPlus"
                                        onClick={() => plusFunc(obj)}
                                    >
                                        +
                                    </button>
                                    <span>
                                        {obj.count}
                                    </span>
                                    <button className="countMinus"
                                        onClick={() => minusFunc(obj)}
                                    >
                                        -
                                    </button>
                                </div>

                                <div className="cartPrice">
                                    <p>
                                        ₦ {obj.price.toFixed(3)}
                                    </p>
                                </div>
                                <div className="cardTotalPrice">
                                    <p>
                                        ₦ {(obj.count * obj.price).toFixed(3)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="cartCheck">

                <h1>
                    Total: ₦ {shopData
                        .reduce(
                            (a, b) =>
                                a + (b.price - (b.price / 100) * b.discount) * b.count,
                            0
                        )
                        .toFixed(2)}
                    
                </h1>
                <p>Delivery fee not included yet</p>
                <div className="cartButton_box">
                    <button className="continueShopping"
                        onClick={() => toShop("/")}
                    >
                        CONTINUE SHOPPING
                    </button>
                    <button className="toCheck"

                    >
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    )
}