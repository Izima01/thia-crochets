import img1 from '../../../assets/Carousel-1.png';
import img2 from '../../../assets/Carousel-2.png';
import img3 from '../../../assets/Carousel-3.png';
import img4 from '../../../assets/Carousel-4.png';
import img5 from '../../../assets/Carousel-5.png';
import product1 from '../../../assets/product/details/product-1.jpg';
import product2 from '../../../assets/product/details/product-2.jpg';
import product3 from '../../../assets/product/details/product-3.jpg';
import product4 from '../../../assets/product/details/product-4.jpg';


export const numberGen = () => {
  let num = Math.random();
  const str = num.toString().replace("0.", '').slice(0, 5);
  return str;
}

export const productArray = [
  {
    id: '51854',
    images: [img1, product1, product2, product3, product4],
    label: 'sale',
    name: 'Lorem ipsum dolor',
    price: 60,
    rating: 4,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quas.'
  },
  {
    id: '44168',
    images: [img2, product1, product2, product3, product4],
    label: '',
    name: 'Dolor sit amet',
    price: 45,
    rating: 3,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quas.'
  },
  {
    id: '19228',
    images: [img3, product1, product2, product3, product4],
    label: 'new',
    name: 'Ipsum qui alias',
    price: 50,
    rating: 5,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quas.'
  },
  {
    id: '36641',
    images: [img4, product1, product2, product3, product4],
    label: 'out of stock',
    name: 'Adipisicing elit',
    price: 77,
    rating: 2,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quas.'
  },
  {
    id: '71402',
    images: [img5, product1, product2, product3, product4],
    label: 'sale',
    name: 'Minima libero qui',
    price: 56,
    rating: 4,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quas.'
  },
  {
    id: '86563',
    images: [img1, product1, product2, product3, product4],
    label: 'sale',
    name: 'Provident facilis',
    price: 45,
    rating: 4,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quas.'
  },
  {
    id: '17860',
    images: [img2, product1, product2, product3, product4],
    label: '',
    name: 'Alias dignissimos',
    price: 55,
    rating: 3,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quas.'
  },
  {
    id: '73934',
    images: [img3, product1, product2, product3, product4],
    label: 'new',
    name: 'Perspiciatis vie',
    price: 85,
    rating: 5,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quas.'
  },
  {
    id: '59982',
    images: [img4, product1, product2, product3, product4],
    label: 'out of stock',
    name: 'Recusandae vitae',
    price: 97,
    rating: 2,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quas.'
  },
  {
    id: '42024',
    images: [img5, product1, product2, product3, product4],
    label: 'sale',
    name: 'Qumolestias nihil id',
    price: 105,
    rating: 4,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quas.'
  }
];