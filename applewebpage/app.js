const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  },
  {
    id: 2,
    title: "iPhone X",
    description: "Lorem ipsum",
    price: 899,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
  },
  {
    id: 5,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    brand: "Huawei",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
  },
  {
    id: 6,
    title: "MacBook Pro",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    brand: "Apple",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
  },
  {
    id: 7,
    title: "Samsung Galaxy Book",
    description:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    brand: "Samsung",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
  },
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    brand: "Microsoft Surface",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
  },
  {
    id: 9,
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    brand: "Infinix",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
  },
];

const container = document.querySelector(".container2");
console.log(container);
products.forEach(
  (product) =>
    (container.innerHTML += ` 
<div class="card">
        <a target="_blank" class="card-link" href="https://www.apple.com/az/"></a>
        <h2 class="title">${product.title}</h2>
        <div class="image"><img
          src=${product.thumbnail}
          alt=${product.title}
        /></div>
        <p>Brand: ${product.brand}</p>
        <p>category: ${product.category}</p>
        <p>Description:${product.description} </p>
        <h3>Price: ${product.price}</h3>
      </div>`)
);
