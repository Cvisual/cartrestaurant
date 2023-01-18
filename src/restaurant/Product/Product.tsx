import React from 'react'
import { useNavigate } from 'react-router';

import { border, borderRadius, display } from "@material-ui/system";
import { IconButton, Typography } from '@material-ui/core';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import PersonIcon from '@material-ui/icons/Person';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { VariantSelector } from '../components/VariantSelector';

export const Product = () => {
    const navigate = useNavigate();
    
    return (
        <div style={{ width: "100%" }}>
        <div
          style={{
            position: "relative",
            height: "35vh",
            width: "calc(100vw - 15px)",
            background: "red",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >        
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "100%",              
              transform: "translate(-50%, -5%)",
              backgroundColor: "white",
              width: "30%",
              border: "20px solid white",
              borderRadius: "20px",
              padding: "30px",
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",  
              height: "70vh"       
            }}
          >
            <div 
              style={{
                display: "flex",
                flexDirection: "column",

              }}            
            >
                <div 
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <button
                        style={{
                            position: "absolute",
                            left: "5%",                            
                            transform: "translate(-2%, -2%)",                            
                        }}
                        onClick={()=> navigate(-1) }
                    >
                        <ArrowBackIcon/>
                    </button>
                    <div
                        style={{
                            backgroundColor: "red",
                            width: "100%",
                            height: "25vh",
                            borderRadius: "20px"
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        color: "black"
                    }}
                >
                    <h2>Hamburguesa de pollo</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar velit odio, eget tincidunt magna congue eget. Aliquam erat volutpat.</p>
                    <div  
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "5px"
                        }}
                    >
                        <p>¿Qué contienen este alimento?</p>
                        <div>?</div>
                    </div>
                    <div>
                        Listado alergenos
                    </div>
                    <div>
                        <p>Selecciona una de las opciones</p>
                        <VariantSelector
                            selectedVariant=""
                            variants={["Sencilla", "Doble"]}
                        />                        
                    </div>
                    <br />
                    <div>
                        <button>Agregar Ahora</button>
                    </div>
                </div>
             
            </div>
          </div> 
          <div
          style={{
            position: "absolute",
            right: "20%",
            top: "95%",
            transform: "translate(-70%, 70%)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              placeItems: "center",
              gap: "15px",
            }}
          >
            <button
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
                height: "80px",
              }}
            >
              <ShoppingCartIcon />
              <span>(0) Items</span>
            </button>
            <button
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
                height: "80px",
              }}
            >
              <SportsEsportsIcon />
              <span>¿Jugamos?</span>
            </button>
            <button
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
                height: "80px",
              }}
            >
              <PersonIcon />
              <span>Usuario</span>
            </button>
          </div>
        </div>       
        </div>
      </div>
    )
}
