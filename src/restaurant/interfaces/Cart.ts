export interface ITranslation {
    code: string;
    text: String;
  }
  
  export interface ICartItem {
    id?: string;
    name?: string;
    
    price?: number;        
    type?: string;
    imageUrl?: string;
    image?: string;
    description?: string;
    nameTranslations?: Array<ITranslation>;
    descriptionTranslations?: Array<ITranslation>;
    quantity: number;
  }