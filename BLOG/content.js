const searchToggle = document.getElementById("searchToggle");
const searchWrap = document.getElementById("searchWrap");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchToggle.addEventListener("click", () => {
  searchWrap.classList.toggle("active");

  if (searchWrap.classList.contains("active")) {
    searchInput.focus();
  }
});

function performSearch() {
  const searchValue = searchInput.value.trim().toLowerCase();

  if (searchValue === "") {
    alert("Please enter something to search.");
    return;
  }

  if (
    searchValue.includes("nature") ||
    searchValue.includes("environment") ||
    searchValue.includes("green") ||
    searchValue.includes("blog")
  ) {
    alert("Search matched: " + searchValue);
  } else {
    alert("No results found for: " + searchValue);
  }
}

searchBtn.addEventListener("click", performSearch);

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    performSearch();
  }
});