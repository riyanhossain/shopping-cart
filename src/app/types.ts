export interface IItem {
    id: string;
    category: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export interface IHistory extends IItem {
    type: string;
}

export interface IStore {
    bank_acc: number;
    cash: number;
    cart: IItem[];
    cart_total: number;
    history: IHistory[];
    addToCart: (item: IItem) => void;
    removeFromCart: (item: IItem) => void;
    removeAllFromCart: (item: IItem) => void;
}
