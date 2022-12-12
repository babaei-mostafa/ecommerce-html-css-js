// const createNav = () => {
//   let nav = document.querySelector(".navbar");

//   nav.innerHTML = `
//   <div class="nav">
//     <img src="img/dark-logo.png" class="brand-logo" alt="logo">
//     <div class="nav-items">
//       <div class="search">
//         <input type="text" class="search-box" placeholder="search brand, product">
//         <button class="search-btn">search</button>
//       </div>
//       <a href="#"><img src="img/user.png" alt=""></a>
//       <a href="#"><img src="img/cart.png" alt=""></a>
//     </div>
//   </div>
//   <ul class="links-container">
//     <li class="link-item"><a href="#" class="link">home</a></li>
//     <li class="link-item"><a href="#" class="link">women</a></li>
//     <li class="link-item"><a href="#" class="link">men</a></li>
//     <li class="link-item"><a href="#" class="link">kids</a></li>
//     <li class="link-item"><a href="#" class="link">accessories</a></li>
//   </ul>
//   `;
// };

// createNav();

document.querySelector(".hamburger-bars").addEventListener("click", () => {
  document.querySelector(".hamburger-icon").classList.toggle("open");
});

const showSearch = () => {
  document.querySelector(".secondSearch").classList.add("show");
};

document.querySelector("nav").addEventListener("mouseleave", () => {
  document.querySelector(".secondSearch").classList.remove("show");
});

document.getElementById("user-logo").addEventListener("click", async () => {
  const { value: email } = await Swal.fire({
    title: "شماره موبایل تان را وارد کنید",
    input: "text",
    inputPlaceholder: "09127095028",
  });

  if (email) {
    Swal.fire(`شماره موبایل شما: ${email}`);
  }
});
