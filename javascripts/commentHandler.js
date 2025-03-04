export function initializeComments() {
  document.addEventListener("click", function (event) {
      if (event.target.classList.contains("comment-btn")) {
          const movieId = event.target.getAttribute("data-movie-id");
          const commentInput = document.getElementById(`comment-${movieId}`);
          const commentList = document.getElementById(`comment-list-${movieId}`);
          
          if (commentInput.value.trim() !== "") {
              const newComment = document.createElement("li");
              newComment.textContent = commentInput.value;
              commentList.appendChild(newComment);
              commentInput.value = "";
          }
      }
  });
}