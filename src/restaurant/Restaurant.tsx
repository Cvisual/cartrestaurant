import React from "react";
import { useNavigate } from "react-router";

import classes from "./restaurant.module.scss";

export const Restaurant = () => {

  const navigate = useNavigate();


  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          position: "relative",
          height: "40vh",
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
            backgroundColor: "black",
            width: "30%",
            border: "20px solid white",
            borderRadius: "20px",
            paddingTop: "80px",
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",  
            height: "80vh"       
          }}
        >
          <div 
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "50px"
            }}
          
          >
            <h1>Bienvenid@</h1>
            <p>Seleccione la opción que de su preferencia:</p>
            <div 
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "15px",
                paddingTop: "40px"
              }}
            >
              <button 
                style={{
                  display: "flex",
                  gap: "5px"
                }}
                onClick={()=> navigate("/menu/6d3869b") }
              >
                <span>Consumo en el lugar</span> 
                <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 18.2861H5.19202V25.2224H0V18.2861Z" fill="white"/>
                  <path d="M17.6108 18.2861C17.7114 18.5569 17.7667 18.8483 17.7667 19.1521C17.7667 20.5694 16.5724 21.7224 15.1045 21.7224H10.8754V20.0818H15.1045C15.6355 20.0818 16.0674 19.6647 16.0674 19.1521C16.0674 18.758 15.8117 18.4212 15.4524 18.2861H6.8916V25.2224H16.5059L24.0241 21.7444C24.9941 21.2957 25.6208 20.3348 25.6208 19.2963C25.6208 18.9394 25.5483 18.5986 25.4181 18.2861H17.6108Z" fill="white"/>
                  <path d="M29 16.6457V15.0051H27.3382C26.9931 12.2461 25.7121 9.69354 23.645 7.69766C21.4036 5.53368 18.4843 4.26258 15.3496 4.06756V2.41797H16.9167V0.777344H12.0834V2.41797H13.6504V4.06756C10.5157 4.26258 7.59636 5.53363 5.35503 7.69772C3.28793 9.69359 2.00695 12.2461 1.66184 15.0052H0V16.582V16.6457H29ZM23.4289 14.0358L21.7963 14.4906C21.1714 12.3993 19.6269 10.6952 17.559 9.81522L18.2443 8.31394C20.7742 9.39057 22.664 11.4761 23.4289 14.0358V14.0358Z" fill="white"/>
                  </svg>
              </button>
              <button
                style={{
                  display: "flex",
                  gap: "5px"
                }}
                onClick={()=> navigate("/menu/6d3869b") }
              >
                <span>Pedir domicilio</span>
                <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.3637 16.4915C25.3637 16.3931 25.3523 16.2946 25.324 16.2017H23.0357C23.0074 16.2946 22.9961 16.3931 22.9961 16.4915C22.9961 17.1204 23.5285 17.6345 24.1799 17.6345C24.8312 17.6345 25.3637 17.1204 25.3637 16.4915Z" fill="white"/>
                  <path d="M25.941 16.2017C25.958 16.2946 25.9693 16.3931 25.9693 16.4915C25.9693 17.4431 25.1707 18.2196 24.1795 18.2196C23.1939 18.2196 22.3896 17.4431 22.3896 16.4915C22.3896 16.3931 22.401 16.2946 22.418 16.2017H20.5941C20.5828 16.2946 20.5771 16.3931 20.5771 16.4915C20.5771 18.4056 22.1914 19.9696 24.1795 19.9696C26.1676 19.9696 27.7818 18.411 27.7818 16.4915C27.7818 16.3931 27.7762 16.2946 27.7648 16.2017H25.941Z" fill="white"/>
                  <path d="M28.9602 14.0854C28.4221 12.0236 26.6266 10.5307 24.4855 10.29C24.4346 10.9572 24.2023 11.6025 23.7889 12.1604L21.2344 15.6221H27.7311C28.5637 15.6221 29.1641 14.8619 28.9602 14.0854Z" fill="white"/>
                  <path d="M8.41113 17.2134H7.02344C7.14805 17.4595 7.41426 17.6345 7.71445 17.6345C8.02598 17.6345 8.28652 17.4649 8.41113 17.2134Z" fill="white"/>
                  <path d="M7.71973 18.2195C7.07969 18.2195 6.53594 17.793 6.38867 17.2188H4.54785C4.71777 18.7609 6.07715 19.9695 7.71406 19.9695C9.3623 19.9695 10.716 18.7609 10.8859 17.2188H9.05078C8.90352 17.793 8.35977 18.2195 7.71973 18.2195Z" fill="white"/>
                  <path d="M7.72558 11.8652C5.16543 11.8652 3.08105 13.8723 3.08105 16.3441C3.08105 16.5027 3.21699 16.634 3.38125 16.634H12.0643C12.2285 16.634 12.3645 16.5027 12.3645 16.3441C12.3645 13.8723 10.2801 11.8652 7.72558 11.8652Z" fill="white"/>
                  <path d="M14.0127 8.88984C14.6131 8.88984 15.0945 8.41953 15.0945 7.84531C15.0945 7.27109 14.6131 6.80078 14.0127 6.80078C11.2826 6.80625 11.3902 6.78984 11.209 6.81719L11.2146 8.87891C11.3959 8.90625 11.277 8.88437 14.0127 8.88984Z" fill="white"/>
                  <path d="M1.3707 15.272H0.838281C0.373828 15.272 0 15.6384 0 16.0813V16.5954C0 17.0438 0.379492 17.4103 0.838281 17.4103H1.3707C1.83516 17.4103 2.21465 17.0438 2.21465 16.5954V16.0813C2.21465 15.6384 1.83516 15.272 1.3707 15.272Z" fill="white"/>
                  <path d="M23.2963 11.8158C23.8627 11.0502 24.0383 10.0877 23.7721 9.17441L22.4184 4.52598C22.39 4.52598 19.9545 4.52598 19.8016 4.52598L19.8865 5.37363H19.4334C19.2691 5.37363 19.1332 5.50488 19.1332 5.66348C19.1332 5.82207 19.2691 5.95332 19.4334 5.95332H19.9488L20.0168 6.62598H19.558C19.3937 6.62598 19.2578 6.75723 19.2578 6.91582C19.2578 7.07441 19.3937 7.20566 19.558 7.20566H20.0734L20.3793 10.2244C20.4133 10.6018 20.2887 10.99 20.0338 11.2799L18.1703 13.3689C17.8928 13.6752 17.4906 13.8557 17.0658 13.8557H15.9387C15.14 13.8557 14.483 13.2268 14.483 12.4502V9.40957C14.3357 9.44785 14.1771 9.4752 14.0129 9.4752C13.9846 9.4752 5.71504 9.46973 4.81445 9.4752C4.34434 9.74863 3.9082 10.0658 3.50605 10.4213L2.93965 8.89004H10.6088C10.6088 8.89004 10.5975 4.89785 10.5918 2.4041H6.42871C6.26445 2.4041 6.12852 2.27285 6.12852 2.11426C6.12852 1.95566 6.26445 1.82441 6.42871 1.82441H10.5918C10.5861 1.00957 10.5861 0.451758 10.5861 0.446289C10.3539 0.194727 10.0197 0.0361328 9.6459 0.0361328H5.85098C2.98496 0.0361328 0.651367 2.28926 0.651367 5.05645V7.67051C0.651367 8.34316 1.21777 8.89004 1.91445 8.89004H2.29961L3.03594 10.8752C2.02773 11.9252 1.30273 13.2322 0.985547 14.6869H1.37637C1.88047 14.6869 2.32793 14.9385 2.58281 15.3158C3.07559 13.0135 5.19394 11.2744 7.72578 11.2744C10.6145 11.2744 12.9707 13.5439 12.9707 16.3385C12.9707 16.4424 12.9537 16.5354 12.9141 16.6283H18.0854C19.1219 16.6283 20.1018 16.1416 20.7021 15.3268L23.2963 11.8158ZM6.12852 5.88223C6.12852 5.51035 6.44004 5.20957 6.8252 5.20957H8.73398C9.11914 5.20957 9.43066 5.51035 9.43066 5.88223V6.79004C9.43066 7.16191 9.11914 7.4627 8.73398 7.4627H6.8252C6.44004 7.4627 6.12852 7.16191 6.12852 6.79004V5.88223Z" fill="white"/>
                  <path d="M6.825 6.87773H8.73379C8.78477 6.87773 8.82441 6.83945 8.82441 6.79023V5.88242C8.82441 5.8332 8.78477 5.79492 8.73379 5.79492H6.825C6.77402 5.79492 6.73438 5.8332 6.73438 5.88242V6.79023C6.73438 6.83945 6.77402 6.87773 6.825 6.87773Z" fill="white"/>
                  <path d="M17.2359 3.94092H18.0799V2.43701H17.2359C16.8055 2.43701 16.46 2.77061 16.46 3.18623C16.46 3.60186 16.8055 3.94092 17.2359 3.94092Z" fill="white"/>
                  <path d="M22.6105 3.68936C22.973 4.2417 23.6131 4.61357 24.3381 4.61357C24.5023 4.61357 24.6383 4.48232 24.6383 4.32373V0.949512C24.6383 0.785449 24.5023 0.659668 24.3381 0.659668C23.6131 0.659668 22.973 1.02607 22.6105 1.57842C22.4463 1.41982 22.2197 1.32686 21.9705 1.32686H19.3084C19.0648 1.32686 18.8439 1.41982 18.6797 1.56748V3.94639H21.9705C22.2197 3.94092 22.4463 3.84795 22.6105 3.68936Z" fill="white"/>
                  </svg>

              </button>
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
};