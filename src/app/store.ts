import { create } from "zustand";
import { IItem, IStore } from "./types";
import isItemExistOnCart from "../lib/isItemExistOnCart";

const useStore = create<IStore>((set) => ({
    bank_acc: 5000000,
    cash: 400000,
    cart: [],
    cart_total: 0,
    history: [],

    // add item to cart
    addToCart: (item: IItem) => {
        // if item is not in cart
        if (!isItemExistOnCart(item)) {
            set((state) => ({
                cart: [
                    ...state.cart,
                    {
                        ...item,
                        quantity: 1,
                    },
                ],
                cart_total: state.cart_total + item.price,
            }));
            return;
        } else {
            // if item is in cart
            set((state) => ({
                cart: state.cart.map((i) => {
                    if (i.id === item.id) {
                        return {
                            ...i,
                            quantity: i.quantity + 1,
                        };
                    } else {
                        return i;
                    }
                }),
                cart_total: state.cart_total + item.price,
            }));
        }
    },

    // remove single item from cart
    removeFromCart: (item: IItem) => {
        // if item is in cart
        if (isItemExistOnCart(item)) {
            // if item quantity is equal to 1
            if (useStore.getState().cart.find((i) => i.id === item.id)?.quantity === 1) {
                set((state) => ({
                    cart: state.cart.filter((i) => i.id !== item.id),
                }));
            }

            set((state) => ({
                cart: state.cart.map((i) => {
                        if (i.id === item.id) {
                            return {
                                ...i,
                                quantity: i.quantity - 1,
                            };
                        } else {
                            return i;
                        }
                }),
                cart_total: state.cart_total - item.price,
            }));
        }
    },

    // remove all same item from cart
    removeAllFromCart: (item: IItem) => {
        set((state) => ({
            cart: state.cart.filter((i) => i.id !== item.id),
            cart_total: state.cart_total - item.price * item.quantity,
        }));
    },
}));

export default useStore;
