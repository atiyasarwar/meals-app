import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    //variable starts with uppercase as this will be used as a component
    ids: [],
    addFavourite: (id) => { },
    removeFavourite: (id) => { },
});

function FavouritesContextProvider({ children }) {
    const [favouriteMealIds, setFavouriteMealIds] = useState([]);

    const addFavourite = (id) => {
        setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]); // add newly received id and append it after the previously existing ids
    };

    const removeFavourite = (id) => {
        setFavouriteMealIds((currentFavIds) =>
            currentFavIds.filter((mealId) => mealId !== id)
        );
    };

    const value = {
        ids: favouriteMealIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite
    }

    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>;
}

export default FavouritesContextProvider;
