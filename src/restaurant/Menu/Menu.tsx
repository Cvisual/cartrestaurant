import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import classes from "./menu.module.scss";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LanguageIcon from "@material-ui/icons/Language";
import PhoneIcon from "@material-ui/icons/Phone";
import TuneIcon from "@material-ui/icons/Tune";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import PersonIcon from "@material-ui/icons/Person";
import { VariantSelector } from '../components/VariantSelector';
import withCart from "../HOC/withCart";
import Loading from "../components/Loading/Loading";

import Data  from "../data/Menu.json"

import InternalContent from "./InternalContent/Internalcontent";


const Menu = () => {
  const navigate = useNavigate();

  {/* peticion menu*/}
  
  return Data && <InternalContent menu={Data} />
};


export const MenuInHOC = withCart(Menu)
