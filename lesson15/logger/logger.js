export const createLogger = () => {
  const TYPE_MESSAGE_WARNING = 'warn';
  const TYPE_MESSAGE_ERROR = 'error';
  const TYPE_MESSAGE_LOG = 'log';
  const logs = [];
  const compareLogs = (log1, log2) => log2.dateTime.getTime() - log1.dateTime.getTime();

  return {
    warn(warnMessage) {
      logs.push({ message: warnMessage, dateTime: new Date(), type: TYPE_MESSAGE_WARNING });
    },

    error(errorMessage) {
      logs.push({ message: errorMessage, dateTime: new Date(), type: TYPE_MESSAGE_ERROR });
    },

    log(logMessage) {
      logs.push({ message: logMessage, dateTime: new Date(), type: TYPE_MESSAGE_LOG });
    },

    getRecords(type) {
      if (!type || !type.length) {
        return logs.sort(compareLogs);
      }
      return logs.filter(log => log.type === type).sort(compareLogs);
    },
  };
};
