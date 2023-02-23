import React from "react";
const favoriteContext = React.createContext({
    favoritePokemones :[],
    updateFavoritePokemon : (id) => null

});

export const FavoriteProvider = favoriteContext.Provider;
export default favoriteContext;
