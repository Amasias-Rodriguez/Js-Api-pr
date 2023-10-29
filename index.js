// Api URL
const apiUrl = 'https://api.thecatapi.com/v1/images/search';


//Obtain the button and container

const btnCat = document.querySelector('#btn-cat');
const catImgContainer = document.querySelector('#cat-img-container');

//Listen when a click is made
btnCat.addEventListener('click', () => {
    // call the api
    fetch(apiUrl)
        //turn the answer into json
        .then(response => response.json())
        .then(data => {
            //obtaining the cat image
            const catImgUrl = data[0].url

            // adding an image as a background container
            catImgContainer.style.backgroundImage = `url('${catImgUrl}')`
        })
        .catch(error => console.error(error))
})