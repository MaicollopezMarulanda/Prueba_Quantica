const request = new XMLHttpRequest();
request.open('GET', 'https://6454ff2ea74f994b334eff5e.mockapi.io/channels', true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(this.response);
        const contenedor = document.getElementById('contenedor');
        contenedor.setAttribute('class', 'card-group, pt-4');    

        data.forEach((emisora) => {
            // Creamos una tarjeta
            const tarjeta = document.createElement('div');
            tarjeta.setAttribute('class', 'card');
            // Creamos el la cabecera y el cuerpo de la tarjeta
            const cabeceraTarjeta = document.createElement('div');
            cabeceraTarjeta.setAttribute('class', 'card-header');

            const cuerpoTarjeta = document.createElement('div');
            cuerpoTarjeta.setAttribute('class', 'card-body');

            // Creamos el encabezado y le asignamos el título de la película
            const titulo = document.createElement('h5');
            titulo.setAttribute('class', 'card-title');
            titulo.textContent = "TITULO :"+emisora.Title;

            // Creamos la párrafo y le asignamos la descripción de la película
            emisora.descripcion = emisora.Description.substring(0, 250);

            const descripcion = document.createElement('p');
            descripcion.setAttribute('class', 'card-text');
            descripcion.textContent = `${ "Descripcion :"+emisora.descripcion }...`;

            // Agregamos el ID
            emisora.id = emisora.ID.substring(0, 250);

            const id = document.createElement('p');
            id.setAttribute('class', 'card-text');
            id.textContent = `${ "ID :"+emisora.id }...`;

            // Agregamos el formato
            emisora.formato = emisora.StreamFormat.substring(0, 250);

            const formato = document.createElement('p');
            formato.setAttribute('class', 'card-text');
            formato.textContent = `${ "FORMATO :"+emisora.formato }...`;

            // Agregamos el fondo
            emisora.fondo = emisora.Background.substring(0, 250);

            const fondo = document.createElement('p');
            fondo.setAttribute('class', 'card-text');
            fondo.textContent = `${ "FONDO :"+emisora.fondo }...`;

            // Agregamos el poster
            emisora.poster = emisora.Poster.substring(0, 250);

            const poster = document.createElement('p');
            poster.setAttribute('class', 'card-text');
            poster.textContent = `${ "POSTER :"+emisora.poster }...`;

            // Agregamos la URL
            emisora.url = emisora.URL.substring(0, 250);

            const url = document.createElement('p');
            url.setAttribute('class', 'card-text');
            url.textContent = `${ "URL :"+emisora.url }...`;

            // Agregamos la GUID
            emisora.guid = emisora.GUID.substring(0, 250);

            const guid = document.createElement('p');
            guid.setAttribute('class', 'card-text');
            guid.textContent = `${ "GUID :"+emisora.guid }...`;

            // Agregamos la Categoria
            emisora.categoria = emisora.Category.substring(0, 250);

            const categoria = document.createElement('p');
            categoria.setAttribute('class', 'card-text');
            categoria.textContent = `${ "CATEGORIA :"+emisora.categoria }...`;

            
            // Agregamos la tarjeta
            contenedor.appendChild(tarjeta);

            // Agregamos la cabecera y el cuerpo a la tarjeta
            tarjeta.appendChild(cabeceraTarjeta);
            tarjeta.appendChild(cuerpoTarjeta);

            // Agregamos el título a la cabecera
            cabeceraTarjeta.appendChild(titulo);

             // Agregamos el ID 
             cuerpoTarjeta.appendChild(id);
                
            // Agregamos la descripción al cuerpo
            cuerpoTarjeta.appendChild(descripcion);

            // Agregamos el formato
            cuerpoTarjeta.appendChild(formato);

            // Agregamos el fondo
            cuerpoTarjeta.appendChild(fondo);

            // Agregamos el poster
            cuerpoTarjeta.appendChild(poster);

            // Agregamos la url
            cuerpoTarjeta.appendChild(url);

            // Agregamos el GUID
            cuerpoTarjeta.appendChild(guid);

            // Agregamos la categoria
            cuerpoTarjeta.appendChild(categoria);


            console.log(emisora.Title);
            console.log(emisora.ID);
        });
    } else {
      alert('Ha ocurrido un error conc ódigo ' + request.status);
      console.log('Ha ocurrido un error conc ódigo ' + request.status);
    }
}  
request.send();