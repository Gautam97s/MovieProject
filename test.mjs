const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjZjOGViMWI1MTgyMDYwMDM2YTMwZGM5ZTI0NWVmNSIsIm5iZiI6MTc0NjAyNzA1NS44MjgsInN1YiI6IjY4MTI0MjJmNTViYjQwY2ExMzU2N2FmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.40xFE6Jfnm42BfAUQlmE3toTT0qjlYsyYFO6Y6nD5G4';

const response = await fetch('https://api.themoviedb.org/3/movie/popular', {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
});

const data = await response.json();
console.log(data);
