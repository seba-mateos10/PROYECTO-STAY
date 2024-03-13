import { Cart } from "../components/pages/cartCompra/Cart";
import { CheckoutContainer } from "../components/pages/checkout/CheckoutContainer";
import { ItemDetailContainer } from "../components/pages/itemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "../components/pages/itemListContainer/ItemListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:category",
    Element: ItemListContainer,
  },
  {
    id: "detail",
    path: "/item/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
];
