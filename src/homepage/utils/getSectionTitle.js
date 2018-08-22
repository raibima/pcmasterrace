import Section from '../sections';

export default function getSectionTitle(section) {
  return Section[section].title;
}
