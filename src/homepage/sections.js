import Recommended from './components/Recommended';

const Section = {
  recommended: {
    title: 'Recommended',
    component: Recommended,
  },
  trending: {
    title: 'Trending',
    component: () => null
  }
};

export default Section;
