/*
Instructions
- Use this template as a starting point (it won't work properly on Codesandbox, you have to download it to your laptop) => https://codesandbox.io/s/proud-dog-owners-app-template-g30wz?from-embed
- You'll find a variable called data in the console.log. That's your list of dogs
- Render the top list of dogs using the list item template you'll find on the HTML file
- Each list item should be clickable. When you click on an item, the selected dog should display on the main card
- The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
- There should be only one card at the time on the screen
- The card should have a button that toggles for the selected dog between good dog/ bad dog

Tips
- Take advantage of scope in JS to have access to the data you need
- Remember you can add event listeners to any element on the page

Challenge
You might have noticed there's a plus button at the beginning of the top row. Add the behaviour to it. When clicked, it should replace the main card with a form to add a new dog to the list. 
You'll find a template for the form on the HTML page. Once the form is submitted, add the new dog to the beginning of the list, right next to the plus button.
*/


console.log(data);
//✔ 1. Loop through the data array to add in each dog to the dogs-list
// We create individual components here



function addAllDogsToList () {

    function createDog (dog) {
            
        let dogName = dog.name
        let dogList = document.querySelector("ul.dogs-list")
        let dogListLi = document.createElement("li")
        let dogListButton = document.createElement("button")
        dogListButton.setAttribute("class", "dogs-list__button")
        dogListButton.innerText = dogName
        dogListLi.append(dogListButton)
        dogList.append(dogListLi)

        function addInfoToMain() {
            //remove previous content, element.innerHTML = ""
            //create all elements with their attributes
            //append them to the page
            console.log(dog)
            let mainSection = document.querySelector("section.main__dog-section")
            mainSection.innerHTML = ""

            let heading = document.createElement("h2")
            let dogImage = document.createElement("img")

            dogImage.setAttribute("src", dog.image)
            dogImage.setAttribute("alt", "")
            let mainDogSection = document.createElement("div")

            mainDogSection.setAttribute("class", "main__dog-section__desc")
            let subHeading = document.createElement("h3")
            subHeading.innerText = "Bio"

            let dogInfo = document.createElement("p")
            dogInfo.innerText = dog.bio

            let isNaughtyDiv = document.createElement("div")

            let isNaughty = document.createElement("p")
            isNaughty.innerText = `A ${dog.isGoodDog ?  `Good Dog!` : `Bad Dog!`}`
            
            let isNaughtyButton = document.createElement("button")
            isNaughtyButton.innerText = `Change to ${dog.isGoodDog ?  `a Bad Dog` : `Good Dog`}`
            isNaughtyButton.addEventListener("click", function () {

                if (isNaughty.innerText = `A Good Dog!`) {

                    isNaughty.innerText = `A ${dog.isGoodDog ?  `Bad Dog!` : `Good Dog!`}`

                    isNaughtyButton.innerText = `Change to ${dog.isGoodDog ?  `a Good Dog` : `a Bad Dog`}`

                }
                else if (isNaughty.innerText = `A Bad Dog!`) {

                    isNaughty.innerText = `A ${dog.isGoodDog ?  `Good Dog!` : `Bad Dog!`}`

                    isNaughtyButton.innerText = `Change to ${dog.isGoodDog ?  `a Bad Dog` : `a Good Dog`}`
                }

            })

            isNaughtyDiv.append(isNaughty, isNaughtyButton)

            mainDogSection.append(subHeading, dogInfo)

            mainSection.append(heading, dogImage, mainDogSection, isNaughtyDiv)

                //         <h2>Mr. Bonkers</h2>
                //     <img
                //       src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
                //       alt=""
                //     />
                //     <div class="main__dog-section__desc">
                //       <h3>Bio</h3>
                //       <p>
                //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
                //         minima voluptates libero cumque rerum consequatur optio aliquid sint
                //         eum maxime illo laborum omnis quo ab rem cupiditate nulla
                //         perspiciatis ipsum!
                //       </p>
                //     </div>
                //     <div class="main__dog-section__btn">
                //     <p><em>Is naughty?</em> No!</p>
                //     <button>Bad Dog</button>
                //   </div>
        }
        dogListButton.addEventListener("click", addInfoToMain)
    }
    
    for (dog of data) {
        createDog(dog)
    }

}
addAllDogsToList()


//2. When that specific item is clicked, its full information should show on the middle of the page 
// When a specific button is clicked, replace any exsisting sata and put the data from the dog clicked into main__dog-section

//1. Add event listener to each iteration, console.log(Dog)
//2. create info function 