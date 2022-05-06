let locationWeb = window.location.href.split("=");
let idItem = locationWeb[1];

let products = [
  {
    name: "CLOWNZ RACING FLAMES T-SHIRT",
    price: 349000,
    image:
      "./image/ao9.jpg",
    count: 1,
    id: 0,
    type: "Đen",
    size: "L",
  },
  {
    name: "SKELETON ROCK PARTY T-SHIRT",
    price: 399000,
    image: "./image/ao10.jpg",
    count: 1,
    id: 1,
    type: "Đen",
    size : "L",
  },
  {
    name: "CLOWNZ BASIC T-SHIRT V3",
    price: 249000,
    image: "./image/ao1.jpg",
    count: 1,
    id: 2,
    type: "Đen",
    size : "L",
  },
  {
    name: "CLOWNZ BASIC HOODIE V3",
    price: 499000,
    image: "./image/ao2.jpg",
    count: 1,
    id: 3,
    type: "Đen",
    size : "L",
  },
  {
    name: "LET'S GET WET T-SHIRT",
    price: 399000,
    image: "./image/ao21.jpg",
    count: 1,
    id: 4,
    type: "xanh",
    size : "L",
  },
];

const nameProduct = document.querySelector("#name-product");
const addItem = document.querySelector("#add_product");
function fixItem(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == idItem) {
      const t = arr[i];
      nameProduct.innerHTML = `${t.name}`;
      addItem.innerHTML = `
      <div class="col l-6 m-6">
      <div class="details_product_img">
        <a
          href="//bizweb.dktcdn.net/thumb/1024x1024/100/414/728/products/7.jpg?v=1623987835740"
          title="Click để xem"
        >
          <img src=${t.image} alt="Let's Get Wet T-shirt" />
        </a>
      </div>
      <div class="row details_product_img1 autoplay">
        <div class="col l-3 m-3 c-3">
          <img src="./image/ao3.jpg" alt="" />
        </div>
        <div class="col l-3 m-3 c-3">
          <img src="./image/ao3_1.jpg" alt="" />
        </div>
        <div class="col l-3 m-3 c-3">
          <img src="./image/ao3_2.jpg" alt="" />
        </div>
        <div class="col l-3 m-3 c-3">
          <img src="./image/ao3_4.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="col l-6 m-6">
      <h2>${t.name}</h2>
      <h3 class="vnd">${t.price}</h3>
      <p>Tình trạng: <span>Còn hàng</span></p>
      <div class="mausac">
        <p>Màu sắc:</p>
        <label class="hong">
          <img
            src="//bizweb.dktcdn.net/thumb/icon/100/414/728/products/1-2.jpg?v=1623987835740"
            alt="Hồng"
            data-img="https://bizweb.dktcdn.net/100/414/728/products/1-2.jpg?v=1623987835740"
            class="ant-swatch"
          />
          <span>Hồng</span>

          
        </label>
        <label class="xanh">
          <img
            src="//bizweb.dktcdn.net/thumb/icon/100/414/728/products/7.jpg?v=1623987835740"
            alt="Xanh"
            data-img="https://bizweb.dktcdn.net/100/414/728/products/7.jpg?v=1623987835740"
            class="ant-swatch"
          />
          <span>${t.type}</span>
          <img
            class="img-check"
            src="//bizweb.dktcdn.net/100/414/728/themes/803486/assets/select-pro.png?1649645144862"
            alt="Hồng"
          />
        </label>
      </div>
      <div class="size">
        <p>size:</p>
        <a href="#">S</a>
        <a href="#">M</a>
        <a href="#">${t.size}</a>
        <a href="#">XL</a>
      </div>
      <div class="soluong">
        <p>Số lượng:</p>
        <a href="#">-</a>
        <a href="#">1</a>
        <a href="#">+</a>
      </div>
      <div class="btn_mua ">
        <button id="myBtn" class="add-cart" onclick="location.href='giohang.html';">THÊM VÀO GIỎ HÀNG</button>
      </div>
      <img src="./image/motasize.JPG" class="imgsize" />

      <div class="textphone">
        <p>
          Gọi đặt mua: <span class="spanphone">0999666 JQK</span> (miễn
          phí 8:30 - 18:00).
        </p>
      </div>
      <div class="service_details">
        <div class="item_service">
          <img
            src="./image/ship.svg"
            alt="MIỄN PHÍ VẬN CHUYỂN VỚI ĐƠN HÀNG"
          />
          <h4>
            MIỄN PHÍ VẬN CHUYỂN VỚI ĐƠN HÀNG <strong>TỪ 500.000Đ </strong>
          </h4>
        </div>
        <div class="item_service">
          <img
            src="./image/khien.svg"
            alt="BẢO HÀNH DO LỖI NHÀ SẢN XUẤT"
          />
          <h4>BẢO HÀNH DO LỖI NHÀ SẢN XUẤT</h4>
        </div>
        <div class="item_service">
          <img src="./image/hoa.svg" alt="CAM KẾT 100% CHÍNH HÃNG" />
          <h4>CAM KẾT <strong>100% CHÍNH HÃNG</strong></h4>
        </div>
      </div>
    </div>
        `;
    }
  }
}
fixItem(products);

const vnd = document.querySelector(".vnd");
// vnd.innerHTML = Number(vnd.innerHTML).toLocaleString('vi', {style : 'currency', currency : 'VND'});

const addCart = document.querySelector(".add-cart");
let productsInCart = [];

addCart.addEventListener("click", function () {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == idItem) {
      productsInCart.push(products[i]);
    }
  }
  setLocalStorage();
});

const totalItems = document.querySelector(".total-item");

function renderTodo(arr) {
  //Hiển thị danh sách công việc ra ngoài giao diện
  for (let i = 0; i < arr.length; i++) {
    totalItems.innerHTML = arr.length;
  }
  updateTotalProducts(productsInCart);
}
renderTodo(productsInCart);
function updateTotalProducts(arr) {
  let totalProducts = 0;
  for (let i = 0; i < arr.length; i++) {
    //Tính số lượng sản phẩm có trong giỏ
    totalProducts += arr[i].count;
  }
  totalItems.innerHTML = totalProducts;
}
updateTotalProducts(productsInCart);

function setLocalStorage() {
  localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
}

//Lấy dữ liệu từ localStorage
function getDataForomLocalStorage() {
  //Lấy data thông qua key "todos"
  let todosLocal = localStorage.getItem("productsInCart");

  //Nếu có data trong localStorage thì parse, ko thì để arr rỗng
  if (todosLocal) {
    productsInCart = JSON.parse(todosLocal);
  } else {
    productsInCart = [];
  }
  renderTodo(productsInCart);
}

//Sự kiện xảy ra khi web load hết html css thì gọi vào function
window.onload = getDataForomLocalStorage;
