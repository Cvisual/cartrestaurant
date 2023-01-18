import React,  {FC} from 'react'
import {IconButton, Typography } from "@material-ui/core";

import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


interface Props {
    currentValue: number;
    maxValue: number;

    // Methods
    UpdatedQuantity: (newValue: number) => void;
}

export const ItemCounter:FC<Props> = ({ currentValue, UpdatedQuantity, maxValue }) => {
    

    const addOrRemove = ( value: number ) => {
        if ( value === -1 ) {
            if ( currentValue === 1 ) return;
            return UpdatedQuantity( currentValue - 1);
        }

        if ( currentValue >= maxValue ) return;

        UpdatedQuantity( currentValue + 1 );
    }

    return(
        <div 
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}
          >
            <IconButton  onClick={ () => addOrRemove(-1) }>
                <RemoveCircleOutlineIcon />
            </IconButton>
            <Typography>{currentValue}</Typography>
            <IconButton onClick={ () => addOrRemove(+1) }>
                <AddCircleOutlineIcon />
            </IconButton>
        </div>
    )
}