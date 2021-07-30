import storageService from '../../src/common/storageService';


describe('StorageService Library', () => {
  test('Should render StorageService Library', () => {
    expect(storageService).toBeDefined();
  });
  describe('Should check function setItem()', () => {
    storageService.setItem('name', 'sessionStorage');
    const name = storageService.getItem('name');
    test('Should have name="sessionStorage" in sessionStorage', () => {
      expect(name).toEqual('sessionStorage');
    });
    test('Should remove option using removeItem from sessionStorage', () => {
      storageService.setItem('remItem', 'remove');
      storageService.removeItem('remItem');
      expect(sessionStorage.getItem('remItem')).toEqual(null);
    });
    test('Should clear sessionStorage', () => {
      storageService.clear();
      expect(sessionStorage.length).toEqual(0);
    });
  });
});
