import Section from '../sections';

export default function isValidSection(section) {
  return Object.keys(Section).includes(section);
}
