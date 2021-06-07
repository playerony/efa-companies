export function functionImportTest(func: Function) {
  describe('import test', () => {
    it(`should import ${func.name}`, () => {
      expect(typeof func).toBe('function');
    });
  });
}
