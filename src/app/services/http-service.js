const httpService = {
    getAll: async (url) => {
        return await fetch(`https://library-website-fullstack.herokuapp.com/${url}`, {
            headers: {
              'x-session-token': sessionStorage.getItem('token')
            },
          })
            .then(res => res.json())
    },

    deleteRegister: async (url, id) => {
        return await fetch(`https://library-website-fullstack.herokuapp.com/${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'x-session-token': sessionStorage.getItem('token')
            }
        }).then(res => res.json())
    },
    post: async (url, data) => {
        return await fetch(`https://library-website-fullstack.herokuapp.com/${url}`, {
            method: 'POST',
            headers: {
              Accept: 'application/form-data',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          }).then(res => res.json());
    }    
}
  
export default httpService;