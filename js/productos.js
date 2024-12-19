const productos = [
    {
      id: 1,
      nombre: "Mono Largo Lulyna",
      descripcion: 'El mono largo de Lulyna permite a cada mujer expresar su estilo y confianza en cualquier ocasión.',
      precio: 15000,
      imagen: "./images/producto1.jpg",
    },
    {
      id: 2,
      nombre: "Blusa Crochet Manga Princesa",
      descripcion: 'Es la elección perfecta para la mujer moderna que busca un estilo fresco y elegante.',
      precio: 9500,
      imagen: "./images/producto2.jpg",
    },
    {
      id: 3,
      nombre: "Camisa Anarchy Oversize",
      descripcion: 'Camisa relajada prelavada, calce tipo over, de villela mangas largas, con detalles y terminaciones de tachas.',
      precio: 10000,
      imagen: "./images/producto3.jpg",
    },
    {
      id: 4,
      nombre: "Camisa Básica De Lino",
      descripcion: 'Ideal para los días cálidos de primavera y verano, ofreciendo una sensación fresca y ligera al contacto con la piel.',
      precio: 8500,
      imagen: "./images/producto4.jpg",
    },
    {
      id: 5,
      nombre: "Blazer Crepe Sastrero",
      descripcion: 'Se adapta perfectamente a diversas ocasiones, desde un look casual hasta un evento más formal.',
      precio: 22000,
      imagen: "./images/producto5.jpg",
    },
    {
      id: 6,
      nombre: "Pantalón Palazzo Lulyna",
      descripcion: 'Es la elección perfecta para quienes buscan comodidad y estilo en su vestuario.',
      precio: 18500,
      imagen: "./images/producto6.jpg",
    },
  ];

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const listadoProductos = document.querySelector('.productos');

  listadoProductos.innerHTML = '';

  productos.forEach(producto => {
    const html = `
        <article data-id="${producto.id}">
            <img>
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>$ ${producto.precio}</p>
            <button type="button" class="agregar">Agregar</button>
        </article>
    `;

    listadoProductos.innerHTML += html;
  });

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains("agregar")) {
        const id = event.target.closest('article').dataset.id;

        const elemento = productos.find((producto) => producto.id == id);
        console.log(elemento);

        const { nombre, precio } = elemento;

        const producto = {
            id: id,
            nombre: nombre,
            precio: precio,
            cantidad: 1,
        };

        carrito.push(producto);

        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  });