const filterOptions = document.querySelectorAll(".option")
const foods = document.querySelectorAll('.foodArea')
const foodsArr = []
const foodsObj = {all:[], meats: [], chickens: [], fishes: [], desserts:[] }

foods.forEach(food => {
  foodsArr.push(food)
})

foodsObj.all = foodsArr
foodsObj.meats = foodsArr.filter(food => food.dataset.foodtype == 'meats')
foodsObj.chickens = foodsArr.filter(food => food.dataset.foodtype == 'chickens')
foodsObj.fishes = foodsArr.filter(food => food.dataset.foodtype == 'fishes')
foodsObj.desserts = foodsArr.filter(food => food.dataset.foodtype == 'desserts')

filterOptions.forEach(option => {
  option.addEventListener("click", ev => {
    filterOptions.forEach(active => active.classList.remove('active'))
    const foodGrid = document.querySelector(".foodGrid")

    foodGrid.innerHTML = ""

    foodsObj[option.dataset.foodtype].forEach(foodDiv =>{
      foodGrid.appendChild(foodDiv)
    })

    option.classList.add('active')

    
    // console.log(foodsObj[option.dataset.foodtype])
  })
})