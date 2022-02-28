const InputValue = () => {
    const searchInput = document.getElementById('search-input').value
    searchBtn(searchInput)
    console.log()
}
const searchBtn = (searchText) =>{
    // const searchBtn = document.getElementById('search-btn')

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.data[0]))
 
}
const displayPhone = phone =>{
    const cardContainer = document.getElementById('card-container')
    
}