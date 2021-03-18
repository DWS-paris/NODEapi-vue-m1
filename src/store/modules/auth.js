export default {
    state: {
        isAuth: false,
        user: undefined
    },
    
    getters: {
        isAuthenticated: (state) => !!state.user,
        getUser: (state) => state.user 
    },

    mutations: {
        ISAUTH( state, payload ){ state.user = payload.data },
        USER( state, payload ){ state.user = payload.data },
    },

    actions: {
        logUser(context, data){
            // Fetch api/auth/login
            fetch( 'http://localhost:6590/v1/auth/login', {
                method: "POST",
                body: JSON.stringify({ email: data.email, password: data.password }),
                headers: { 
                    'Content-Type': 'application/json'
                },
                credentials: "include"
            })
            .then( response => {
                return !response.ok
                ? console.log(response)
                : response.json(response)
            })
            .then( async apiResponse => {
                console.log(apiResponse)
                // Commit changes
                await context.commit('USER', { data: apiResponse.data })
                await context.commit('ISAUTH', { data: true })
            })
            .catch( apiError => console.log(apiError))
        },

        checkUser(context){
            
            // Fetch api/auth/login
            fetch( 'http://localhost:6590/v1/auth/me', {
                method: "GET",
                credentials: "include"
            })
            .then(async response => {
                // Check response
                if(!response.ok){
                    console.log(response)
                    await context.commit('USER', { data: undefined })
                    await context.commit('ISAUTH', { data: false })
                }
                else{ return response.json(response) } 
            })
            .then(  async apiResponse => {
                // Check apiResponse
                if( apiResponse !== undefined ){
                    // Commit changes
                    await context.commit('USER', { data: apiResponse })
                    await context.commit('ISAUTH', { data: true })
                }
                else{
                    await context.commit('USER', { data: undefined })
                    await context.commit('ISAUTH', { data: false })
                }
                
            })
            .catch( apiError => console.log(apiError))
        }
    }
}