export let products = [
  {
    title: "Buzo Hoodie Angels",
    price: 35000,
    category: "abrigos",
    img: "https://res.cloudinary.com/dih1vza8t/image/upload/v1707452270/SHATO-TEDDY_oqid8b.png",
    stock: 7,
    description:
      "Tela friza premium (50% algodón de alta calidad - 50% poliéster), muy suave al tacto y super abrigado. Con estampado de maxima calidad en la parte trasera.",
  },

  {
    title: "Remera Oversize ESSENTIALS",
    price: 25000,
    category: "remeras",
    img: "https://res.cloudinary.com/dih1vza8t/image/upload/v1707452255/essentials_yzyzuf.webp",
    stock: 7,
    description:
      "Es 100 % algodón ideal para hacer actividades deportivas como ir al gym. Costura de gran calidad que se fabrica con la misma tecnología y telas que utilizan las grandes marcas como Fila, Nike, Adidas, entre otras. Estampado y estilo urbano.",
  },
  {
    title: "Air Force 1",
    price: 125000,
    category: "zapatillas",
    img: "https://res.cloudinary.com/dih1vza8t/image/upload/v1707452432/nikeairforce_g6in4z.jpg",
    stock: 7,
    description:
      "Las Nike Air Force 1 llevan el mismo nombre que el avión presidencial de los Estados Unidos (Air Force One), fueron lanzadas por primera vez en 1982 y desde entonces son uno de los modelos más clásicos y ‘top’ de la marca deportiva, tanto por su diseño icónico como por su comodidad.",
  },
  {
    title: "Air Jordan Retro 4",
    price: 175000,
    category: "zapatillas",
    img: "https://res.cloudinary.com/dih1vza8t/image/upload/v1707452424/airjordan_jsexpl.jpg",
    stock: 7,
    description:
      "Las Air Jordan Retro 4 son una versión retro de las icónicas Air Jordan 4 originales. Están diseñadas con materiales y tecnologías actualizadas. Están hechas con cuero y malla de alta calidad, y cuentan con la tecnología Air-Sole en la suela para brindar un gran confort y amortiguación.",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 1000);
    } else {
      reject("No hay productos");
    }
  });
};
