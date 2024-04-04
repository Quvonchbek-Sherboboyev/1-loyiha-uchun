let btn = document.querySelector(".btn"),
    user = document.querySelector(".user"),
    email = document.querySelector(".email"),
    pass = document.querySelector(".pass").value;


    btn.addEventListener("click", function() {
        let user = document.querySelector(".user").value;
        let email = document.querySelector(".email").value;
        let pass = document.querySelector(".pass").value;
        if (!/^[A-Z]/.test(user)) {
            alert("Username false !")
            return
        }
        if (pass.length < 7) {
            alert("Password length >>7 characters!");
            return;
        }
    }); // tekshiruv 

let sing = document.querySelector(".sing"),
    main = document.querySelector(".main"),
    nav = document.querySelector(".navbar"),
    java = document.querySelector(".java")

sing.addEventListener("click" , ()=>{
    main.style.display = "block"
    nav.style.display = "none"
    java.style.display = "none"
}) // Sign up
let uslug = document.querySelector(".cha2"),
    shifa = document.querySelector(".cha1"),
    kompaniy = document.querySelector(".cha3"),
    vaksini = document.querySelector(".cha4"),
    menyu = document.querySelector(".cha5"),
    box1 = document.querySelector(".box1"),
    box2 = document.querySelector(".box2"),
    box3 = document.querySelector(".box3"),
    box4 = document.querySelector(".box4"),
    box5 = document.querySelector(".box5"),
    box6 = document.querySelector(".box6"),
    box7 = document.querySelector(".box7"),
    box8 = document.querySelector(".box8"),
    box9 = document.querySelector(".box9")
    shifa.addEventListener("click" , ()=>{
      box1.style.display = "flex"
      box2.style.display = "block"
      box3.style.display = "block"
      box4.style.display = "flex"
      box5.style.display = "block"
      box6.style.display = "block"
      box7.style.display = "block"
      box8.style.display = "flex"
      box9.style.display = "block"
    })
  uslug.addEventListener("click" , ()=>{
    box1.style.display = "none"
    box2.style.display = "block"
    box3.style.display = "block"
    box4.style.display = "flex"
    box5.style.display = "none"
    box6.style.display = "none"
    box7.style.display = "none"
    box8.style.display = "none"
    box9.style.display = "none"
  });
  kompaniy.addEventListener("click" , ()=>{
    box1.style.display = "none"
    box2.style.display = "none"
    box3.style.display = "none"
    box4.style.display = "none"
    box5.style.display = "none"
    box6.style.display = "none"
    box7.style.display = "none"
    box8.style.display = "none"
    box9.style.display = "block"
  });
  vaksini.addEventListener("click", ()=>{
    box1.style.display = "none"
    box2.style.display = "none"
    box3.style.display = "none"
    box4.style.display = "none"
    box5.style.display = "none"
    box6.style.display = "block"
    box7.style.display = "block"
    box8.style.display = "none"
    box9.style.display = "none"
  });
  menyu.addEventListener("click" , ()=>{
    box1.style.display = "none"
    box2.style.display = "none"
    box3.style.display = "none"
    box4.style.display = "none"
    box5.style.display = "block"
    box6.style.display = "none"
    box7.style.display = "none"
    box8.style.display = "flex"
    box9.style.display = "none"
  });

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
} // accordion

$(function(){
  const swiper = new Swiper ('.slider1', {
    spaceBetween: 20,//何ピクセル画像の間隔をあけるか
    centeredSlides : true,//見切らせたい場合メイン画像をセンターにもってくるか
    // centerMode: true,
    // // centerPadding: '10%',
    slidesPerView: 1,//画像を何枚表示するか
    breakpoints: {//レスポンシブ ※小さい幅から指定する
      600: {
        slidesPerView: 2.5,
      },
      // 1200px以上の場合
      1200: {
        slidesPerView: 3.5,
      },
    },
    //自動再生する場合
    autoplay: {
      delay: 3000, //3秒後に次の画像に代わる
    },

    loop: true,//最後の画像までいったらループする

    //ページネーションをつける場合 ※HTMLと合わせる
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    //左右のナビゲーションをつける場合 ※HTMLと合わせる
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
    
  });

}); //swipper vrachi


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
}); //swipper3 uchun 








