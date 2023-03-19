import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import axios from "axios";
import { Button, Input } from "@mui/material";
import { useEffect } from "react";

export let Accesories = () => {
    let [malumotlar, setMalumotlar] = useState([]);
    let [malumotlar2, setMalumotlar2] = useState([]);
    let [search, setSearch]= useState("")

  const [tableBollean, setTableBollean] = useState(false);
  const [inputData, setInputData] = useState({
    id: "",
    title: "",
    discription: "",
    price: "",
  });

  let inputClearFunc = () => {
    setInputData({
        id: "",
        title: "",
        discription: "",
        price: "",
    });
  };

  let handleTable = () => {
    setTableBollean(!tableBollean);
  };

  let handleInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  let handleRasm = (e) => {
    setInputData({
      ...inputData,
      rasm: URL.createObjectURL(e.target.files[0]),
    });
  };
  let deleteFunc = (id) => {
    setMalumotlar2(malumotlar2.filter((val) => val.id !== id));
    console.log("delete");
  };

  const url = "https://fakestoreapi.com/products";

 
  useEffect(()=>{
    axios
      .get(url)
      .then((res) => setMalumotlar(res.data))
      .catch((err) => console.error("err"));
      setMalumotlar2(malumotlar)
  },[])


  
  const inputChange = (e) => {
    search = e.target.value;
    let filter = malumotlar.filter((item) =>
      item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    if (filter.length > 0) {
        setMalumotlar2(filter);
      } else {
        setMalumotlar2(malumotlar);
      }
    //   console.log(filter);
    //   console.log(search);
  };

  let [filterCategoryState, setFilterCategoryState] = useState(malumotlar2)
  let filterCategoryFunc = (item)=>{
    console.log(item);
    setMalumotlar2(
      malumotlar.filter((elem)=>
      elem.category.includes(item.toString().trim()))
    )
  }
  let filterCategory = ["", "men's clothing", "jewelery", "electronics", "women's clothing"];


  return (
    <div className="accessories">
      {/* <Button onClick={fetchapi}>Ma`lumotlar</Button> */}
    <Input type="search" 
    placeholder="search..."
    onInput={inputChange}
    />
    <div className="category_box">
        {
          filterCategory.map((item, index)=>(
            <div key={index}>
              <Button onClick={()=> filterCategoryFunc(item)}>
                {item === "" ? "all" : item}
              </Button>
            </div>
          ))
        }
      </div>
      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>
                  <h3>Name</h3>
                </TableCell>
                <TableCell align="left">
                  <h3>Price</h3>
                </TableCell>
                <TableCell align="right">
                  <h3>Image</h3>
                </TableCell>
                <TableCell align="center">
                  <h3>Description</h3>
                </TableCell>
                <TableCell align="center">
                  <h3>Edit</h3>
                </TableCell>
                <TableCell align="center">
                  <h3>Delete</h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {malumotlar2.length > 0 && malumotlar2.filter((obj)=>{
                if(search === "") {
                  return obj;
                } else if (
                  obj.nomi.toLowercase().includes(search.toLowerCase().trim()) ||
                  obj.haqida
                  .toLowerCase()
                  .includes(search.toLowerCase().trim()) ||
                  obj.narxi.toString().includes(search.toLowerCase().trim())
                ){
                    return obj;
                }
              }).length > 0 ?(
                malumotlar2.filter((obj)=>{
                  if (search === ""){
                    return obj;
                  } else if(
                    obj.nomi
                    .toLowerCase()
                    .includes(search.toLowerCase().trim()) ||
                    obj.haqida
                    .toLowerCase()
                    .includes(search.toLowerCase().trim()) ||
                    obj.narxi.toString().includes(search.toLowerCase().trim())
                  ){
                    return obj
                  }
                })
              ).map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{item.id}</TableCell>
                  <TableCell component="th" scope="row">
                    {item.title.slice(0, 30)}...
                  </TableCell>
                  <TableCell align="left">${item.price}</TableCell>
                  <TableCell align="right">
                    <img
                      src={item.image}
                      alt={item.title.slice(0, 10)}
                      style={{ width: "35px", height: "35px" }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    {item.description.slice(0, 30)}
                  </TableCell>
                  <TableCell align="center">
                    <Button>Edit</Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                    variant="outlined"
                    color="error"
                    onClick={() => deleteFunc(item.id)}
                    >
                    Delete
                    </Button>
                  </TableCell>
                </TableRow>
              )):(
                <TableRow>
                  <TableCell>
                  no data
                  </TableCell>
                </TableRow>
              )
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
