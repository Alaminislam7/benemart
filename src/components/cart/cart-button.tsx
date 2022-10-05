import CartIcon from "@/components/icons/cart-icon";
import { useUI } from "@/contexts/ui.context";

const CartButton = () => {
  const { openCart } = useUI();
  function handleCartOpen() {
		return openCart();
	}

  return (
    <button
      className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
      onClick={handleCartOpen}
      aria-label="cart-button"
    >
      <CartIcon />
      0
    </button>
  )
}

export default CartButton;