/*************Search and API parts********************/
const searchMobile = () =>{
     document.getElementById('phoneId').innerHTML = '' ;
    const mobile = document.getElementById('input_value')
    const mobileValue = mobile.value;
    mobile.value = '';
        const url = `https://openapi.programming-hero.com/api/phones?search=${mobileValue}`
       
        fetch(url)
        .then(Response =>Response.json())
        .then(data => showMobile(data.data))

}

/*************Search and API parts********************/

/***************display show phone *************************/
const showMobile = (phones) =>{
     const main =document.getElementById('displayphone')
     main.innerHTML = '' ;
  
     const slice = phones.slice(0,20)
for(const phone of phones){
     // console.log(phone)
     
     const div = document.createElement('div')

div.className = "mb-3"
div.className = "col-lg-4"
 div.innerHTML = `
<div class="card text-center p-3 mb-3 " style="width: 18rem; background-color: LavenderBlush ;  ">
<img  src="${phone.image}" class="card-img-top w-50 mx-auto " alt="...">
<div class="card-body">
  <h2 class="card-title text-danger">${phone.brand}</h2>
  <h4 class="card-title text-success">${phone.phone_name}</h4>
 
  <button onclick="phoneId('${phone.slug}')"  class="btn btn-primary">Details</button>
</div>
</div>
`
main.appendChild(div) 
}
}
/***************display show phone *************************/

/*****************Add Phone id js********************* */
const phoneId = (id) =>{
// console.log(id)
      const url =`https://openapi.programming-hero.com/api/phone/${id}`
     fetch(url)
     .then(Response =>Response.json())
     .then(data => phoneInfo(data.data)) 
}

const phoneInfo = (info) =>{
     // console.log(info.mainFeatures.sensors)
const phoneId = document.getElementById('phoneId')
const div = document.createElement('div')


phoneId.innerHTML = '' ;
div.innerHTML = `
                               
<div class="card mx-auto " style="width: 18rem;background-color: LightPink ;">
<img src="${info.image}" class=" pt-2 card-img-top w-50 mx-auto" alt="...">
<div class="card-body">
  <h4 class="card-title text-primary fs-2"> Name:${info.name}</h4>
  <h5 class="card-title text-success ">${info.mainFeatures.storage}</h5>
  <h6 class="card-title text-dark">${info.mainFeatures.displaySize}</h6>
  <p class="card-title text-dark">${info.mainFeatures.memory}</p>
  <p class="card-title text-warming">${info.mainFeatures.sensors[4]}</p>
</div>
</div>
`
phoneId.appendChild(div)

}