declare global {
  export interface Student {
    id: number;
    uid: string;
    description: string;
    password: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    avatar: string;
    gender: string;
    phone_number: string;
    social_insurance_number: string;
    date_of_birth: string;
    employment: Employment;
    address: Address;
    credit_card: CreditCard;
    subscription: Subscription;
    brands: Brand[];
  }
  export interface Employment {
    title: string;
    key_skill: string;
  }
  export interface Address {
    city: string;
    street_name: string;
    street_address: string;
    zip_code: string;
    state: string;
    country: string;
    coordinates: Coordinates;
  }
  export interface Coordinates {
    lat: number;
    lng: number;
  }
  export interface CreditCard {
    cc_number: string;
  }
  export interface Subscription {
    plan: string;
    status: string;
    payment_method: string;
    term: string;
  }  
  export interface Brand {
    id: number;
    uid: string;
    brand: string;
    equipment: string;
  }  
}

export {};