    let searchBtn = document.querySelector('#search-btn');
    let searchInput = document.querySelector('#search');

    searchBtn.addEventListener('click', (e) => {
        if(searchInput.value != "") {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '23a8cab7cfmshc44f57269f2dff6p14817fjsn8b61352c895b',
                    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
            };	
            let searchInput = document.querySelector('#search');
            let searchValue = searchInput.value;
            let searchUrl = `https://imdb8.p.rapidapi.com/auto-complete?q=${searchValue}`;
            fetch(searchUrl, options)
                .then(response => response.json())
                .then(data => {
                    const list = data.d;
                    list.map(item => {
                        let divMovie = document.createElement('div');
                        divMovie.setAttribute('class','filme');
                        let divName = document.createElement('h2');
                        let name = item.l
                        img = document.createElement('img');
                        img.setAttribute('src', item.i.imageUrl);
                        let divFoto = document.createElement('div');
                        divFoto.append(img);
                        divName.append(name);
                        divMovie.append(divFoto);
                        divMovie.append(divName);
                        document.querySelector("#catalogo").append(divMovie);
                    });
                })
            searchInput.value = '';
            document.querySelector("#catalogo").innerHTML = '';
        }
    });