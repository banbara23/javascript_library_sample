var winston = require('winston');

var getLoggerSettings = function(consoleLog) {
  var settings = {
    transports: [
      new winston.transports.File({ filename: "winston.log", json: false})
    ],
    exceptionHandlers: [
      new winston.transports.File({ filename: "winston.log", json: false})
    ]
  };

  if (consoleLog) {
    settings.transports.push(new winston.transports.Console({colorize: true, timestamp: true, level: 'silly'}));
    settings.exceptionHandlers.push(new winston.transports.Console({colorize: true, timestamp: true, level: 'silly'}));
  }

  return settings;
};

var logger = new (winston.Logger)(getLoggerSettings(true));
logger.silly('silly');
logger.debug('debug');
logger.verbose('verbose');
logger.info('info');
logger.warn('warn');
logger.error('error');
console.error('aaa')