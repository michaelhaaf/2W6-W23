// inspired in part by: 
// - https://dev.to/bytebodger/replacing-javascript-classes-with-the-module-design-pattern-48bl
// - https://medium.com/@emadalam/namespace-localstorage-e2d1d2e68b20

const Storage = ((api) => {
  const APP_NAME = "2W6-W23";
  const namespaceKey = (key) => `${APP_NAME}.${key}`;

  const clear = () => {
    api.clear();
  };
  const getItem = (key) => {
    return api.getItem(namespaceKey(key));
  };
  const removeItem = (key) => {
    api.removeItem(namespaceKey(key));
  };
  const setItem = (key, value) => {
    api.setItem(namespaceKey(key), value);
  };

  return { clear, getItem, removeItem, setItem };
})(window.localStorage);

export default Storage;
