/*************Search and API parts********************/
const error = document.getElementById('error')
 
const searchMobile = () =>{
     document.getElementById('phoneId').innerHTML = '' ;
    const mobile = document.getElementById('input_value')
    const mobileValue = mobile.value;
   
    mobile.value = '';
  
   
//     error handel
 if(mobileValue == ''){
    error.innerHTML = "please enter the phone Name !!"
    document.getElementById('displayphone').style.display = "none"
 }

else{
     const url = `https://openapi.programming-hero.com/api/phones?search=${mobileValue}`
     fetch(url)
     .then(Response =>Response.json())
     .then(data => {
          if(data.data == false){
               error.innerHTML = "No match found !!"
                document.getElementById('displayphone').style.display = "none"
            }
              
          else{
               showMobile(data.data.slice(0,20))
                error.innerHTML = ''; 
                main.innerText = '' ;
               }
          } )
          
}
}

/*************Search and API parts********************/

/***************display show phone *************************/
const showMobile = (phones) =>{
     const main =document.getElementById('displayphone')
for(const phone of phones){
 const div = document.createElement('div')
  div.classList.add("col-lg-4")
//  div.className = "mb-3"


/* **************** phone Dynamic *********** */
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
      const url =`https://openapi.programming-hero.com/api/phone/${id}`
     fetch(url)
     .then(Response =>Response.json())
     .then(data => phoneInfo(data.data)) 
}

const phoneInfo = (info) =>{
const phoneId = document.getElementById('phoneId')
const div = document.createElement('div')

phoneId.innerHTML = '' ;
/* **************** id Dynamic *********** */
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
/*****************Add Phone id js********************* */