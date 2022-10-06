type GetStateProps = {
	getStore?: any,
	getActions?: any,
	setStore?: any
}

const getState = (props: GetStateProps) => {

    return {
        store: {
            competitors: [],
            posts: [],
            products: []
        },

        actions: {
            getCompetitors: () => {
                fetch('competitors.json',
                {
                    method: "GET",
                    headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    }
                })
                .then(function(response){
                    return response.json()
                })
                .then(function(myJson) {
                    console.log(myJson)
                    props.setStore({competitors: myJson})
                })
            },
            getProducts: () => {
                fetch('productos.json',
                {
                    method: "GET",
                    headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    }
                })
                .then(function(response){
                    return response.json()
                })
                .then(function(myJson) {
                    console.log(myJson)
                    props.setStore({products: myJson})
                })
            }
        }
    }
}

export default getState