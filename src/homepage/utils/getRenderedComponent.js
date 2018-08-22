import Section from '../sections';

export default function getRenderedComponent(section) {
  return Section[section].component;
}
