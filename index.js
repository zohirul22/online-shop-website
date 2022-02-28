/*************Search and API parts********************/
const searchMobile = () =>{
    const mobile = document.getElementById('input_value')
    const mobileValue = mobile.value;
    mobile.value = '';
        const url = `https://openapi.programming-hero.com/api/phones?search=${mobileValue}`
        console.log(url)
        fetch(url)
        .then(Response =>Response.json())
        .then(data => showMobile(data.data))
}

/*************Search and API parts********************/

/***************display show phone *************************/
const showMobile = (phones) =>{
     const main =document.getElementById('displayphone')
     main.innerHTML = '' ;
for(const phone of phones){
     const div = document.createElement('div')

div.className = "mb-3"
div.className = "col-lg-4"
 div.innerHTML = `
<div class="card text-center p-3 bg-info" style="width: 18rem;">
<img  src="${phone.image}" class="card-img-top w-50 mx-auto " alt="...">
<div class="card-body">
  <h2 class="card-title text-danger">${phone.brand}</h2>
  <h4 class="card-title text-success">${phone.phone_name}</h4>
 
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
`
main.appendChild(div) 
}

}
/***************display show phone *************************/