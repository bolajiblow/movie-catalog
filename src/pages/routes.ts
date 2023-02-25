const routes = {
    login: '/',
    home : '/movies',
    new_movie:'/movies/new-movie',
    each_movie :'/movies/:movie_id',
    each_movie_link: (movie_id:string) => `/movie/${movie_id}`,
}


export default routes