// const hamberger = document.querySelector(".hamberger");
// const closeBtn = document.querySelector(".close-btn");
// const sidenav = document.querySelector(".sidenav");

// hamberger.onclick = () => {
//   console.log("Hamburger clicked");
//   sidenav.style.width = "250px"; // เปิดเมนู
// };

// closeBtn.onclick = () => {
//   console.log("Close button clicked");
//   sidenav.style.width = "0"; // ปิดเมนู
// };
// เลือก Hamburger และ Sidenav
const hamberger = document.querySelector(".hamberger");
const sidenav = document.querySelector(".sidenav");

// สถานะของ Sidenav (เปิด/ปิด)
let isOpen = false;

// ฟังก์ชันเปิด/ปิด Sidenav
hamberger.onclick = () => {
  if (isOpen) {
    // หาก Sidenav เปิดอยู่ ให้ปิด
    sidenav.style.width = "0";
    isOpen = false; // เปลี่ยนสถานะเป็นปิด
  } else {
    // หาก Sidenav ปิดอยู่ ให้เปิด
    sidenav.style.width = "250px";
    isOpen = true; // เปลี่ยนสถานะเป็นเปิด
  }
};
