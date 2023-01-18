import React, { FC, useContext, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";



import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LanguageIcon from "@material-ui/icons/Language";
import PhoneIcon from "@material-ui/icons/Phone";
import TuneIcon from "@material-ui/icons/Tune";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';

import classes from "./menu.module.scss";
import { VariantSelector } from "../../components/VariantSelector";
import { IMenu, ISection, IItemMenu } from "../../interfaces/Menu";
import { CartContext } from "../../context";

import { ItemCounter } from "../../components/ItemCounter";
import { ICartItem } from "../../interfaces";
import { ModalSimple } from "../../components/ModalSimple";
import { Button } from "@material-ui/core";


export interface InternalContentProps {
  menu: IMenu;
}

const InternalContent: FC<InternalContentProps> = ({ menu: completeMenu }) => {
  const navigate = useNavigate();

  const { addProductToCart } =  useContext( CartContext );
  //console.log(completeMenu);
  const [menu, setMenu] = useState<IMenu>(completeMenu);
  const [openModal, setOpenModal] = useState(false);  
  const [productShow, setProductShow] = useState<IItemMenu>();

  const [tempCartProduct, setTempCartProduct] = useState<ICartItem>({
    id: "",
    name: "",
    price: 0,
    type: undefined,
    image: "",
    quantity: 1,
  });

  const selectedVariant = (type: any) => {  
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      type
    }));
  };

  const onUpdateQuantity = (quantity: number) => {    
    setTempCartProduct( currentProduct => ({
        ...currentProduct,
        quantity
    }));
  };

  const onAddProduct = () => {
    if(!tempCartProduct.type) { return; }    
    addProductToCart( tempCartProduct );
    console.log("🚀 ~ file: Internalcontent.tsx:70 ~ onAddProduct ~ tempCartProduct", tempCartProduct)
    handleClose()
  };

  const addDataToModal = (item:IItemMenu) => {    
    handleShow() 
    setProductShow(item)  
    setTempCartProduct({
      id: item.id,
      name: item.name,
      price: 0,
      type: undefined,
      image: item.image,
      quantity: 1,
    })
  }

  const handleShow = () => setOpenModal(true);
  const handleClose = () => {
    setOpenModal(false)
    setTempCartProduct({
      id: "",
      name: "",
      price: 0,
      type: undefined,
      image: "",
      quantity: 1,
    })
  };

  useEffect(() => {
    setMenu(completeMenu);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {menu.map((menu: IMenu, index: number) => (
        <div
          key={index}
          style={{
            position: "relative",
            height: "40vh",
            width: "calc(100vw - 15px)",
            background: "red",
            backgroundImage: `url('${menu?.imageUrl}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
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
              <img src={menu.imageUrl} alt="" />
            </li>
            <li>
              <h1>{menu.name}</h1>
            </li>
            <li>
              <p>
                Burgos - España <br />
                Plaza Mío Cid, 4 - 09004
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
                    href={menu.facebookProfile}
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
                    href={menu.instagramProfile}
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
              transform: "translate(-50%, -2%)",
              backgroundColor: "white",
              width: "40%",
              border: "20px solid white",
              borderRadius: "20px",
              paddingTop: "40px",
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
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: "2px",
                }}
              >
                <button>Comidas</button>
                <button>Bebidas</button>
                <button>Postres</button>
              </div>
              <div>
                <button>
                  <TuneIcon />
                </button>
              </div>
            </div>
            {/*product sections*/}
            {menu?.sections?.map((section: ISection, index: number) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "15px",
                }}
                key={index}
                id={section.name}
              >
                <h1
                  style={{
                    color: "black",
                  }}
                >
                  {section.name}
                </h1>
                {/* product item */}
                {section?.items?.map((item: IItemMenu, index: number) => (
                  <div key={index} onClick={() => addDataToModal(item)}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                        padding: "10px",
                        borderRadius: "20px",
                        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
                        cursor: "pointer"
                      }}
                    >
                      <div
                        style={{
                          width: "150px",
                          height: "150px",
                          textAlign: "center",
                          display: "flex",
                          justifyItems: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src={item?.imageThumb} alt={item.name} />
                      </div>
                      <div
                        style={{
                          color: "black",
                          width: "80%",
                        }}
                      >
                        <h2
                          style={{
                            margin: "6px auto"
                          }}
                        >{item.name}</h2>
                        <p>{item.description}</p>  
                        {
                          item.price | item.price3 && <p><b>$ </b>{item.price} - {item.price3 }</p>

                        } 
                        
                        {/* <Button>
                          <SearchIcon/>
                        </Button>                         */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* elementos flotantes*/}
      <div
        style={{
          position: "absolute",
          right: "20%",
          top: "50%",
          transform: "translate(-7%, 50%)",
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
            onClick={() => navigate("/cart")}
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
      {/* modal */}

      <ModalSimple open={openModal} onClose={handleClose} title={productShow?.name}>        
        <div
          style={{
            backgroundColor: "white",
            width: "25vw",  
            marginBottom: "20px"
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
                  <div
                      style={{
                          backgroundImage: `url('${productShow?.image}')`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
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
                  <h2>{productShow?.name}</h2>
                  <p>{productShow?.description}</p>
                  <div  
                      style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "5px"
                      }}
                  >
                      
                  </div>
                  <div
                     style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: "5px"
                    }}
                  >
                    <div>
                      <p>¿Qué contienen este alimento?</p>                      
                      {productShow?.allergens?.map((a, index) => (
                        <img src={`/images/allergens/${a}.svg`} alt="" key={index} width="30"/>
                      ))}                    
                    </div>
                    {/* <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >                      
                     <p> $ { productShow?.price }</p>
                    </div> */}
                  </div>
                  <div 
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: "5px"
                    }}
                  >
                    <div>
                      <p>Selecciona una de las opciones</p>
                      <VariantSelector
                        variants={productShow?.types}
                        selectedVariant={tempCartProduct.type}
                        onSelectedVariand={ selectedVariant }
                      />                        
                    </div>
                    <div>
                      <p>Cantidad</p>
                      <ItemCounter
                        currentValue={tempCartProduct.quantity}
                        UpdatedQuantity={onUpdateQuantity}
                        maxValue={10}
                      />
                    </div>
                  </div>
                  <br />
                  <div>
                      <button
                        onClick={onAddProduct}
                      >Agregar Ahora</button>
                  </div>
              </div>
            
          </div>
        </div> 
      </ModalSimple>
    </div>
  );
};

//export const MenuInHOC = withCart(InternalContent)
export default InternalContent;
