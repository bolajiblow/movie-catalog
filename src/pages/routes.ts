const routes = {
    login: '/',
    home : '/movies',
    search: '/movies/search/?q=:query',
    searchlink: (query:string) => `/movies/search/?q=${query}`,
    new_movie:'/movies/new-movie',
    each_movie :'/movies/:movie_id',
    each_movie_link: (movie_id:string) => `/movies/${movie_id}`,
}


export default routes