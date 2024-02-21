export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageSrc: string;
  itemLink: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: "Lenovo Legion 5i Pro (2023)",
    price: 1499,
    description: "High-performance gaming laptop with a powerful processor, good cooling, and a large display.",
    imageSrc: "https://resources.cdn-kaspi.kz/img/m/p/h7b/h43/80793955794974.jpg?format=gallery-small",
    itemLink: "https://kaspi.kz/shop/p/lenovo-legion-pro-7-16irx8h-82wq003crk-temno-seryi-110388738/?c=750000000",
    rating:4.9
  },
  {
    id: 2,
    name: "Dell XPS 15 (2023)",
    price: 1499,
    description: "Gorgeous OLED display, powerful performance, and sleek design in a premium Windows laptop.",
    imageSrc: "https://resources.cdn-kaspi.kz/img/m/p/h08/h5e/85134389608478.jpg?format=gallery-small",
    itemLink: "https://kaspi.kz/shop/p/dell-xps-15-9520-210-bdvf-1-serebristyi-106834466/?c=750000000",
    rating: 3.2
  },
  {
    id: 3,
    name: "Microsoft Surface 9",
    price: 999,
    description: "Sleek and stylish Windows laptop with a comfortable keyboard and long battery life.",
    imageSrc: "https://resources.cdn-kaspi.kz/img/m/p/h75/h38/80236466077726.jpg?format=gallery-small",
    itemLink: "https://kaspi.kz/shop/p/microsoft-surface-pro-9-13-djuim-16-gb-256-gb-chernyi-109959773/?c=750000000",
    rating: 4
  },
  {
    id: 4,
    name: "HP Spectre x360 14 (2024)",
    price: 1299,
    description: "Versatile 2-in-1 laptop with powerful performance, long battery life, and a gorgeous OLED display.",
    imageSrc: "https://resources.cdn-kaspi.kz/img/m/p/h60/h8b/66311216332830.jpg?format=gallery-small",
    itemLink: "https://kaspi.kz/shop/p/hp-spectre-x360-16-f1000ur-725w6ea-temno-sinii-107798565/?c=750000000",
    rating: 2
  },
  {
    id: 5,
    name: "Asus ROG Zephyrus G15 (2023)",
    price: 1799,
    description: "Powerful gaming laptop with a slim design, great performance, and long battery life.",
    imageSrc: "https://resources.cdn-kaspi.kz/img/m/p/hcc/hc7/68109813809182.jpg?format=gallery-small",
    itemLink: "https://kaspi.kz/shop/p/asus-rog-zephyrus-g16-gu605mv-n4084-90nr0it3-m00310-chernyi-116515748/?c=750000000",
    rating: 3.5
  },
  {
    id: 6,
    name: "MacBook Air M2 (2023)",
    price: 1199,
    description: "Apple's thin and light powerhouse with Apple M2 chip, long battery life, and premium design.",
    imageSrc: "https://resources.cdn-kaspi.kz/img/m/p/h7d/h87/79798647357470.jpg?format=gallery-small",
    itemLink: "https://kaspi.kz/shop/p/apple-macbook-air-15-2023-mqkw3-sinii-111217728/?c=750000000",
    rating: 1.2,
  },
  {
    id: 7,
    name: "Acer Aspire 5 (2023)",
    price: 599,
    description: "Affordable laptop with good performance for everyday tasks and long battery life.",
    imageSrc: "https://resources.cdn-kaspi.kz/img/m/p/hbd/h13/67234696855582.jpg?format=gallery-small",
    itemLink: "https://kaspi.kz/shop/p/acer-aspire-5-a515-57-i385suw1-nx-k3ker-00e-seryi-108193291/?c=750000000",
    rating:4.9
  },
   {
    id: 8,
    name: 'Microsoft Surface Laptop 5',
    price: 999,
    description: 'Sleek and premium Windows laptop with comfortable keyboard and long battery life.',
    imageSrc: 'https://resources.cdn-kaspi.kz/img/m/p/h49/h4c/68816737140766.jpg?format=gallery-small',
    itemLink: 'https://kaspi.kz/shop/p/microsoft-surface-pro-9-13-djuim-8-gb-256-gb-zelenyi-108822576/?c=750000000',
    rating:4.9
  },
  {
    id: 9,
    name: 'Asus ROG Zephyrus G14',
    price: 1599,
    description: 'Powerful gaming laptop with thin and light design and excellent cooling.',
    imageSrc: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h0d/85192795029534.png?format=gallery-small',
    itemLink: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-ga401qe-hz101t-90nr05r5-m04260-seryi-102301256/?c=750000000',
    rating:4.9
  },
  {
    id: 10,
    name: 'Lenovo Legion 5',
    price: 1399,
    description: 'Balanced gaming laptop with powerful specs, good cooling, and long battery life.',
    imageSrc: 'https://resources.cdn-kaspi.kz/img/m/p/hf5/hf7/64576040697886.jpg?format=gallery-small',
    itemLink: 'https://kaspi.kz/shop/p/lenovo-legion-5-pro-16arh7h-82rg00ggrk-seryi-108239333/?c=750000000',
    rating:4.9
  },
  {
    id: 11,
    name: 'Acer Aspire 5',
    price: 599,
    description: 'Affordable and reliable laptop for everyday tasks and productivity.',
    imageSrc: 'https://resources.cdn-kaspi.kz/img/m/p/hc6/ha0/84439413948446.jpg?format=gallery-small',
    itemLink: 'https://kaspi.kz/shop/p/acer-aspire-5-a515-57-50kq-nx-kn4er-003-chernyi-114312433/?c=750000000',
    rating:4.9
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/