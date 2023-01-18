import React, { FC, useState } from 'react'
import { VariantSelector } from '../components/VariantSelector'
import { ItemCounter } from '../components/ItemCounter'
import { ICartItem } from '../interfaces'
import { IItemMenu } from '../interfaces/Menu';


interface Product {
    image: string,
    name: string,
    types: string[]
    quantity: number,
    maxValueP: number
}

interface dataP {    
    name: string;    
    price: number;
    price2: number;
    price3: number;
    active: boolean;
    types?: string[];
    image?: string;
}

export const ProductItem: FC<dataP> = (item  ) => {
    
    console.log(item)

    
    const [tempCartProduct, setTempCartProduct] = useState<ICartItem>({
        id: "",
        name: "",
        price: 0,
        type: "",
        image: "",
        quantity: 1,
      });
    
      const selectedVariant = (variant: any) => {
        console.log("variant", variant);
        setTempCartProduct((currentProduct) => ({
          ...currentProduct,
        }));
      };
    
      const onUpdateQuantity = (quantity: number) => {
        console.log("quantity", quantity);
        setTempCartProduct( currentProduct => ({
            ...currentProduct,
            quantity
        }));
      };
    
      const onAddProduct = () => {
        console.log({ tempCartProduct });
      };

  return (
    <>
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
        <img src={item.image} alt={item.name} />
      </div>
      <div
        style={{
          color: "black",
          width: "80%",
        }}
      >
        <h2>{item.name}</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
            }}
          >
            <VariantSelector
              //selectedVariant={item.types[0]}
              variants={item.types}
              onSelectedVariand={(item) => selectedVariant(item)}
            />
            <ItemCounter
              currentValue={tempCartProduct.quantity}
              UpdatedQuantity={onUpdateQuantity}
              maxValue={10}
            />
          </div>
          {/* <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    marginTop: "10px"
                }}
                >
                <button>Agregar</button>
                <button
                onClick={()=> navigate("/product/6d3869b" )}
                >                    
                Ver                  
                </button>
            </div> */}
        </div>
      </div>
    </>
  );
}
