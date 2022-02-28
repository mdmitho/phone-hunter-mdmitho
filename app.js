const InputValue = () => {
    const searchInput = document.getElementById('search-input').value
    searchBtn(searchInput)
}
const searchBtn = (searchText) =>{
    // const searchBtn = document.getElementById('search-btn')

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(phone => displayPhone(phone.data))
 
}
const displayPhone = phones => {
    const cardContainer = document.getElementById('card-container')
    cardContainer.textContent=''
 phones?.forEach(phone => {
    console.log(phone)
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
    console.log(idName)
  const url =`https://openapi.programming-hero.com/api/phone/${idName}`
  fetch(url)
  .then (res => res.json())
  .then(data => displayPhoneDetail(data))

}
const displayPhoneDetail = detail => {
    console.log(detail)
}