const winston = require("winston");

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === "production" ? "info" : "debug",
      format: winston.format.json(),
      defaultMeta: { service: 'user-service' },
      // colorize: true,
      // timestamp: true,
      // prettyPrint: true,
      label: "experts-server"
    })
  ]
});

module.exports = logger;

// create stream for morgan
logger.stream = {
  write: message => logger.info(message)
};
