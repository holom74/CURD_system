// CRUDS Operating System 
// Create Display Update Delete Search....
// Start CRUDS 
var productNameInput =document.getElementById("productNameInput");
var productPriceInput =document.getElementById("productPriceInput");
var productCategoryInput =document.getElementById("productCategoryInput");
var productDescInput =document.getElementById("productDescInput");
var productContainer =[]; 
var mood = 'Add_Product';
var temp;

if(localStorage.getItem('products') != null){
    productContainer = JSON.parse(localStorage.getItem('products'))
    displayProduct();
}

// JSON = > javascript Object Notition


function addProduct(){
    var product= {
        name:productNameInput.value ,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        desc:productDescInput.value,
    }

    if(mood === 'Add_Product'){
      productContainer.push(product);
    }else{
      productContainer[temp]= product ;
      mood='Add_Product';
      document.getElementById("Add_Product").innerHTML='Add Product'
    }

    localStorage.setItem('products',JSON.stringify(productContainer))
    displayProduct();
    clearProduct();

}
function displayProduct(){
    var cartona = ``;
    for(var i=0; i<productContainer.length;i++){
        cartona +=`<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td><button onclick='Update(${i})' class='btn btn-outline-warning btn-sm'>Update</button></td>
        <td><button onclick='deleteProduct(${i})' class='btn btn-outline-danger btn-sm'>Delete</button></td>
    </tr>`
    }
    document.getElementById('rowData').innerHTML =cartona;
}

function deleteProduct(deleteIndex){
    productContainer.splice(deleteIndex,1)
    localStorage.setItem('products',JSON.stringify(productContainer))
    displayProduct();
}
function clearProduct(){
    productNameInput.value='' ;
    productPriceInput.value ='';
    productCategoryInput.value ='';
    productDescInput.value ='';
}

function search(term){
    var cartona = ``;
    for(var i=0; i<productContainer.length;i++){
        if(productContainer[i].name.toLowerCase().includes(term.toLocaleLowerCase())==true){
            cartona +=`<tr>
            <td>${i}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].desc}</td>
            <td><button  class='btn btn-outline-warning btn-sm'>Update</button></td>
            <td><button onclick='deleteProduct(${i})' class='btn btn-outline-danger btn-sm'>Delete</button></td>
        </tr>`
        }
        document.getElementById('rowData').innerHTML =cartona;
        }   
}


function Update(i){
  productNameInput.value = productContainer[i].name ;
  productPriceInput.value = productContainer[i].price;
  productCategoryInput.value =productContainer[i].category;
  productDescInput.value =productContainer[i].desc;
  document.getElementById("Add_Product").innerHTML='update'
  mood='Update'
  temp=i
  scroll({
    top:0,
    behavior:"smooth",
  })

}


