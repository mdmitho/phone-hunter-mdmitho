const InputValue = () => {
    const searchInput = document.getElementById('search-input').value
    searchBtn(searchInput)
    document.getElementById('search-input').value=''
}
const searchBtn = (searchText) =>{
    // const searchBtn = document.getElementById('search-btn')

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(phone => displayPhone(phone.data))
 
}
const displayPhone = phones => {
    console.log(phones)
    const cardContainer = document.getElementById('card-container')
    cardContainer.textContent=''
 phones?.forEach(phone => {
 
    const div = document.createElement('div')
   
    div.innerHTML = `
    <div class="col">
    <div class="card">
      <img src="${phone.image}" class="card-img-top w-50 mx-auto">
      <div class="card-body">
        <h5 class="card-title">Phone Name: ${phone.phone_name}</h5>
        <p class="card-text">Brand: ${phone.brand}</p>
        <button onclick="loadPhoneDetail('${phone.slug}')" type="button" class="btn btn-primary mx-auto">DETAIL</button>
      </div>
    </div>
  </div>
  `
  cardContainer.appendChild(div)
 });
 
}

const loadPhoneDetail = idName =>{
  const url =`https://openapi.programming-hero.com/api/phone/${idName}`
  fetch(url)
  .then (res => res.json())
  .then(detail => displayPhoneDetail(detail.data))

}

const displayPhoneDetail = detalils=> {
    const detailContainer = document.getElementById('detail-container')
    detailContainer.textContent = ''
    console.log(detalils)
     const sensors = (detalils.mainFeatures.sensors)
    const others = (detalils.others)
console.log(others)
const div= document.createElement('div') 
    div.innerHTML = `


    <div class="col">
    <div class="card w-50 mx-auto">
    <img src="${detalils.image}" class="card-img-top w-50 mx-auto">
      <div class="card-body">
      <h3 class="text-center">SENSORS</h3>
      <p class="text-center">${sensors[0]}<br>${sensors[1]}<br>${sensors[2]}<br>${sensors[3]}<br>${sensors[4]}<br>${sensors[5]}</p>
      <h3 class="text-center">OTHERS</h3>
      <p class="text-center">Bluetooth : ${others.Bluetooth}<br>
       GPS : ${others.GPS}<br>
       NFC: ${others.NFC}<br>
       Radio : ${others.Radio}<br>
       USB  : ${others.USB}<br>
       WLAN : ${others.WLAN}
        </p>
      </div>
    </div>
  </div>



     
    
  `
  detailContainer.appendChild(div)
    
}
 