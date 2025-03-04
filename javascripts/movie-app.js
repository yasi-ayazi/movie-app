import { initializeComments } from "./commentHandler.js";

const movies = [
  {
    id: 1,
    title: "Interstellar",
    description:
      "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    movie_year: 2014,
    director: "Christopher Nolan",
    actors: [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Michael Caine",
      "Casey Affleck",
      "Mackenzie Foy",
      "John Lithgow",
      "Ellen Burstyn",
      "Matt Damon",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    price: "120.00",
    genre: "Sci-Fi",
    rating: 8.7,
  },
  {
    id: 2,
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    movie_year: 1972,
    director: "Francis Ford Coppola",
    actors: [
      "Marlon Brando",
      "Al Pacino",
      "James Caan",
      "Diane Keaton",
      "Robert Duvall",
      "Talia Shire",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    price: "150.00",
    genre: "Crime, Drama",
    rating: 9.2,
  },
  {
    id: 3,
    title: "Parasite",
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    movie_year: 2019,
    director: "Bong Joon-ho",
    actors: [
      "Song Kang-ho",
      "Lee Sun-kyun",
      "Cho Yeo-jeong",
      "Choi Woo-shik",
      "Park So-dam",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    price: "110.00",
    genre: "Thriller, Drama",
    rating: 8.6,
  },
  {
    id: 4,
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    movie_year: 1994,
    director: "Quentin Tarantino",
    actors: [
      "John Travolta",
      "Uma Thurman",
      "Samuel L. Jackson",
      "Bruce Willis",
      "Harvey Keitel",
      "Tim Roth",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    price: "130.00",
    genre: "Crime, Drama",
    rating: 8.9,
  },
  {
    id: 5,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    movie_year: 2008,
    director: "Christopher Nolan",
    actors: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhaal",
      "Gary Oldman",
      "Morgan Freeman",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    price: "140.00",
    genre: "Action, Crime, Drama",
    rating: 9.0,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const moviesContainer = document.getElementById("movies-container");

  // Function to create movie elements
  function createMovieCard(movie) {
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");
      movieCard.innerHTML = `
          <img src="${movie.poster_url}" alt="${movie.title}" class="movie-post
          <div class="movie-info">
          <div class="movie-title">${movie.title}</div>
          <div class="movie-date">Released: ${movie.movie_year}</div>
          <div class="movie-rating" id="rating-${movie.id}">${movie.rating}★</div>
          </div>

            <div class="comment-section">
                <input type="text" id="comment-${movie.id}" placeholder="Add a comment" class="comment-input">
                <button class="comment-btn" data-movie-id="${movie.id}">Submit</button>
                <ul id="comment-list-${movie.id}" class="comment-list"></ul>
            </div>
      `;

      moviesContainer.appendChild(movieCard);
  }

  // Render movies
  movies.forEach(movie => {
      createMovieCard(movie);
  });

  // Initialize imported functions
  initializeComments();

});
