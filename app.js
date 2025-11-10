// Sample property data
const properties = [
  {
    id: 1,
    name: "Cozy Beachfront Villa",
    location: "Goa, India",
    price: 4500,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 2,
    name: "Mountain Cabin Retreat",
    location: "Manali, India",
    price: 3000,
    image: "https://images.unsplash.com/photo-1499696010181-5a1e94a4b0b0?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 3,
    name: "Luxury Apartment",
    location: "Mumbai, India",
    price: 7000,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 4,
    name: "Desert Glamping Tent",
    location: "Jaisalmer, India",
    price: 2800,
    image: "https://images.unsplash.com/photo-1615874959474-d60983ec3b51?auto=format&fit=crop&w=800&q=60"
  }
];

const grid = document.getElementById("propertyGrid");
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

// Render property cards
function renderProperties(list) {
  grid.innerHTML = "";
  if (list.length === 0) {
    grid.innerHTML = `<p>No properties found.</p>`;
    return;
  }
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "property-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" data-img="${p.image}">
      <div class="property-info">
        <h3>${p.name}</h3>
        <p>${p.location}</p>
        <div class="price">₹${p.price} / night</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Search
function handleSearch() {
  const q = searchInput.value.toLowerCase();
  const filtered = properties.filter(p =>
    p.name.toLowerCase().includes(q) || p.location.toLowerCase().includes(q)
  );
  renderProperties(filtered);
}

// Modal Gallery
const modal = document.getElementById("galleryModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

grid.addEventListener("click", (e) => {
  if (e.target.dataset.img) {
    modalImg.src = e.target.dataset.img;
    modal.classList.remove("hidden");
  }
});

closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

// Init
renderProperties(properties);
searchBtn.addEventListener("click", handleSearch);
searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") handleSearch();
});
