//error messeage
const errorMessage =(idName,displayBlock)  =>{
    document.getElementById(idName).style.display= displayBlock
}
//input value text
const InputValue = () => {
    const searchInput = document.getElementById('search-input').value
    if(searchInput == ''){
        errorMessage('scarch-phone-name','block')
        errorMessage('no-phone','none')
    }
    else{
        searchBtn(searchInput)
        document.getElementById('search-input').value=''
    }

}
//searcg button
const searchBtn = (searchText) =>{
    // const searchBtn = document.getElementById('search-btn')

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(phone => displayPhone(phone.data))

    errorMessage('scarch-phone-name','none')
    errorMessage('no-phone','none')
    document.getElementById('detail-container').textContent=''
 
}
//show display content
const displayPhone = phones => {
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML='';
if(phones.length==0){
    errorMessage('no-phone','block')
}
else{
    phones?.forEach(phone => {
 
        const div = document.createElement('div')
       
        div.innerHTML = `
        <div class="col">
        <div class="card">
          <img src="${phone.image}" class="card-img-top w-50 mx-auto">
          <div class="card-body">
            <h5 class="card-title">Phone Name: ${phone.phone_name}</h5>
            <p class="card-text">Brand: ${phone.brand}</p>
            <button onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-primary mx-auto">DETAIL</button>
          </div>
        </div>
      </div>
      `
      cardContainer.appendChild(div)
     });
}

}
//load phone detail api
const loadPhoneDetail = idName =>{
  const url =`https://openapi.programming-hero.com/api/phone/${idName}`
  fetch(url)
  .then (res => res.json())
  .then(detail => displayPhoneDetail(detail.data))

}
//desplay phone detail content
const displayPhoneDetail = detalils=> {
  window.scrollTo(0, 0);

    const detailContainer = document.getElementById('detail-container')
    detailContainer.textContent = ''
    console.log(detalils.releaseDate)
     const sensors = (detalils.mainFeatures.sensors)
    const others = (detalils.others)

const div= document.createElement('div') 
    div.innerHTML = `


    <div class="col">
    <div class="card w-50 mx-auto">
    <img src="${detalils.image}" class="card-img-top w-50 mx-auto mt-3">
      <div class="card-body">
      <h3 class="text-center">SENSORS</h3>
      <p class="text-center">${sensors[0]}<br>${sensors[1]}<br>${sensors[2]}<br>${sensors[3]}<br>${sensors[4]}<br>${sensors[5]}</p>
      <h3 class="text-center">OTHERS</h3>
      <p class="text-center">
      Bluetooth : ${others.Bluetooth}<br>
       GPS : ${others.GPS}<br>
       NFC: ${others.NFC}<br>
       Radio : ${others.Radio}<br>
       USB  : ${others.USB}<br>
       WLAN : ${others.WLAN}
        </p>
        <h3 class="text-center">RELEASDATE : ${detalils.releaseDate ? detalils.releaseDate : 'NOT AVLAVAl'}</h3>
      </div>
    </div>
  </div>



     
    
  `
  detailContainer.appendChild(div)
    
}
 