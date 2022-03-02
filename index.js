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
               document.getElementById('displayphone').style.display = "inline-block"
                error.innerHTML = '';
                mainCountainer.innertext = '';
               }
          } )
          
}
}

/*************Search and API parts********************/

/***************display show phone *************************/

const showMobile = (phones) =>{
     const mainCountainer =document.getElementById('displayphone')
     mainCountainer.innerHTML = '' ;
for(const phone of phones){
 const div = document.createElement('div')
  div.className = 'col-lg-3'


/*  */
/* **************** phone Dynamic *********** */
 div.innerHTML = `
<div class="card text-center p-3 m-3 "  style="width: 18rem; background-color: LavenderBlush ;">
<img  src="${phone.image}" class="card-img-top w-50 mx-auto " alt="...">
<div class="card-body">
  <h2 class="card-title text-danger">${phone.brand}</h2>
  <h4 class="card-title text-success">${phone.phone_name}</h4>
  <button onclick="phoneId('${phone.slug}')"  class="btn btn-primary">Details</button>
</div>
</div>
`
mainCountainer.appendChild(div) 
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
     console.log(info.others)
const phoneId = document.getElementById('phoneId')
const div = document.createElement('div')
phoneId.innerHTML = '' ;
/* **************** id Dynamic *********** */
div.innerHTML = `                    
<div class="card mx-auto " style="width: 18rem; background-color ="rgba(255, 192, 203, 0.659)";   >
<img src="${info.image}" class=" pt-2 card-img-top w-50 mx-auto" alt="...">
<div class="card-body">
  <h4 class="card-title text-primary fs-2">Name:${info.name}</h4>
  <p class="card-title text-danger">ReleaseDate${info.releaseDate}</p>
  <h6 class="card-title text-success">MainFeatures: ${info.mainFeatures.storage}</h6>
  <h6 class="card-title text-success">MainFeatures: ${info.mainFeatures.displaySize}</h6>
  <h6 class="card-title text-success">MainFeatures: ${info.mainFeatures.memory}</h6>
  <h6 class="card-title text-success">MainFeatures: ${info.mainFeatures.sensors[4]}</h6>
  <p class="card-title text-primary">Others: ${info.others.WLAN}</p>
  <p class="card-title text-primary">Others: ${info.others.Bluetooth}</p>
  <p class="card-title text-primary">Others: ${info.others.USB}</p>
</div>
</div>
`
phoneId.appendChild(div)

}
/*****************Add Phone id js********************* */