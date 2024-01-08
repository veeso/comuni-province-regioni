import Province, {
  provinceToString,
  PROVINCES_BY_REGION,
} from '../src/province';
import Region from '../src/region';

test('should get province name', () => {
  expect(provinceToString(Province.ALESSANDRIA)).toBe('Alessandria');
});

test('Should get provinces by region', () => {
  expect(PROVINCES_BY_REGION[Region.PIEMONTE]).toEqual([
    Province.ALESSANDRIA,
    Province.ASTI,
    Province.BIELLA,
    Province.CUNEO,
    Province.NOVARA,
    Province.TORINO,
    Province.VERBANO_CUSIO_OSSOLA,
    Province.VERCELLI,
  ]);
});
