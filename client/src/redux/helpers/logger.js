let instance;

const logLevels = process.env.REACT_APP_LOG_LEVELS
  ? String(process.env.REACT_APP_LOG_LEVELS).split(",")
  : [];

export class Logger {
  constructor(transports = []) {
    if (!instance) {
      this.transports = transports;
      instance = this;
    }

    return instance;
  }

  shouldLog(method) {
    const isLogLevelAllowed = logLevels.findIndex((f) => f === method);
    return isLogLevelAllowed > 0;
  }

  send(method, ...args) {
    try {
      if (this.shouldLog(method)) {
        this.transports.forEach((t) => {
          t[method](...args);
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  log(...args) {
    return this.send("log", ...args);
  }

  error(...args) {
    return this.send("error", ...args);
  }

  warn(...args) {
    return this.send("warn", ...args);
  }

  info(...args) {
    return this.send("info", ...args);
  }

  debug(...args) {
    return this.send("debug", ...args);
  }
}

const transports = [console];

export default new Logger(transports);
