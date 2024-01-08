import Province from '../src/province';
import City, { CITIES_ATTRIBUTES } from '../src/city';
import Region from '../src/region';

test('should get city attributes', () => {
  const attrs = CITIES_ATTRIBUTES[City.MOIMACCO_030060];
  expect(attrs.name).toBe('Moimacco');
  expect(attrs.province).toBe(Province.UDINE);
  expect(attrs.region).toBe(Region.FRIULI_VENEZIA_GIULIA);
});
