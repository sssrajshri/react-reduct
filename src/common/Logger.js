const logger = {
  log(obj) {
    window.console.log(obj);
  },
  debug(msg, response) {
    window.console.debug(msg, response);
  },
  error(msg, err) {
    window.console.error(msg, err);
  }
};

export default logger;
