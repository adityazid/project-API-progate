
const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', function() {

  const inputKey = document.querySelector('#search-input');
  fetch('https://indonesia-public-static-api.vercel.app/api/heroes?name=' + inputKey.value)
    .then((response) => response.json())
    .then((data) => {
          let output = `<h2 class="mb-4">Data Pahlawan</h2>
              <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">Nama</th>
              <th scope="col">Tahun Lahir</th>
              <th scope="col">Tahun Kematian</th>
              <th scope="col">Keterangan</th>
            </tr>
          </thead>`;
      
          console.log(data);
      
          data.forEach((user) => {
            output += `
          
          <tbody>
            <tr>
              <th scope="row">${user.name}</th>
              <td>${user.birth_year}}</td>
              <td>${user.death_year}</td>
              <td>${user.description}</td>
            </tr>
          </tbody>`;
          });
          document.getElementById('hero-list').innerHTML = output;
        })
      .catch((err) => console.log(err));
      
});
