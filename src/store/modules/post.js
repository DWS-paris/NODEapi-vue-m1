export default {
    state: {
        postAdded: false,
        postList: undefined,
        singlePost: undefined,
    },
    
    getters: {},

    mutations: {
        POSTADDED(state, payload){ state.postAdded = payload.data },
        POSTLIST(state, payload){ state.postList = payload.data },
        SINGLEPOST(state, payload){ state.singlePost = payload.data },
    },

    actions: {
        getPosts(context){
            fetch( 'http://localhost:6590/v1/post', {
                method: "GET"
            })
            .then( response => {
                return !response.ok
                ? console.log(response)
                : response.json(response)
            })
            .then( async apiResponse => {
                console.log(apiResponse)
                // Commit changes
                context.commit('POSTLIST', { data: apiResponse.data })
            })
            .catch( apiError => console.log(apiError))
        },

        getOnePost(context, id){
            fetch( `http://localhost:6590/v1/post/${id}`, {
                method: "GET"
            })
            .then( response => {
                return !response.ok
                ? console.log(response)
                : response.json(response)
            })
            .then( async apiResponse => {
                console.log(apiResponse)
                // Commit changes
                context.commit('SINGLEPOST', { data: apiResponse.data })
            })
            .catch( apiError => console.log(apiError))
        },

        addPost(context, data){
            // Fetch api/auth/login
            fetch( 'http://localhost:6590/v1/post', {
                method: "POST",
                body: JSON.stringify({ title: data.title, content: data.content }),
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
                context.commit('POSTADDED', { data: true })
            })
            .catch( apiError => console.log(apiError))
        }
    }
}