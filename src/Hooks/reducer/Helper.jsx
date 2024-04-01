export const addToCart = (items, productToAdd) => {
  const existingCartItemIndex = items.findIndex(
    (item) => item.product._id === productToAdd._id
  );

  if (existingCartItemIndex !== -1) {
    const updatedItems = [...items];
    updatedItems[existingCartItemIndex].quantity += 1;
    return updatedItems;
  } else {
    return [...items, { product: productToAdd, quantity: 1 }];
  }
};
