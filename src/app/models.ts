export interface SKU {
  name: string;
  code: string;
};

export interface Weather {
  cityName: string;
  temp: number;
};

export interface FormData {
  name: string;
  password: string;
  email: string;
  gender: string;
  dob: string;
  address: string;
  country: string;
  contact: string;
};


export const globalStorage: SKU[] = [];
