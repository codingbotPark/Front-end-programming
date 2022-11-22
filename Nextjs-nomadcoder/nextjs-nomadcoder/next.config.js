/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;


`http://localhost:3000/api/movies`

const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source:"/old-blog/:path",
        destination:"/new-blog/:path",
        permanent:false
      },
    ];
  },
  async rewrites(){
    return [
      {
        source:"/api/movies",
        destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        source:"/api/movies/:id",
        destination:`https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ]
  }
  // async redirects(){
  //   return [
  //     {
  //       source:"/api/movies",
  //       destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  //       permanent:false
  //     }
  //   ]
  // }
}

module.exports = nextConfig



