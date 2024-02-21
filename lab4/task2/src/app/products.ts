export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageSrc: string;
  linkToBuy: string;
}

export const products = [
 {
    id: 1,
    name: "MacBook Air M2 (2023)",
    price: 1199,
    description: "Apple's thin and light powerhouse with Apple M2 chip, long battery life, and premium design.",
    imageSrc: "https://www.apple.com/macbook-air/images/home/buy-now-2023-06.jpg",
    linkToBuy: "https://www.apple.com/shop/buy/mac/macbook-air"
  },
  {
    id: 2,
    name: "Dell XPS 15 (2023)",
    price: 1499,
    description: "Gorgeous OLED display, powerful performance, and sleek design in a premium Windows laptop.",
    imageSrc: "https://www.dell.com/en-us/shop/cto/xps-15-laptop/pd/9320a/pdv/v1.0",
    linkToBuy: "https://www.dell.com/en-us/shop/cto/xps-15-laptop/pd/9320a/pdv/v1.0"
  },
  {
    id: 3,
    name: "Microsoft Surface Laptop 5",
    price: 999,
    description: "Sleek and stylish Windows laptop with a comfortable keyboard and long battery life.",
    imageSrc: "https://www.microsoft.com/en-us/surface/laptops/surface-laptop-5",
    linkToBuy: "https://www.microsoft.com/en-us/surface/laptops/surface-laptop-5"
  },
  {
    id: 4,
    name: "HP Spectre x360 14 (2024)",
    price: 1299,
    description: "Versatile 2-in-1 laptop with powerful performance, long battery life, and a gorgeous OLED display.",
    imageSrc: "https://www.hp.com/us-en/laptops/spectre-x360-14/product.htm",
    linkToBuy: "https://www.hp.com/us-en/laptops/spectre-x360-14/product.htm"
  },
  {
    id: 5,
    name: "Asus ROG Zephyrus G15 (2023)",
    price: 1799,
    description: "Powerful gaming laptop with a slim design, great performance, and long battery life.",
    imageSrc: "https://www.asus.com/us/Gaming-Laptops/ROG-Zephyrus-G15-2023/",
    linkToBuy: "https://www.asus.com/us/Gaming-Laptops/ROG-Zephyrus-G15-2023/"
  },
  {
    id: 6,
    name: "Lenovo Legion 5i Pro (2023)",
    price: 1499,
    description: "High-performance gaming laptop with a powerful processor, good cooling, and a large display.",
    imageSrc: "https://www.lenovo.com/us/en/laptops/legion/legion-5-series/legion-5i-pro-gen-8/p/LEN101K002Q",
    linkToBuy: "https://www.lenovo.com/us/en/laptops/legion/legion-5-series/legion-5i-pro-gen-8/p/LEN101K002Q"
  },
  {
    id: 7,
    name: "Acer Aspire 5 (2023)",
    price: 599,
    description: "Affordable laptop with good performance for everyday tasks and long battery life.",
    imageSrc: "https://www.acer.com/us-en/laptops/aspire/aspire-5-a515-57/overview",
    linkToBuy: "https://www.acer.com/us-en/laptops/aspire/aspire-5-a515-57/overview"
  },
   {
    id: 8,
    name: 'Microsoft Surface Laptop 5',
    price: 999,
    description: 'Sleek and premium Windows laptop with comfortable keyboard and long battery life.',
    imageSrc: 'https://www.microsoft.com/en-us/surface/products/laptops/surface-laptop-5/tech-specs',
    linkToBuy: 'https://www.microsoft.com/en-us/surface/products/laptops/surface-laptop-5',
  },
  {
    id: 9,
    name: 'Asus ROG Zephyrus G14',
    price: 1599,
    description: 'Powerful gaming laptop with thin and light design and excellent cooling.',
    imageSrc: 'https://www.asus.com/us/ROG-Laptops/ROG-Zephyrus-G14-GA402RJ-2023/gallery/',
    linkToBuy: 'https://www.asus.com/us/ROG-Laptops/ROG-Zephyrus-G14-GA402RJ-2023/',
  },
  {
    id: 10,
    name: 'Lenovo Legion 5',
    price: 1399,
    description: 'Balanced gaming laptop with powerful specs, good cooling, and long battery life.',
    imageSrc: 'https://www.lenovo.com/us/en/laptops/gaming-laptops/legion-laptops/legion-5-gen-7-(amd)/p/LEN101L0058',
    linkToBuy: 'https://www.lenovo.com/us/en/laptops/gaming-laptops/legion-laptops/legion-5-gen-7-(amd)/p/LEN101L0058',
  },
  {
    id: 11,
    name: 'Acer Aspire 5',
    price: 599,
    description: 'Affordable and reliable laptop for everyday tasks and productivity.',
    imageSrc: 'https://us.acer.com/aceraspire/laptops/aspire-5-a515-57-5942/gallery',
    linkToBuy: 'https://us.acer.com/aceraspire/laptops/aspire-5-a515-57-5942/overview',
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/