let productsInCart = [];
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