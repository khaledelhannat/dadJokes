const jokeEL = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');


jokeBtn.addEventListener('click', geterateJoke);

geterateJoke()

// function geterateJoke(){
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', config).then(res => res.json()).then(data => {
//         jokeEL.innerHTML = data.joke;
//     })
// }


async function geterateJoke(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', config);

    const data = await res.json()

    jokeEL.innerHTML = data.joke;
}

