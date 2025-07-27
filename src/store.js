export const initialStore=()=>{
  return{
    characters: [],
    vehicles: [],
    planets: [],
    details: {}
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
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
    default:
      throw Error('Unknown action.');
  }    
}
