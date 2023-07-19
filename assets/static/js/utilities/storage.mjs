// inspired in part by: 
// - https://dev.to/bytebodger/replacing-javascript-classes-with-the-module-design-pattern-48bl
// - https://medium.com/@emadalam/namespace-localstorage-e2d1d2e68b20

const storage = ((api) => {
  const _APP_NAME = "2W6-W23";
  const _namespaceKey = (key) => `${_APP_NAME}.${key}`;

  const clear = () => {
    api.clear();
  };
  const getItem = (key) => {
    api.getItem(_namespaceKey(key));
  };
  const removeItem = (key) => {
    api.removeItem(_namespaceKey(key));
  };
  const setItem = (key, value) => {
    api.setItem(_namespaceKey(key), value);
  };

  return { clear, getItem, removeItem, setItem };
})(window.localStorage);

export { storage } ;
