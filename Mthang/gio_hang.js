const productsCartItem = document.querySelector(".products-cart");
let productsInCart = [];

let totalCount = document.querySelector(".count");
const totalItems = document.querySelector(".total-item");

function renderTodo(arr) {
  //Xóa hết dữ liệu hiện có để thêm dữ liệu mới
  productsCartItem.innerHTML = "";

  //Danh sách công việc trống
  if (arr.length == 0) {
    productsCartItem.innerHTML = "Không có sản phẩm nào trong giỏ hàng";
    return;
  }

  //Hiển thị danh sách công việc ra ngoài giao diện
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];
    const VNDD = t.price.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
    content += `
    <div class="col l-12 m-12 c-12  products-cart">
            <div class="row col_right">
              <div class="col l-3 m-3 c-3">
                <div class="shopping_card_img">
                  <a href="./chitietsanpham.html"
                    ><img
                      src=${t.image}
                      alt="Let's Get Wet T-shirt - Hong"
                  /></a>
                </div>
              </div>
              <div class="col l-5 m-5 c-4">
                <div class="box_info_product">
                  <p class="name">
                    <a
                      href="./chitietsanpham.html"
                      title="Let's Get Wet T-shirt - Hong / L"
                      >${t.name} - <span>${t.type}</span> - <span>${t.size}</span></a
                    >
                  </p>
                  <p class="action">
                    <a href="#" id="detele" onclick="deleteTodo(${t.id})">Xóa</a>
                  </p>
                </div>
              </div>
              <div class="col l-2 m-2 c-2">
                <div class="box-price">
                  <p class="price pricechange">${VNDD}</p>
                </div>
              </div>
              <div class="col l-2 m-2 c-3">
                <div class="quantity_block text-center">
                  <a href="#" id="minus" onclick="changeTotalProductMinus(${t.id})">--</a>
                  <a href="#" id="total-products">${t.count}</a>
                  <a href="#" id="add" onclick="changeTotalProduct(${t.id})">+</a>
                </div>
              </div>
            </div>
          </div>
    `;
    totalCount.innerHTML = "GIỎ HÀNG CỦA BẠN" + `(${arr.length})`;
    totalItems.innerHTML = arr.length;
  }

  //Chèn dữ liệu mới để hiển thị
  productsCartItem.innerHTML = content;
  updateTotalProducts(productsInCart);
}
renderTodo(productsInCart);

const payTotal = document.querySelector(".pay-total");

function updateTotalProducts(arr) {
  let totalProducts = 0;
  let totalPriceProducts = 0;
  for (let i = 0; i < arr.length; i++) {
    //Tính số lượng sản phẩm có trong giỏ
    totalProducts += arr[i].count;

    //Tính giá tiền bằng số lượng sản phẩm * giá tiền
    totalPriceProducts += arr[i].count * arr[i].price;

    payTotal.innerHTML = totalPriceProducts.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });

    //Hiển thị số lượng sản phẩm có trong giỏ hàng lên trên góc bên phải
  }
  totalCount.innerHTML = "GIỎ HÀNG CỦA BẠN " + `(${totalProducts})`;
  totalItems.innerHTML = totalProducts;
  payTotal.innerHTML = totalPriceProducts.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
}

const totalsPrice = document.querySelector(".totals_price");

function updateTotalProducts(arr) {
  let totalProducts = 0;
  let totalPriceProducts = 0;
  for (let i = 0; i < arr.length; i++) {
    //Tính số lượng sản phẩm có trong giỏ
    totalProducts += arr[i].count;

    //Tính giá tiền bằng số lượng sản phẩm * giá tiền
    totalPriceProducts += arr[i].count * arr[i].price;

    totalsPrice.innerHTML = totalPriceProducts.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });

    //Hiển thị số lượng sản phẩm có trong giỏ hàng lên trên góc bên phải
  }
  totalCount.innerHTML = "GIỎ HÀNG CỦA BẠN " + `(${totalProducts})`;
  totalItems.innerHTML = totalProducts;
  totalsPrice.innerHTML = totalPriceProducts.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
}

updateTotalProducts(productsInCart);

function deleteTodo(id) {
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id == id) {
      productsInCart.splice(i, 1);
      totalCount.innerHTML = "GIỎ HÀNG CỦA BẠN " + `(${productsInCart.length})`;
    }
  }
  updateTotalProducts(productsInCart);
  renderTodo(productsInCart);
  setLocalStorage();
}

function changeTotalProduct(id) {
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id == id) {
      productsInCart[i].count += 1;
    }
  }
  renderTodo(productsInCart);
  updateTotalProducts(productsInCart);
  setLocalStorage();
}

function changeTotalProductMinus(id) {
  for (let i = 0; i < productsInCart.length; i++) {
    if ((productsInCart[i].id == id) & (productsInCart[i].count > 1)) {
      productsInCart[i].count -= 1;
    }
  }
  renderTodo(productsInCart);
  updateTotalProducts(productsInCart);
  setLocalStorage();
}

function setLocalStorage() {
  localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
}

// localStorage.setItem("lastname", JSON.stringify();
// JSON.parse(lastname)

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


