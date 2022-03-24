// <div id="joke" class="joke">Awesome Joke is loading...</div> <button id="jokebtn" class="btn">Next Joke</button>

// 

const jokes = document.querySelector("#joke")
const jokebtn = document.querySelector("#jokebtn")

const generatejoke = async () => {

    //error handling
    try{
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
    
        const response = await fetch('https://icanhazdadjoke.com/', setHeader)
        const data = await response.json()
        jokes.innerHTML = data.joke 
    }catch(err){
        console.log(`the error is ${err}`);
    }
}


// without async and await

// const generatejoke = () => {

//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', setHeader)
//     .then((res) => res.json() )   
//     .then((data) =>{
//         jokes.innerHTML = data.joke
//     }).catch((error) =>{
//         console.log(error)
//     })
// }

jokebtn.addEventListener("click", generatejoke)
generatejoke()