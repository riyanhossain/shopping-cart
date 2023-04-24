import useStore from "../app/store";
import { IItem } from "../app/types";

const isItemExistOnCart = (item: IItem) => {
    const { cart } = useStore.getState();
    return cart.find((i) => i.id === item.id);
};

export default isItemExistOnCart;
