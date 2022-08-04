console.log('%c HI', 'color: firebrick')

const container = document.getElementById('dog-breeds')

const breedArray = []
function loadRandomDogs() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderRandomImg(json))
}
function loadDogBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    
    console.log(breedUrl);
    fetch(breedUrl)
        .then((response) => response.json())
        .then((json) => {
            for(let breed in json.message) {
                
                if(json.message[breed] != '') {
                    // console.log(json.message[breed])
                    const parsedBreed = JSON.parse(JSON.stringify(json.message[breed]))
                    // console.log(parsedBreed)
                    parseBreedList(json.message[breed][0])  
                }
            }     
    });
}
function parseBreedList(parsedBreed) {
    const list = document.createElement('li');

    // const data = (JSON.parse(JSON.stringify(json.message[breed])))
    list.setAttribute("id", "listedBreed")
    list.setAttribute("onclick", "changeTextColor()")
    list.innerHTML = JSON.parse(JSON.stringify(parsedBreed))
    container.appendChild(list)
    addBreedToArray(parsedBreed) 
}
function renderRandomImg(images) {
    const imgcontainer = document.getElementById('dog-image-container')
    images.message.forEach(Image => {
        const img = document.createElement('img');
        img.src = Image;
        imgcontainer.appendChild(img)
    });
}
// needs work.. but it works. kinda
function changeTextColor() {
    const elements = document.querySelectorAll('li#listedBreed')

    elements.forEach(function(element){
        element.addEventListener("click", function() {
            console.log("sup")
            element.style.color = "#FF0000"
        });
    })
    
}
function addBreedToArray(breed) {
    breedArray.push(breed)
}

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    loadRandomDogs();
    loadDogBreeds();

})
function clearList() {
    while(container.firstChild) {
        container.removeChild(container.lastChild)
    }
}
    const breedDropdown = document.getElementById('breed-dropdown');
    const breeds = document.querySelectorAll('li')
    breedDropdown.addEventListener('change', (e) => {
        console.log(`e.target.value = ${ e.target.value }`);
        console.log(`breedDropdown.options[breedDropdown.selectedIndex].value = ${ breedDropdown.options[breedDropdown.selectedIndex].value }`);
        if(e.target.value === 'a') {
            console.log('A!')
            const startsWithA = breedArray.filter((breed) => breed.startsWith("a"))
            console.log(startsWithA)
            // clears list
            clearList();
            // makes new list
            for(let i=0;i<startsWithA.length;i++) {
                const list = document.createElement('li');
                list.setAttribute("id", "listedBreed")
                list.setAttribute("onclick", "changeTextColor()")
                list.innerHTML = `${startsWithA[i]}`
                container.appendChild(list)
            }
        }
        if(e.target.value === 'b') {
            console.log('B!')
            const startsWithB = breedArray.filter((breed) => breed.startsWith("b"))
            console.log(startsWithB)
            clearList();
        
            for(let i=0;i<startsWithB.length;i++) {
                const list = document.createElement('li');
                list.setAttribute("id", "listedBreed")
                list.setAttribute("onclick", "changeTextColor()")
                list.innerHTML = `${startsWithB[i]}`
                container.appendChild(list)
            }        }
        if(e.target.value === 'c') {
            console.log('A!')
            const startsWithC = breedArray.filter((breed) => breed.startsWith("c"))
            console.log(startsWithC)
            clearList();
        
            for(let i=0;i<startsWithC.length;i++) {
                const list = document.createElement('li');
                list.setAttribute("id", "listedBreed")
                list.setAttribute("onclick", "changeTextColor()")
                list.innerHTML = `${startsWithC[i]}`
                container.appendChild(list)
            }        }
        if(e.target.value === 'd') {
            console.log('D!')
            const startsWithD = breedArray.filter((breed) => breed.startsWith("d"))
            console.log(startsWithD)
            clearList();
        
            for(let i=0;i<startsWithD.length;i++) {
                const list = document.createElement('li');
                list.setAttribute("id", "listedBreed")
                list.setAttribute("onclick", "changeTextColor()")
                list.innerHTML = `${startsWithD[i]}`
                container.appendChild(list)
            }        
        }
    })

console.log(typeof(elements))
