const search = document.getElementById("search");

search.addEventListener("input", function() {
  const text = search.value.toLowerCase();
  const books = document.querySelectorAll("li");

  books.forEach(function(book) {
    if (book.textContent.toLowerCase().includes(text)) {
      book.style.display = "";
    } else {
      book.style.display = "none";
    }
  });
});
