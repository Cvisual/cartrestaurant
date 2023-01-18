import React from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./menu.module.scss";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LanguageIcon from "@material-ui/icons/Language";
import PhoneIcon from "@material-ui/icons/Phone";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import { Button } from "@material-ui/core";

export const Checkout = () => {
  const navigate = useNavigate();
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
                color: "black",
              }}
            >
              <button
                style={{
                  width: "80px",
                  left: "5%",
                }}
                onClick={() => navigate(-1)}
              >
                <ArrowBackIcon />
              </button>
              <h2>Mi orden </h2>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
                            
            }}
          >
            <ul>
                <li>
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
                  width: "83px",
                  height: "83px",
                  borderRadius: "10px",
                }}
              >
                imagen
              </div>
              <div
                style={{
                  color: "black",
                  width: "80%",
                }}
              >
                
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >           
                <div>
                    
                <h3
                    style={{
                        margin: 0
                    }}
                >
                    Hamburguesa de pollo</h3>
                    <p 
                        style={{
                            margin: 0
                        }}
                    >Sencilla</p>
                </div>     
                
                  <p 
                    style={{
                        margin: 0
                    }}
                  >X1</p>
                  <p
                    style={{
                        margin: 0
                    }}
                  >€10.00</p> 
                </div>

                <div></div>
              </div>
            </div>
                </li>
                <li>
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
                  width: "83px",
                  height: "83px",
                  borderRadius: "10px",
                }}
              >
                imagen
              </div>
              <div
                style={{
                  color: "black",
                  width: "80%",
                }}
              >
                
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >           
                <div>
                    
                <h3
                    style={{
                        margin: 0
                    }}
                >
                    Hamburguesa de pollo</h3>
                    <p 
                        style={{
                            margin: 0
                        }}
                    >Sencilla</p>
                </div>     
                
                  <p 
                    style={{
                        margin: 0
                    }}
                  >X2</p>
                  <p
                    style={{
                        margin: 0
                    }}
                  >€20.00</p> 
                </div>

                <div></div>
              </div>
            </div>
                </li>
                
            </ul>
            <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Notas adicionales del pedido:" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                
              }}
            >
              <div
                style={{
                  width: "80%",
                  color: "black",
                }}
              >
                <p>Productos seleccionados (2) </p>
              </div>
              <div
                style={{
                  width: "20%",
                  color: "black",
                }}
              >
                <p>€ 15.00</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                borderBottom: "1px solid black",
              }}
            >
              <div
                style={{
                  width: "80%",
                  color: "black",
                }}
              >
                <p>
                  <b>Subtotal</b>{" "}
                </p>
              </div>
              <div
                style={{
                  width: "20%",
                  color: "black",
                }}
              >
                <p>€ 35.00</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",                
              }}
            >
              <Button variant="contained" color="primary">
                Realizar pago
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
