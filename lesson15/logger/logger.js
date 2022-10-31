export const createLogger = () => {
  const logs = [];
  return {
    warn(warnMessage) {
      logs.push({ message: warnMessage, dateTime: new Date(), type: 'warn' });
    },

    error(errorMessage) {
      logs.push({ message: errorMessage, dateTime: new Date(), type: 'error' });
    },

    log(logMessage) {
      logs.push({ message: logMessage, dateTime: new Date(), type: 'log' });
    },

    getRecords(type) {
      const compareLogs = (log1, log2) => log2.dateTime.getTime() - log1.dateTime.getTime();
      if (!type || !type.length) {
        return logs.sort(compareLogs);
      }
      return logs.filter(log => log.type === type).sort(compareLogs);
    },
  };
};
