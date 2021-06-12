import { functionImportTest } from '@utils';
import { keyForEachElement } from './key-for-each-element.function';

describe('keyForEachElement Function', () => {
  functionImportTest(keyForEachElement);

  it('should return empty array', () => {
    expect(keyForEachElement([])).toEqual([]);
    expect(keyForEachElement(null)).toEqual([]);
    expect(keyForEachElement(true)).toEqual([]);
    expect(keyForEachElement(false)).toEqual([]);
    expect(keyForEachElement(undefined)).toEqual([]);
  });

  it('should wrap one value in array', () => {
    expect(keyForEachElement(1)).toEqual([1]);
    expect(keyForEachElement('')).toEqual(['']);
    expect(keyForEachElement('test')).toEqual(['test']);
  });

  it('should add key for each component', () => {
    const TestComponent = () => <h1>test</h1>;

    const elementsArray = [<TestComponent />, <TestComponent />, <TestComponent />];

    elementsArray.forEach((_element) => {
      expect(_element.key).toBeNull();
    });

    const elementsWithKeys = keyForEachElement([
      <TestComponent />,
      <TestComponent />,
      <TestComponent />,
    ]);

    elementsWithKeys.forEach((_element, index) => {
      // @ts-ignore
      expect(_element.key).toEqual(`.${index}`);
    });
  });
});
