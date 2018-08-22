const mockData = [
  {
    title: 'Gaming PC Build under Rp5jt',
    thumbnail: 'https://via.placeholder.com/94x150',
    description:
      'Nisi qui ullamco elit id et adipisicing officia proident laborum anim. Cupidatat anim non non aute sint officia aliquip.',
    price: 'Rp5jt',
    features: [
      'Intel Core i9',
      'GeForce GTX 1080ti',
      '32gb RAM DDR4',
      '2TB SSD',
    ],
  },
  {
    title: 'Gaming PC Build under Rp5jt',
    thumbnail: 'https://via.placeholder.com/94x150',
    description:
      'Nisi qui ullamco elit id et adipisicing officia proident laborum anim. Cupidatat anim non non aute sint officia aliquip.',
    price: 'Rp5jt',
    features: [
      'Intel Core i9',
      'GeForce GTX 1080ti',
      '32gb RAM DDR4',
      '2TB SSD',
    ],
  },
  {
    title: 'Gaming PC Build under Rp5jt',
    thumbnail: 'https://via.placeholder.com/94x150',
    description:
      'Nisi qui ullamco elit id et adipisicing officia proident laborum anim. Cupidatat anim non non aute sint officia aliquip.',
    price: 'Rp5jt',
    features: [
      'Intel Core i9',
      'GeForce GTX 1080ti',
      '32gb RAM DDR4',
      '2TB SSD',
    ],
  },
  {
    title: 'Gaming PC Build under Rp5jt',
    thumbnail: 'https://via.placeholder.com/94x150',
    description:
      'Nisi qui ullamco elit id et adipisicing officia proident laborum anim. Cupidatat anim non non aute sint officia aliquip.',
    price: 'Rp5jt',
    features: [
      'Intel Core i9',
      'GeForce GTX 1080ti',
      '32gb RAM DDR4',
      '2TB SSD',
    ],
  },
  {
    title: 'Gaming PC Build under Rp5jt',
    thumbnail: 'https://via.placeholder.com/94x150',
    description:
      'Nisi qui ullamco elit id et adipisicing officia proident laborum anim. Cupidatat anim non non aute sint officia aliquip.',
    price: 'Rp5jt',
    features: [
      'Intel Core i9',
      'GeForce GTX 1080ti',
      '32gb RAM DDR4',
      '2TB SSD',
    ],
  },
];

export default url => {
  switch (url) {
    case '/api/builds/recommended':
      return withDelay(mockData, 1000);
    default:
      throw new Error('Network error');
  }
};

function withDelay(data, ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, ms);
  });
}
