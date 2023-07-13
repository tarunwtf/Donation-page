/////////////////////////////////////////////////////////////////////////////
//////////////////////////CAROUSEL//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

const images = [
    "men1.jpg",
    "men2.jpg",
    "men3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTguUZq4z4gXbiCurcDe9XIAflKYOHbHu71SS7mEjh68TsLBTLT6JGcoGbLA5yT8ouBNfI&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvo1hbrezVIcbfHJwNxfO6BqY0ryiB_NNXGt-kZJ8lpqd1nCYtHEwvbIYPKB55d_Bs3b0&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhSEIzmXrK1xHp0k8oNWsZwKhYA0xCpcwdQaiHd73XUISkuFqmZ00SMwB25Rkd3H3sb7c&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMa8zLmcCRgfKh6JVqsk5AuHejvgoanRcsxNUyTBIEJAZ6w9Hc0wtPYkdLtw1N94KfdIE&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9lrBLA6BkgggbDbsCV_Pla3F3fIRioSC9fpV7dmwi7QlduQ36KpEs10HAOxX-ILV-Nc&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzM9cv0hQ5YYeaS_TWD77bce2Al5q0piHh3XWd24yqIZ3m4LcX8vOAnvxa1LpZrlJJjB0&usqp=CAU",
  ];
  const carousel = document.querySelector(".carousel");
  const interval = setInterval(function () {
    startCarousel();
  }, 3000);
  
  var index = 1;
  
  startCarousel = () => {
    //carousel.style.backgroundImage = 'url(${images[index++]})';
    carousel.style.backgroundImage =`url(${images[index++]})`;
    carousel.classList.remove("fade");
    void carousel.offsetWidth;
    carousel.classList.add("fade");
    if (index > images.length - 1) index = 0;
  };
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////