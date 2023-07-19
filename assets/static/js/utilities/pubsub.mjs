// inspired by: https://youtu.be/nQRXi1SVOow (LearnCode.academy Modular Javascript #4 tutorial)
const events = (() => {
  const _events = {};

  const on = (eventName, callback) => {
    _events[eventName] = _events[eventName] || [];
    _events[eventName].push(callback);
  };

  // TODO replace for loop with map/filter
  const off = (eventName, callback) => {
    if (_events[eventName]) {
      for (let i = 0; i < _events[eventName].length; i++) {
        if (_events[eventName][i] === callback) {
          _events[eventName].splice(i, 1);
          break;
        }
      }
    }
  };

  const emit = (eventName, data) => {
    if (_events[eventName]) {
      _events[eventName].forEach(function (callback) {
        callback(data);
      });
    }
  };

  return { on, off, emit };
})();

export { events };
