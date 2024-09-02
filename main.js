/*-----SHOP1-------*/

for (var i = 1; i < product1.length; i++) {
  document.getElementById("select1").innerHTML += `
    <option value="${i}">${product1[i].title}</option>
    `;
}

function item1(a) {
  var select2 = document.getElementById("select2").value;
  if (a != select2) {
    document.getElementById("img1").src = product1[a].image;
    document.getElementById("price1").innerHTML = product1[a].price;
    document.getElementById("desc1").innerHTML = product1[a].description;
    document.getElementById("brand1").innerHTML = product1[a].brand;
    document.getElementById("mobile1").innerHTML = product1[a].rateing;
  } else {
    document.getElementById("select1").selectedIndex = 0;
    document.getElementById("img1").src = product[0].image;
    document.getElementById("price1").innerHTML = "";
    document.getElementById("desc1").innerHTML = "";
    document.getElementById("brand1").innerHTML = "";
    document.getElementById("mobile1").innerHTML = "";
  }
}

/*-----SHOP2-------*/

for (var i = 1; i < product2.length; i++) {
  document.getElementById("select2").innerHTML += `
      <option value="${i}">${product2[i].title}</option>
      `;
}
function item2(a) {
  var select1 = document.getElementById("select1").value;
  if (i != select1) {
    document.getElementById("img2").src = product2[a].image;
    document.getElementById("price2").innerHTML = product2[a].price;
    document.getElementById("desc2").innerHTML = product2[a].description;
    document.getElementById("brand2").innerHTML = product2[a].brand;
    document.getElementById("mobile2").innerHTML = product1[a].rateing;
  } else {
    document.getElementById("select2").selectedIndex = 0;
    document.getElementById("img2").src = product[0].image;
    document.getElementById("price2").innerHTML = "";
    document.getElementById("desc2").innerHTML = "";
    document.getElementById("brand2").innerHTML = "";
    document.getElementById("mobile1").innerHTML = "";
  }
}
