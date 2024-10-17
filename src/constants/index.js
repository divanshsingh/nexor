import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, nikeCourtVision, airJordanOneRetro, airJordanOneSe, nikeAirZoom, nikeSbReactLoe, nikeAirMaz, thumbnailShoe3, thumbnailShoe1, thumbnailShoe2, nikeCourtVision1, nikeCourtVision2, nikeCourtVision3, airJordanOneRetro1, airJordanOneSe1, nikeAirZoom1, nikeSbReactLoe1, nikeAirMaz1, nikeAirMaz2, nikeAirMaz3, nikeSbReactLoe2, nikeSbReactLoe3, nikeAirZoom2, nikeAirZoom3, airJordanOneSe3, airJordanOneSe2, airJordanOneRetro2, airJordanOneRetro3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#offers", label: "Offers" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
      id: 1,
      imgURL: nikeCourtVision,
      productImg1: nikeCourtVision1,
      productImg2: nikeCourtVision2,
      productImg3: nikeCourtVision3,
      name: "Nike Court Vision Low",
      price: 6758.20,
      url: "nike-court-vision-low",
      description: "A sleek, low-top design inspired by classic basketball sneakers, perfect for daily casual wear.",
      quantity: 1,
      selectedSize: 6,
    //   sizes: [6, 7, 8, 9, 10],
    },
    {
      id: 2,
      imgURL: airJordanOneRetro,
      productImg1: airJordanOneRetro1,
      productImg2: airJordanOneRetro2,
      productImg3: airJordanOneRetro3,
      name: "Nexor Air Jordan 1 Retro",
      price: 10234.20,
      url: "nexor-air-jordan-1-retro",
      description: "A retro version of the iconic Air Jordan 1, offering classic style and premium comfort.",
      quantity: 1,
      selectedSize: 6,
    //   sizes: [6, 7, 8, 9, 10],
    },
    {
      id: 3,
      imgURL: airJordanOneSe,
      productImg1: airJordanOneSe1,
      productImg2: airJordanOneSe2,
      productImg3: airJordanOneSe3,
      name: "Nexor Air Jordan 1 SE",
      price: 9383.20,
      url: "nexor-air-jordan-1-se",
      description: "The SE edition of Air Jordan 1, featuring unique colorways and enhanced durability for long-lasting style.",
      quantity: 1,
      selectedSize: 6,
    //   sizes: [6, 7, 8, 9, 10],
    },
    {
      id: 4,
      imgURL: nikeAirZoom,
      productImg1: nikeAirZoom1,
      productImg2: nikeAirZoom2,
      productImg3: nikeAirZoom3,
      name: "Nexor Air Zoom",
      price: 7832.20,
      url: "nexor-air-zoom",
      description: "Lightweight and fast, designed for runners looking for speed and comfort with responsive cushioning.",
      quantity: 1,
      selectedSize: 6,
    //   sizes: [6, 7, 8, 9, 10],
    },
    {
      id: 5,
      imgURL: nikeSbReactLoe,
      productImg1: nikeSbReactLoe1,
      productImg2: nikeSbReactLoe2,
      productImg3: nikeSbReactLoe3,
      name: "Nexor SB React Leo",
      price: 3546.20,
      url: "nexor-sb-react-leo",
      description: "Skateboarding shoes featuring React technology for superior board feel and impact protection.",
      quantity: 1,
      selectedSize: 6,
    //   sizes: [6, 7, 8, 9, 10],
    },
    {
      id: 6,
      imgURL: nikeAirMaz,
      productImg1: nikeAirMaz1,
      productImg2: nikeAirMaz2,
      productImg3: nikeAirMaz3,
      name: "Nexor Air Maz",
      price: 11677.20,
      url: "nexor-air-maz",
      description: "Premium running shoes with advanced cushioning for exceptional comfort during high-performance activities.",
      quantity: 1,
      selectedSize: 6,
    //   sizes: [6, 7, 8, 9, 10],
    }
  ];
  
  

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];