// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'f3cdceacf6msh71c0e4cff5be441p15ed62jsnf06564818a72',
//         'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
//     }
// };

// const btnApi = document.querySelector('#btn-api')

// const myApi = 'https://api-basketball.p.rapidapi.com/games'

//     // ("https://api-basketball.p.rapidapi.com/games")

//     .then(res => res.json())
//     .then(response => {
//         btnApi.addEventListener('click', () => {
//             fetch(myApi)
//         })
//     })


// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'f3cdceacf6msh71c0e4cff5be441p15ed62jsnf06564818a72',
//         'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
//     }
// };




const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f3cdceacf6msh71c0e4cff5be441p15ed62jsnf06564818a72',
        'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
    }
};

fetch("https://api-basketball.p.rapidapi.com/games", options)
    .then(res => res.text())
    .then(response => {
        console.log(response)
    })
