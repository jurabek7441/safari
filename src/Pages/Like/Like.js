

import * as React from "react";
import { CiCircleRemove } from "react-icons/ci"
import { useContext } from "react";
import { DataContext } from "../../Components/Context";
import { useNavigate } from "react-router-dom";

export let Like = () => {
    const { shopData, likeFunc, addCartFunc } = useContext(DataContext);
    let cart = useNavigate();
    let buy_cartFunc=()=>{
        addCartFunc();
        cart();
    }
    return (
        <div className="like">

            {shopData
                .filter((item) => item.like === true)
                .map((obj) => (
                    <div className="likeCard" key={obj.id}>
                        <div className="likeCard_content">
                            <figure>
                                <img src={obj.photo} alt={obj.name} />
                            </figure>
                            <div className="likeCard_info">
                                <h3>{obj.name}</h3>
                                <h6>Size - {obj.size}</h6>
                                <p>₦ {obj.price.toFixed(3)}</p>
                            </div>
                        </div>
                        <div className="likeCard_actions">
                            <button className="buyNow"
                            onClick={()=> buy_cartFunc()}
                            >
                                BUY NOW
                            </button>
                            <button className="remove"
                            onClick={()=> likeFunc(obj)}
                            >
                                <i>
                                    <CiCircleRemove />

                                </i>
                                REMOVE
                            </button>
                        </div>
                    </div>
                ))}
        </div>
    );
}