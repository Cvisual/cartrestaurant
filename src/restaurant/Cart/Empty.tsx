import React from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./menu.module.scss";

import Box from "@material-ui/core/Box";
import { border, borderRadius, display } from "@material-ui/system";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LanguageIcon from "@material-ui/icons/Language";
import PhoneIcon from "@material-ui/icons/Phone";

import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { VariantSelector } from '../components/VariantSelector';
import { Button, colors } from "@material-ui/core";
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

export const Empty = () => {


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
                justifyContent: "center",
                gap: "2px",
                color: "black",
                width: "100vw"
              }}
            >
                <div>
                    <button
                        style={{
                            width: "80px",
                            left: "5%",                            
                            
                        }}
                        onClick={()=> navigate(-1) }
                    >
                        <ArrowBackIcon />
                    </button>                
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height:'calc(50vh - 200px)'
                    }}          
                >
                <Box 
                    display='flex'                     
                    justifyContent='center' 
                    alignItems='center' 
                    height='calc(100vh - 200px)'
                    sx={{ flexDirection: { xs: 'column', sm: 'row' }}}
                >
                    <RemoveShoppingCartIcon 
                    style={{
                        fontSize: 100,
                        color: "black"
                        }} />
                    <Box display='flex' flexDirection='column' alignItems='center'>
                        <p>Su carrito está vació</p>                        
                    </Box>


                </Box>
                </div>
            </div>
            
            
          </div>
                  
        </div>
        
      </div>
    </div>
  );
};
