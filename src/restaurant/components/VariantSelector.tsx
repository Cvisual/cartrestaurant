import { Button, IconButton, Typography } from "@material-ui/core";
import React, { FC } from "react";
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { ItemCounter } from './ItemCounter';


interface Props {
  selectedVariant?: String;
  variants?: String[];
  
  // Methods Variant
  onSelectedVariand: ( variant: any  ) => void;

}

export const VariantSelector: FC<Props> = ({ selectedVariant, variants, onSelectedVariand }) => {
  //console.log(variants)

  return (
    <>
      { 
        variants?.map((variant, index) => (        
          <Button            
            key={ index }
            size="small"   
            variant="contained"         
            color={ selectedVariant === variant ? "primary" : "default" }
            style={{ marginRight: "5px" }}
            onClick={ () => onSelectedVariand( variant ) }
          >
            { variant }
          </Button>        
        ))
      }
    </>
  );
};