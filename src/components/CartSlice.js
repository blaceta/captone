import { createSlice } from '@reduxjs/toolkit';

// Función para cargar el estado inicial desde LocalStorage
const loadCartFromStorage = () => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartFromStorage(), // Recuperación de datos al iniciar
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
      // Persistencia: Guardar en LocalStorage cada vez que se añade un item
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
      // Persistencia: Actualizar LocalStorage al eliminar
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
      // Persistencia: Actualizar LocalStorage al cambiar cantidad
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
