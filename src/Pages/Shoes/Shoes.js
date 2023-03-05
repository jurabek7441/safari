import axios from "axios";
import { useState } from "react";

export let Shoes = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  let search = "";

  const url = "https://fakestoreapi.com/products";

  function fetchapi() {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((error) => console.error("error"));

    setData2(data);
  }

  const inputChange = (e) => {
    search = e.target.value;
    let filter = data.filter((item) =>
      item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    if (filter.length > 0) {
      setData2(filter);
    } else {
      setData2(data);
    }
    console.log(filter);
    console.log(search);
  };
  return (
    <div className="shoes">
      <button onClick={fetchapi}>Ma`lumotlar</button>
      <input type="search" placeholder="Search..." onInput={inputChange} />
      <div className="cards">
        {data2.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title.slice(0, 10)}...</h3>
            <h5>$ {item.price}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
