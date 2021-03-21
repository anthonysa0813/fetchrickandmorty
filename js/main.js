
const rickandmorty = async () => {
  
    //await = espera a la promesa que me trae "fetch"
    // fetch = trae 
    const container = document.getElementById('container') // container
    console.log(container)
    const response_1 = await fetch("https://rickandmortyapi.com/api/character");
    const response2 = await response_1.json();
    const data = response2.results
    console.log(data)
    container.innerHTML = data.map((item) => `
          <div class="card">
            <div class="card-image">
              <img src="${item.image}" />
            </div>
            <h1>${item.name}</h1>
            <button class="btn btn-primary btn-block">Saber más!</button>
          </div>
    `);
};
rickandmorty();




