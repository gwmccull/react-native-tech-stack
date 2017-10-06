import { selectLibrary } from '../../../src/action';

describe('selectLibrary', () => {
  it('returns an object', () => {
    const libId = 1;
    const result = selectLibrary(libId);
    expect(result).toEqual({
      type: 'select_library',
      payload: libId,
    });
  });
});
