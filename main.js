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




const apiKey = 'f3cdceacf6msh71c0e4cff5be441p15ed62jsnf06564818a72';
const apiUrl = 'https://free-nba.p.rapidapi.com/players?page=0&per_page=25';
const btnApi = document.querySelector('#btn-api');
const resultadosDiv = document.querySelector('#resultados');

btnApi.addEventListener('click', () => {
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            resultadosDiv.innerHTML = ""; // Limpia cualquier contenido anterior
            data.data.forEach(player => {
                const playerDiv = document.createElement('div');
                playerDiv.classList.add('player-card');
                playerDiv.innerHTML = `
                <p>Nombre: ${player.first_name} ${player.last_name}</p>
                <p>Posición: ${player.position}</p>
                <p>Equipo: ${player.team.full_name}</p>
            `;
                resultadosDiv.appendChild(playerDiv);
            });
        })
        .catch(error => console.error(error));
});

const inputEl = document.querySelector('#input-el');
const shortBtn = document.querySelector('#short-btn');
const resultEl = document.querySelector('#result-el')

shortBtn.addEventListener('click', () => {
    const userUrl = inputEl.value;
    const apiUrl = `https://free-url-un-shortener.p.rapidapi.com/url?url=${encodeURIComponent(userUrl)}`;
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f3cdceacf6msh71c0e4cff5be441p15ed62jsnf06564818a72'
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                resultEl.textContent = data.shortenedUrl;
            } else {
                resultEl.textContent = 'Error al acortar la URL.';
            }
        })
        .catch(error => {
            resultEl.textContent = 'Error de conexión.';
            console.error(error);
        });
})

