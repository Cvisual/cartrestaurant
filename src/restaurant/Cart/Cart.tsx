import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LanguageIcon from "@material-ui/icons/Language";
import PhoneIcon from "@material-ui/icons/Phone";
import { Button, colors } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import classes from "./menu.module.scss";

import { CartContext } from "../context";

export const Cart = () => {
  const navigate = useNavigate();

  const { cart } = useContext(CartContext)

  console.log("🚀 ~ file: Cart.tsx:20 ~ Cart ~ cart", cart)

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          position: "relative",
          height: "40vh",
          width: "100vw",
          background: "red",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            textAlign: "center",
            listStyle: "none",
          }}
        >
          <li>
            <img src="../../public/vite.svg" alt="" />
          </li>
          <li>
            <h1>Jamada</h1>
          </li>
          <li>
            <p>
              Burgos - España <br />
              Plaza Mío Cid, 4 - 09004{" "}
            </p>
          </li>
          <li>
            <ul
              style={{
                display: "flex",
                gap: "10px",
                textDecoration: "none",
                listStyle: "none",
              }}
            >
              <li>
                <a
                  href="/"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "white",
                    color: "black",
                  }}
                >
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "white",
                    color: "black",
                  }}
                >
                  <InstagramIcon
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "white",
                    color: "black",
                  }}
                >
                  <LanguageIcon />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "white",
                    color: "black",
                  }}
                >
                  <PhoneIcon />
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "100%",
            transform: "translate(-50%, -10%)",
            backgroundColor: "white",
            width: "40%",
            border: "20px solid white",
            borderRadius: "20px",
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "2px",
                color: "black"
              }}
            >
                <button
                        style={{
                            width: "80px",
                            left: "5%",                            
                            
                        }}
                        onClick={()=> navigate(-1) }
                    >
                        <ArrowBackIcon />
                    </button>
                <h2>Resumen de tus productos seleccionados</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar velit odio, eget tincidunt magna congue eget. Aliquam erat volutpat.</p>
            </div>
            
          </div>

          {
            cart.map( (item, index) => (
              <div
              key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "15px",
                }}
              >                       
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "20px",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "black",
                        width: "40%",
                        height: "auto",
                        borderRadius: "10px"
                      }}
                    >
                      <img src={item.image} alt="" />
                    </div>
                    <div
                      style={{
                        color: "black",
                        width: "80%",
                        
                      }}
                    >
                      <h2
                        
                      >{item.name}</h2>
                      <div 
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",                                            
                      }}
                      >
                        <div 
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px"
                          }}
                        >
                        <p>Datos producto seleccionado</p>                 
                        </div>
                        <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "5px"
                        }}
                      >
                        <Button>
                            <DeleteIcon />
                        </Button>
                      </div>
                      </div>
                      
                      <div>
                        
                      </div>
                    </div>
                  </div>  

                  <div
                    style={{
                        display: "flex",
                        flexDirection: "row",  
                        borderBottom: "1px solid black"                         
                    }}
                >
                    <div
                        style={{
                            width: "80%",
                            color: "black"
                        }}
                    >
                        <p>Productos  seleccionados (2) </p>
                    </div>
                    <div                
                        style={{
                            width: "20%",
                            color: "black"
                        }}
                    >
                        <p>€ 15.00</p>
                    </div>                
                </div>
                  <div
                    style={{
                        display: "flex",
                        flexDirection: "row",     
                        borderBottom: "1px solid black"                                               
                    }}
                >
                    <div
                        style={{
                            width: "80%",
                            color: "black"
                        }}
                    >
                        <p><b>Subtotal</b> </p>
                    </div>
                    <div                
                        style={{
                            width: "20%",
                            color: "black"
                        }}
                    >
                        <p>€ 35.00</p>
                    </div>
                    
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row", 
                        justifyContent: "space-between"    
                    }}
                >
                    <Button
                        variant="contained" color="primary"
                        onClick={()=> navigate("/checkout" )}
                    >Finalizar pedido</Button>
                    <Button
                        variant="contained" color="secondary"
                        onClick={()=> navigate("/menu/6d3869b" )}
                    >Agregar más productos</Button>
                </div>
              </div> 
            ))
          }


                  
        </div>
        
      </div>
    </div>
  );
};
