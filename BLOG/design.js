document.addEventListener("DOMContentLoaded", () => {
  console.log("GreenVoice homepage loaded.");
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const hero = document.querySelector(".hero");

  const heroBottom = hero.offsetTop + hero.offsetHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= heroBottom - 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("blogSearch");
  const searchBtn = document.getElementById("searchBtn");
  const blogCards = document.querySelectorAll(".blog-card");

  if (searchInput && searchBtn) {
    function filterBlogs() {
      const searchValue = searchInput.value.toLowerCase().trim();

      blogCards.forEach((card) => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const content = card.querySelector("p").textContent.toLowerCase();
        const tags = card.querySelector(".blog-tags").textContent.toLowerCase();
        const author = card.querySelector(".blog-author strong").textContent.toLowerCase();

        if (
          title.includes(searchValue) ||
          content.includes(searchValue) ||
          tags.includes(searchValue) ||
          author.includes(searchValue)
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    searchBtn.addEventListener("click", filterBlogs);
    searchInput.addEventListener("keyup", filterBlogs);
  }
});


  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbarblog");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  const navSearch = document.getElementById("navSearch");
const searchToggle = document.getElementById("searchToggle");
const homeSearchInput = document.getElementById("homeSearchInput");

searchToggle.addEventListener("click", function () {
  if (!navSearch.classList.contains("active")) {
    navSearch.classList.add("active");
    setTimeout(() => {
      homeSearchInput.focus();
    }, 200);
    return;
  }

  performHomeSearch();
});

function clearHighlights() {
  const highlights = document.querySelectorAll(".search-highlight");

  highlights.forEach((highlight) => {
    const parent = highlight.parentNode;
    parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
    parent.normalize();
  });
}

function highlightText(node, keyword) {
  if (node.nodeType === 3) {
    const text = node.nodeValue;
    const lowerText = text.toLowerCase();
    const lowerKeyword = keyword.toLowerCase();

    if (lowerText.includes(lowerKeyword) && text.trim() !== "") {
      const wrapper = document.createElement("span");
      const regex = new RegExp(`(${keyword})`, "gi");
      wrapper.innerHTML = text.replace(regex, '<span class="search-highlight">$1</span>');
      node.parentNode.replaceChild(wrapper, node);
    }
  } else if (
    node.nodeType === 1 &&
    node.tagName !== "SCRIPT" &&
    node.tagName !== "STYLE" &&
    node.tagName !== "INPUT" &&
    node.tagName !== "BUTTON"
  ) {
    Array.from(node.childNodes).forEach((child) => highlightText(child, keyword));
  }
}

function performHomeSearch() {
  const keyword = homeSearchInput.value.trim();

  clearHighlights();

  if (!keyword) {
    homeSearchInput.focus();
    return;
  }

  highlightText(document.body, keyword);

  const firstMatch = document.querySelector(".search-highlight");

  if (firstMatch) {
    firstMatch.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  } else {
    alert("No matches found.");
  }
}

homeSearchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    performHomeSearch();
  }
});

document.addEventListener("click", function (e) {
  if (!navSearch.contains(e.target)) {
    navSearch.classList.remove("active");
  }
});

