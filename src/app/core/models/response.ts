export interface Response {
    message: string;
    code: number;
    data: Data;
}

export interface Data {
    user: User;
    transactions: Transaction[];
}

export interface Transaction {
    id: number;
    date: string;
    merchInvoice: string;
    merchant: string;
    location: Location;
    dodaac: string;
    tail: string;
    item: string;
    total: number;
    card: Card;
    status: number;
    isWarning: boolean;
    images: Image[];
    merchants: Merchant[];
    history: History[];
    expand: boolean;
    checked: boolean;
    disabled: boolean;
}

export interface History {
    id: number;
    description: string;
    date: string;
}

export interface Merchant {
    id: number;
    description: string;
    code: string;
    quantity: number;
    retailPrice: number;
    govPrice: number;
    amount: number;
}

export interface Image {
    id: number;
    name: string;
    url: string;
}

export interface Card {
    full: string;
    mask: string;
    last: string;
}

export interface Location {
    name: string;
    iata: string;
    icoa: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    profileImg: string;
    notifications: Notification[];
}

export interface Notification {
    id: number;
    status: number;
    notification: string;
}
