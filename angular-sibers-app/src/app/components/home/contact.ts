export class Post {
    words: string[];
    sentence: string;
    sentences: string;
    paragraph: string;
  }
  
  export class AccountHistory {
    amount: string;
    date: string;
    business: string;
    name: string;
    type: string;
    account: number;
  }

  export class Address {
    streetA: string;
    streetB: string;
    streetC: string;
    streetD: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;  
    geo: Geo;
  }

  export class Geo {
    lat: string;
    lng: string;
  }

  export class Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  
  export class Contact {
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
    posts: Post[];
    accountHistory: AccountHistory[];
    favorite: boolean;
    avatar: string;
    id: number;
  }
  