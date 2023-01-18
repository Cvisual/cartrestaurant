// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [    
       
    rest.get("https://stg.bistrom.co/api/menu/6d3869b", (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            uid: "6d3869b",
            name: "La Jamada",
            country: "CO",
            state: "meta",
            city: "villavicencio",
            address: "cra 32",
            phone: "31322",
            imageUrl:
              "https://bistrom-pro-files.s3-eu-west-1.amazonaws.com/6d3869b",
            facebookProfile: "facebook.com/lajamada",
            instagramProfile: "instagram.com/lajamada",
            twitterProfile: "twitter.com/lajamada",
            sections: [
              {
                name: "Bebidas",
                type: "uniquePrice",
                items: [
                  {
                    name: "Gaseosa",
                    position: 1,
                    price: 3,
                    price2: 0,
                    price3: 0,
                    active: true,
                    allergens: ["celery", "wheat"],
                    types: [],
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar velit odio, eget tincidunt magna congue eget. Aliquam erat volutpat.",
                    nameTranslations: [],
                    id: "R1QzCJ",
                  },
                  {
                    name: "Cerveza artesanal",
                    position: 0,
                    price: 5,
                    price2: 0,
                    price3: 0,
                    active: true,
                    allergens: ["celery", "lupin", "wheat"],
                    types: [],
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar velit odio, eget tincidunt magna congue eget. Aliquam erat volutpat.",
                    nameTranslations: [],
                    id: "9YwSEw",
                  },
                ],
                position: 1,
                active: true,
                translations: [],
                menuSections: [],
                id: "GOWv5T3Ux6",
              },
              {
                name: "Comidas",
                type: "threePrices",
                items: [
                  {
                    name: "Solomo",
                    position: 1,
                    price: 25,
                    price2: 35,
                    price3: 0,
                    active: true,
                    allergens: ["lupin", "fish", "sesame"],
                    types: ["vegetarian", "vegan"],
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar velit odio, eget tincidunt magna congue eget. Aliquam erat volutpat.",
                    nameTranslations: [],
                    id: "e7VZoc",
                  },
                  {
                    name: "Hamburguesa de pollo",
                    position: 0,
                    price: 10,
                    price2: 15,
                    price3: 30,
                    active: true,
                    allergens: [
                      "gluten",
                      "eggs",
                      "crustaceans",
                      "lupin",
                      "milk",
                      "sulphurdioxide",
                      "peanuts",
                      "soya",
                      "mustard",
                      "celery",
                      "treenut",
                      "fish",
                      "molluscs",
                      "wheat",
                      "sesame",
                    ],
                    types: ["vegetarian", "vegan"],
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar velit odio, eget tincidunt magna congue eget. Aliquam erat volutpat.",
                    nameTranslations: [],
                    id: "2Vq8fb",
                  },
                ],
                position: 0,
                active: true,
                translations: [],
                menuSections: [],
                id: "Xe46fLVi4O",
              },
            ],
          },
        ])
      );
    }),
    rest.get("https://stg.bistrom.co/api/restaurant/6d38692", (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          uid: "6d38692",
          name: "La Jamada",
          country: "CO",
          state: "meta",
          city: "villavicencio",
          address: "cra 32",
          phone: "31322",
          imageUrl:
            "https://bistrom-pro-files.s3-eu-west-1.amazonaws.com/6d3869b",
          facebookProfile: "facebook.com/lajamada",
          instagramProfile: "instagram.com/lajamada",
          twitterProfile: "twitter.com/lajamada",
          menu: "6d3869b",
        })
      );
    }),
    rest.get(
      "https://stg.bistrom.co/api/restaurant/6d38692/menu",
      (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json([
            {
              uid: "6d3869b",
              name: "La Jamada",
              country: "CO",
              state: "meta",
              city: "villavicencio",
              address: "cra 32",
              phone: "31322",
              imageUrl:
                "https://bistrom-pro-files.s3-eu-west-1.amazonaws.com/6d3869b",
              facebookProfile: "facebook.com/lajamada",
              instagramProfile: "instagram.com/lajamada",
              twitterProfile: "twitter.com/lajamada",
              sections: [
                {
                  name: "Bebidas",
                  type: "uniquePrice",
                  items: [
                    {
                      name: "Gaseosa",
                      position: 1,
                      price: 3,
                      price2: 0,
                      price3: 0,
                      active: true,
                      allergens: ["celery", "wheat"],
                      types: [],
                      description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar velit odio, eget tincidunt magna congue eget. Aliquam erat volutpat.",
                      nameTranslations: [],
                      id: "R1QzCJ",
                    },
                    {
                      name: "Cerveza artesanal",
                      position: 0,
                      price: 5,
                      price2: 0,
                      price3: 0,
                      active: true,
                      allergens: ["celery", "lupin", "wheat"],
                      types: [],
                      description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar velit odio, eget tincidunt magna congue eget. Aliquam erat volutpat.",
                      nameTranslations: [],
                      id: "9YwSEw",
                    },
                  ],
                  position: 1,
                  active: true,
                  translations: [],
                  menuSections: [],
                  id: "GOWv5T3Ux6",
                },
                {
                  name: "Comidas",
                  type: "threePrices",
                  items: [
                    {
                      name: "Solomo",
                      position: 1,
                      price: 25,
                      price2: 35,
                      price3: 0,
                      active: true,
                      allergens: ["lupin", "fish", "sesame"],
                      types: ["vegetarian", "vegan"],
                      description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar velit odio, eget tincidunt magna congue eget. Aliquam erat volutpat.",
                      nameTranslations: [],
                      id: "e7VZoc",
                    },
                    {
                      name: "Hamburguesa de pollo",
                      position: 0,
                      price: 10,
                      price2: 15,
                      price3: 30,
                      active: true,
                      allergens: [
                        "gluten",
                        "eggs",
                        "crustaceans",
                        "lupin",
                        "milk",
                        "sulphurdioxide",
                        "peanuts",
                        "soya",
                        "mustard",
                        "celery",
                        "treenut",
                        "fish",
                        "molluscs",
                        "wheat",
                        "sesame",
                      ],
                      types: ["vegetarian", "vegan"],
                      description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar velit odio, eget tincidunt magna congue eget. Aliquam erat volutpat.",
                      nameTranslations: [],
                      id: "2Vq8fb",
                    },
                  ],
                  position: 0,
                  active: true,
                  translations: [],
                  menuSections: [],
                  id: "Xe46fLVi4O",
                },
              ],
            },
          ])
        );
      }
    ),
  ];
  