const add_food = document.getElementById("add_food");
const wrapper = document.getElementsByClassName("landingWrapper");

function search() {
  const input = document.getElementById("search").value.toLowerCase();
  const food = document.getElementsByClassName("food");
  const h3 = document.getElementsByTagName("h3");
  
  for (let i = 0; i < h3.length; i++) {
    const a = food[i].getElementsByTagName("h3")[0];
    const value = a.innerHTML;

    if (value.toLowerCase().indexOf(input) > -1) {
      food[i].style.display = "";
    } else {
      food[i].style.display = "none";
    }
  }

  const matchingItems = document.querySelectorAll('.food[style="display:"]');
  if (matchingItems.length === 0) {
    wrapper.innerHTML = `<h2 style="font-size: 40px;">No items</h2>`;
  } else {
    wrapper.innerHTML = "";
  }
}

var food_name = document.getElementById("name")
var food_price = document.getElementById("foodPrice");
var food_iteam = document.getElementById("foodIteam");
var food_order = document.getElementById("foodOrder");

function add() {
  if (food_name) {
    wrapper.innerHTML += `
    <div class="card food">
      <img class="foodImg"
      src=""
      alt="..."
      />
      <h3>${food_name.value}</h3>
      <p>
      <i class="fa-solid fa-star"></i>
      5
      </p>
      <div class="gallery">
      <div class="item">
      <p class="grey">Price</p>
      <h6>$ ${food_price.value}</h6>
      </div>
      <div class="iteam">
      <p class="grey">Iteam</p>
      <h6>${food_iteam.value}</h6>
      </div>
        <div class="item">
        <p class="grey">Order</p>
        <h6>${food_order.value}</h6>
        </div>
        </div>
        </div>
        `;
  } else {

  }
}
// function added() {
//   for (const i = 0; i < food.length; i++) {
//     const element = food[i];
//     if (food_name) {
//       wrapper.innerHTML += `   
//       <div class="card food">
//       <img class="foodImg"
//       src=""
//       alt="..."
//       />
//       <h3>${element.food_name.value}</h3>
//       <p>
//       <i class="fa-solid fa-star"></i>
//     5
//     </p>
//     <div class="gallery">
//     <div class="item">
//     <p class="grey">Price</p>
//     <h6>$ ${element.food_price.value}</h6>
//         </div>
//       <div class="iteam">
//       <p class="grey">Iteam</p>
//       <h6>${element.food_iteam.value}</h6>
//         </div>
//         <div class="item">
//       <p class="grey">Order</p>
//       <h6>${element.food_order.value}</h6>
//       </div>
//       </div>
//       </div>
//       `;
//     } else {
//     }
//   }
// }
// var food_price = document.getElementById("foodPrice");
// var food_name = document.getElementById("name");
// var food_iteam = document.getElementById("foodIteam");
// var food_order = document.getElementById("foodOrder");
// var section = document.getElementById("section")
