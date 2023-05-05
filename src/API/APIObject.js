const  APIObject = {
    original: (imageName) => `https://image.tmdb.org/t/p/original${imageName}`,
    headers: () => {
       return {
            headers: {
                'Content-Type':'application/json'
            }
        }
    },
}

export default APIObject