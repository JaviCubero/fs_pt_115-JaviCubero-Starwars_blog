export const initialStore = () => {
  return {
    characters: [],
    vehicles: [],
    planets: [],
    details: {},
    favorites: {
      characters: [],
      vehicles: [],
      planets: []
    }
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'getCharacters':
      return {
        ...store,
        characters: action.payload
      };
    case 'getVehicles':
      return {
        ...store,
        vehicles: action.payload
      };
    case 'getPlanets':
      return {
        ...store,
        planets: action.payload
      };
    case 'getDetails':
      return {
        ...store,
        details: action.payload
      };
    case 'addFavorite':
      const { typeAdd, payloadAdd } = action.payload;

      return {
        ...store,
        favorites: {
          ...store.favorites,
          [typeAdd]: [...store.favorites[typeAdd], payloadAdd]
        }
      };
    case 'deleteFavorite':
      const { typeDelete, uidDelete } = action.payload;

      return {
        ...store,
        favorites: {
          ...store.favorites,
          [typeDelete]: store.favorites[typeDelete].filter(item => item.uid !== uidDelete)
        }
      };
    default:
      throw Error('Unknown action.');
  }
}
