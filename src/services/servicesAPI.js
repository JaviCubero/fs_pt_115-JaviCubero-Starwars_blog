export const getCharacters = async (store, dispatch) => {
    const response = await fetch("https://www.swapi.tech/api/people");

    if (response.ok) {
        const data = await response.json();
        if (JSON.stringify(data.results) !== JSON.stringify(store.characters)) {
            dispatch({ type: "getCharacters", payload: data.results});
		}
        return data;
    } else {
        console.log("Error ", response.status, response.statusText);
        return { error: { status: response.status, statusText: response.statusText } };
    };
};

export const getVehicles = async (store, dispatch) => {
    const response = await fetch("https://www.swapi.tech/api/vehicles");

    if (response.ok) {
        const data = await response.json();
        if (JSON.stringify(data.results) !== JSON.stringify(store.vehicles)) {
            dispatch({ type: "getVehicles", payload: data.results});
		}
        return data;
    } else {
        console.log("Error ", response.status, response.statusText);
        return { error: { status: response.status, statusText: response.statusText } };
    };
};

export const getPlanets = async (store, dispatch) => {
    const response = await fetch("https://www.swapi.tech/api/planets");

    if (response.ok) {
        const data = await response.json();
        if (JSON.stringify(data.results) !== JSON.stringify(store.planets)) {
            dispatch({ type: "getPlanets", payload: data.results});
		}
        return data;
    } else {
        console.log("Error ", response.status, response.statusText);
        return { error: { status: response.status, statusText: response.statusText } };
    };
};

export const getDetails = async (store, dispatch, type, id) => {
    const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);

    if (response.ok) {
        const data = await response.json();
        //if (JSON.stringify(data.results) !== JSON.stringify(store.characters)) {
        //    dispatch({ type: "getCharacters", payload: data.results});
		//}
        return data;
    } else {
        console.log("Error ", response.status, response.statusText);
        return { error: { status: response.status, statusText: response.statusText } };
    };
};