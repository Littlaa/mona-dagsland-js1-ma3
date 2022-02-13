const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=0c36c69fe1ec4e809357ebd27277b919";

const resultsContainer = document.querySelector(".results");

async function getGames() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const items = results.results;

    setTimeout(function () {
      resultsContainer.innerHTML = "";

      for (let i = 0; i < items.length; i++) {
        if (i === 8) {
          break;
        }
        resultsContainer.innerHTML += `<div class="result"><p>Name:${items[i].name}</p> 
                                              <p>Rating: ${items[i].rating}</P>
                                              <P>Tags: ${items[i].tags.length}</p>
                                              </div>`;
      }
    }, 1000);
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = DisplayError("Oh no! Something went wrong when calling the API...");
  }
}

getGames();

//Used the lessons for inspiration for the loading indicator.
