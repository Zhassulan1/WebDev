export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageSrc: string;
  itemLink: string;
  rating: number;
  category: string;
  liked: boolean;
  like: number;
}

export const products = [
  {
    id: 1,
    name: "Lenovo Legion 5i Pro (2023)",
    price: 1499,
    description: "High-performance gaming laptop with a powerful processor, good cooling, and a large display.",
    imageSrc: "https://resources.cdn-kaspi.kz/img/m/p/h7b/h43/80793955794974.jpg?format=gallery-small",
    itemLink: "https://kaspi.kz/shop/p/lenovo-legion-pro-7-16irx8h-82wq003crk-temno-seryi-110388738/?c=750000000",
    rating:4.9,
    category: "laptops",
    liked: false,
    like: 2,
  },
  {
    id: 2,
    name: "Dell XPS 15 (2023)",
    price: 1499,
    description: "Gorgeous OLED display, powerful performance, and sleek design in a premium Windows laptop.",
    imageSrc: "https://resources.cdn-kaspi.kz/img/m/p/h08/h5e/85134389608478.jpg?format=gallery-small",
    itemLink: "https://kaspi.kz/shop/p/dell-xps-15-9520-210-bdvf-1-serebristyi-106834466/?c=750000000",
    rating: 3.2,
    category: "laptops",
    liked: false,
    like: 2,
  },
  {
    id: 3,
    name: "MacBook Air M2 (2023)",
    price: 1199,
    description: "Apple's thin and light powerhouse with Apple M2 chip, long battery life, and premium design.",
    imageSrc: "https://resources.cdn-kaspi.kz/img/m/p/h7d/h87/79798647357470.jpg?format=gallery-small",
    itemLink: "https://kaspi.kz/shop/p/apple-macbook-air-15-2023-mqkw3-sinii-111217728/?c=750000000",
    rating: 1.2,
    category: "laptops",
    liked: false,
    like: 2,
  },
  {
    id: 4,
    name: "HP Spectre x360 14 (2024)",
    price: 1299,
    description: "Versatile 2-in-1 laptop with powerful performance, long battery life, and a gorgeous OLED display.",
    imageSrc: "https://resources.cdn-kaspi.kz/img/m/p/h60/h8b/66311216332830.jpg?format=gallery-small",
    itemLink: "https://kaspi.kz/shop/p/hp-spectre-x360-16-f1000ur-725w6ea-temno-sinii-107798565/?c=750000000",
    rating: 2,
    category: "laptops",
    liked: false,
    like: 2,
  },
  {
    id: 5,
    name: "Asus ROG Zephyrus G15 (2023)",
    price: 1799,
    description:
      "Powerful gaming laptop with a slim design, great performance, and long battery life.",
    imageSrc:
      "https://resources.cdn-kaspi.kz/img/m/p/hcc/hc7/68109813809182.jpg?format=gallery-small",
    itemLink:
      "https://kaspi.kz/shop/p/asus-rog-zephyrus-g16-gu605mv-n4084-90nr0it3-m00310-chernyi-116515748/?c=750000000",
    rating: 3.5,
    category: "laptops",
    liked: false,
    like: 2,
  },
  {
    id: 6,
    name: "iPhone 14 Pro",
    price: 999,
    description:
      "The latest iPhone with a powerful A16 chip, stunning camera system, and all-day battery life.",
    imageSrc:
      "https://resources.cdn-kaspi.kz/img/m/p/h7b/hdc/64428132991006.jpg?format=gallery-medium",
    itemLink: "https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000",
    rating: 4.8,
    category: "phones",
    liked: false,
    like: 1200,
  },
  {
    id: 7,
    name: "Samsung Galaxy S22",
    price: 799,
    description:
      "Samsung's flagship phone with a powerful processor, pro-grade camera, and all-day battery.",
    imageSrc: "https://resources.cdn-kaspi.kz/img/m/p/h49/ha4/64305573560350.jpg?format=gallery-medium",
    itemLink: "https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-256-gb-chernyi-103667959/?c=750000000",
    rating: 4.5,
    category: "phones",
    liked: false,
    like: 850,
  },
  {
    id: 8,
    name: "Google Pixel 7",
    price: 599,
    description:
      "Google's latest Pixel phone with an amazing camera, smooth performance, and clean Android experience.",
    imageSrc:
      "https://resources.cdn-kaspi.kz/img/m/p/ha0/hb2/64291475062814.jpg?format=gallery-medium",
    itemLink: "https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-chernyi-106971937/?c=750000000",
    rating: 4.3,
    category: "phones",
    liked: false,
    like: 780,
  },
  {
    id: 9,
    name: "Xiaomi 12 Pro",
    price: 999,
    description:
      "Xiaomi's premium flagship with a brilliant AMOLED display, pro-grade camera system, and super-fast charging.",
    imageSrc:
      "https://resources.cdn-kaspi.kz/img/m/p/h40/he1/67791752691742.jpg?format=preview-large",
    itemLink: "https://kaspi.kz/shop/p/xiaomi-12-pro-12-gb-256-gb-seryi-108404911/?c=750000000",
    rating: 4.2,
    category: "phones",
    liked: false,
    like: 600,
  },
  {
    "id": 10,
    "name": "LG 27GN850-B Gaming Monitor",
    "price": 399,
    "description": "27-inch IPS gaming monitor with 144Hz refresh rate, G-Sync compatibility, and HDR 10 support.",
    "imageSrc": "https://resources.cdn-kaspi.kz/img/m/p/ha6/hf7/64049223729182.jpg?format=preview-large",
    "itemLink": "https://kaspi.kz/shop/p/lg-27gp750-b-chernyi-104545019/?c=750000000",
    "rating": 4.7,
    "category": "Peripherals",
    "liked": false,
    "like": 0
  },
  {
    "id": 11,
    "name": "Logitech G502 HERO Gaming Mouse",
    "price": 79,
    "description": "Wired gaming mouse with customizable RGB lighting, 16,000 DPI HERO sensor, and 11 programmable buttons.",
    "imageSrc": "https://resources.cdn-kaspi.kz/img/m/p/h4f/h23/63835048738846.jpg?format=preview-large",
    "itemLink": "https://kaspi.kz/shop/p/logitech-g502-hero-910-005470-chernyi-9101669/?c=750000000",
    "rating": 4.8,
    "category": "Peripherals",
    "liked": false,
    "like": 0
  },
  {
    "id": 12,
    "name": "Razer BlackWidow V3 Pro Mechanical Keyboard",
    "price": 199,
    "description": "Wireless mechanical keyboard with Razer Chroma RGB lighting, Razer Yellow mechanical switches, and long battery life.",
    "imageSrc": "https://resources.cdn-kaspi.kz/img/m/p/hb9/h9f/64076838699038.jpg?format=preview-large",
    "itemLink": "https://kaspi.kz/shop/p/razer-blackwidow-v3-rz03-03540800-r3r1-chernyi-101501481/?c=750000000&df=7",
    "rating": 4.5,
    "category": "Peripherals",
    "liked": false,
    "like": 0
  },
  {
    "id": 13,
    "name": "Samsung T7 Portable SSD",
    "price": 99,
    "description": "500GB portable solid state drive with fast transfer speeds, compact design, and shock resistance.",
    "imageSrc": "https://resources.cdn-kaspi.kz/img/m/p/h2b/h1d/64013276807198.jpg?format=preview-large",
    "itemLink": "https://kaspi.kz/shop/p/samsung-portable-t7-mu-pc2t0r-ww-2tb-krasnyi-101162113/?c=750000000",
    "rating": 4.6,
    "category": "hardware",
    "liked": false,
    "like": 0
  },
  {
    "id": 14,
    "name": "Portable Bluetooth Speaker",
    "price": 49.99,
    "description": "Take your music anywhere with this portable Bluetooth speaker.",
    "imageSrc": "https://resources.cdn-kaspi.kz/img/m/p/h06/h36/81188929404958.png?format=preview-large",  
    "itemLink": "https://kaspi.kz/shop/p/bt-speaker-zqs-4239-chernyi-110785723/?c=750000000",
    "rating": 0.0,
    "category": "Peripherals",
    "liked": false,
    "like": 0
  },
  {
    "id": 15,
    "name": "Smart Wi-Fi Thermostat",
    "price": 79.99,
    "description": "Control your home's temperature remotely with this smart Wi-Fi thermostat.",
    "imageSrc": "https://resources.cdn-kaspi.kz/img/m/p/h51/hfe/84098158723102.jpg?format=preview-large",  
    "itemLink": "https://kaspi.kz/shop/p/green-heat-sk85-sensornyi-s-wi-fi-i-podkljucheniem-k-alise-113655075/?c=750000000",
    "rating": 0.0,
    "category": "hardware",
    "liked": false,
    "like": 0
  },
  {
    "id": 16,
    "name": "WD Blue SN770 NVMe PCIe Gen4 SSD (500GB)",
    "price": 99.99,
    "description": "High-performance NVMe PCIe Gen4 SSD for faster loading times and data transfers.",
    "imageSrc": "https://resources.cdn-kaspi.kz/img/m/p/hb3/h36/63761614864414.jpg?format=preview-large",
    "itemLink": "https://kaspi.kz/shop/p/western-digital-wd-blue-pc-ssd-m-2-250gb-6800597/?c=750000000",
    "rating": 4.7,
    "category": "hardware",
    "liked": false,
    "like": 0
  },
  {
    "id": 17,
    "name": "LG 27GN850-B Ultragear Gaming Monitor (27 inch, 144Hz, IPS)",
    "price": 349.99,
    "description": "Fast and responsive gaming monitor with stunning visuals and smooth gameplay.",
    "imageSrc": "https://resources.cdn-kaspi.kz/img/m/p/ha6/hf7/64049223729182.jpg?format=preview-large",
    "itemLink": "https://kaspi.kz/shop/p/lg-27gp750-b-chernyi-104545019/?c=750000000",
    "rating": 4.5,
    "category": "hardware",
    "liked": false,
    "like": 0
  },
];

