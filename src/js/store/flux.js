const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			vehicles: [], 
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch('https://www.swapi.tech/api/people')
				.then(response => response.json())
				.then(data => setStore({ characters: data.results }))

				fetch('https://www.swapi.tech/api/vehicles')
				.then(response => response.json())
				.then(data => setStore({ vehicles: data.results }))

				fetch('https://www.swapi.tech/api/planets')
				.then(response => response.json())
				.then(data => setStore({ planets: data.results }))
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}, 
			setFavorites : (item) => {
				const store = getStore();
				let isAlreadyFavorite = store.favorites.includes(item);

				if(!isAlreadyFavorite) {
					setStore({favorites: [...store.favorites, item]})
				}
			},
			deleteFavorites: (item) => {
				const store = getStore();
				let newFavorite = store.favorites.filter((element) => 
					element !== item
				);
				setStore({favorites: newFavorite})
				
			}
		}
	};
};

export default getState;
