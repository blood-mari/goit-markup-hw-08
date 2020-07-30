(() => {
  const refs = {
    openDropBtn: document.querySelector("[data-drop-button]"),
    closeDropBtn: document.querySelector("[data-drop-close]"),
    drop: document.querySelector("[data-drop]"),
  };

  refs.openDropBtn.addEventListener("click", toggleDrop);
  refs.closeDropBtn.addEventListener("click", toggleDrop);

  function toggleDrop() {
    refs.drop.classList.toggle("is-hidden");
  }
})();

// (() => {
//   const menuBtnRef = document.querySelector("[data-drop-button]");
//   const mobileMenuRef = document.querySelector("[data-menu]");

//   menuBtnRef.addEventListener("click", () => {
//     const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//     menuBtnRef.classList.toggle("is-hidden");
//     menuBtnRef.setAttribute("aria-expanded", !expanded);

//     mobileMenuRef.classList.toggle("is-hidden");
//   });
// })();
