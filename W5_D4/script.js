function changeH1() {
  let myH1 = document.querySelector("h1");
  myH1.innerText = "Sono stato modificato";
  //   console.log(myH1);
}

function changeBody() {
  let myBody = document.querySelector("body");
  myBody.style.backgroundColor = "grey";
  //   console.log(myBody);
}

function changeAddress() {
  let myFooter = document.getElementById("address");
  myFooter.innerText = "Via Don Peppone 69";
  //   console.log(myFooter);
}

function changeA() {
  let myA = document.querySelectorAll("table a"); //ricordarsi di questa sintassi
  for (let index = 0; index < myA.length; index++) {
    myA[index].classList.add("items");
  }
  //   console.log(myA);
}

function changeImg() {
  let myImg = document.querySelectorAll("table img");
  for (let index = 0; index < myImg.length; index++) {
    myImg[index].classList.toggle("imageClass");
  }
  //   console.log(myImg);
}

function changePriceColor() {
  let myPrice = document.getElementsByClassName("price");
  let colors = ["red", "blue", "green", "yellow", "pink"];
  let randomColor = Math.floor(Math.random() * colors.length);
  for (let index = 0; index < myPrice.length; index++) {
    myPrice[index].style.color = colors[randomColor];
  }

  //   console.log(myPrice);
}
