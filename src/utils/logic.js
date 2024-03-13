export const isPresentInFavorites = (favorites, restaurant) => {
  if (favorites && favorites.length > 0) {
    for (let item of favorites) {
      if (item.id === restaurant.id) {
        return true;
      }
    }
    return false;
  }
};

export const categorizeIngredients = (ingredients) => {
  return ingredients.reduce((acc, ingredient) => {
    const { category } = ingredient;
    if (!acc[category.name]) {
      acc[category.name] = [];
    }

    acc[category.name].push(ingredient);
    return acc;
  }, {});
};
