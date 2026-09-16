export interface Offer {
  uri: string;
  date: string;
  title: string;
  desc: string;
}

export interface User {
  id: string;
  account_data: {
    username: string;
    mail: string;
    profile: {
      bio: string;
      usrIMG: string;
    };
    address: {
      firstname: string;
      lastname: string;
      birthday: string;
      address: string;
      zip: number;
      city: string;
    };
  };
  current_offers: Offer[];
  enquiries?: Enquiry[];
}

export interface Enquiry {
  sender: string;
  date: string;
  title: string;
  message: string;
}

export interface SearchResult {
  offer: Offer;
  user: User;
}

export interface UserData {
  code: number;
  route: string;
  createdAt: string;
  users: User[];
}
