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
  
  export class Contact {
    name: string;
    username: string;
    email: string;
    address: {
      streetA: string;
      streetB: string;
      streetC: string;
      streetD: string;
      city: string;
      state: string;
      country: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
    posts: Post[];
    accountHistory: AccountHistory[];
    favorite: boolean;
    avatar: string;
    id: number;
  }
  