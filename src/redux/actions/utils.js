export const addRestaurant = (favorites, restaurant) => {
  const existingRestaurant = favorites.some(r => r.id===restaurant.id);

  if (existingRestaurant) {
    return [...favorites];
  }

  return [...favorites, restaurant];
};

export const deleteRestaurant = (favorites, id) => {
  const newfavorites = favorites.filter((r) => r.id !== id);
  return [...newfavorites];
};
