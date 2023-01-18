export enum menuType {
    TYPE1 = "uniquePrice",
    TYPE2 = "twoPrices",
    TYPE3 = "threePrices",
    TYPE4 = "dailyMenu",
  }
  
  export interface IMenu {
    [x: string]: any;
    name: string;
    url: string;
    country: string | null;
    state: string | null;
    city: string | null;
    address: string;
    phone: string;
    sections: Array<ISection | IDailyMenuSection>;
    imageUrl?: string;
    image?: string;
    uid?: string;
    facebookProfile?: string;
    twitterProfile?: string;
    instagramProfile?: string;
    language: string;
    color1?: string;
    color2?: string;
    color3?: string;
    imageBannerUrl?: string;
    imageBanner?: string;
    currency?: string;
    alternativeLanguage?: string[];
  }
  
  export interface IColumnTitle {
    name: string;
    translations?: Array<ITranslation>;
  }
  
  export interface ISection {
    id: string;
    name: string;
    type: menuType;
    items?: Array<IItemMenu>;
    headers?: Array<IColumnTitle>;
    position: number;
    active: boolean;
    image?: string;
    translations?: Array<ITranslation>;
  }
  
  export interface IDailyMenuSection {
    id: string;
    name: string;
    type: menuType;
    menuSections: Array<IMenuSections>;
    position: number;
    active: boolean;
    price: number;
    image?: string;
    translations?: Array<ITranslation>;
  }
  
  export interface IMenuSections {
    id: string;
    name: string;
    items: Array<IItemDailyMenu>;
    position: number;
    active: boolean;
    translations?: Array<ITranslation>;
  }
  
  export interface IItemDailyMenu {
    id: string;
    name: string;
    position: number;
    active: boolean;
    allergens?: string[];
    types?: string[];
    type?: string;
    imageUrl?: string; //have to add thos to avoid TS error
    image?: string; //have to add thos to avoid TS error
    description?: string;
    nameTranslations?: Array<ITranslation>;
    descriptionTranslations?: Array<ITranslation>;
  }
  
  export interface ITranslation {
    code: string;
    text: String;
  }
  
  export interface IItemMenu {
    id: string | undefined;
    name: string;
    position: number;
    price: number;
    price2: number;
    price3: number;
    active: boolean;
    allergens?: string[];
    types?: string[];
    type?: string;
    imageUrl?: string;
    image?: string;
    imageThumb: string | undefined;
    description?: string;
    nameTranslations?: Array<ITranslation>;
    descriptionTranslations?: Array<ITranslation>;
  }
  
  export interface IQR {
    name: string;
    uid: string;
    url: string;
  }
  