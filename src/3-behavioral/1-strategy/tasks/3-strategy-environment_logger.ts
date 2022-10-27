// ! npm run 3-1-3
import { ConsoleWriter, LogEntry, Logger, SimpleFormatter, TextFileWriter } from "./logger";

export class LoggerStrategyFactory {
  // private static devLogger = new Logger(new ConsoleWriter(), new SimpleFormatter());
  // private static prodLogger = new Logger(new TextFileWriter(), new SimpleFormatter());
  // private static stagingLogger = new Logger(new TextFileWriter(), new SimpleFormatter());
  public static configurations = [
    {
      environment: "dev",
      logger: new Logger(new ConsoleWriter(), new SimpleFormatter()),
    },
    {
      environment: "prod",
      logger: new Logger(new TextFileWriter(), new SimpleFormatter()),
    },
  ];
  public static createLogger() {
    const environment = process.env.NODE_ENV;
    let configuration = this.configurations.find(l => l.environment === environment);
    if (!configuration) {
      configuration = this.configurations[0];
    }
    return configuration.logger;

    // if (environment === "dev") {
    //   return LoggerStrategyFactory.devLogger;
    // }
    // return LoggerStrategyFactory.prodLogger;
  }
}

export class Client {
  private readonly logger: Logger;

  constructor() {
    this.logger = LoggerStrategyFactory.createLogger();
  }

  public log(entry: LogEntry) {
    this.logger.log(entry);
  }
}

LoggerStrategyFactory.configurations.push({
  environment: "staging",
  logger: new Logger(new TextFileWriter(), new SimpleFormatter()),
});

const client = new Client();
client.log({
  category: "info",
  message: "Hello World",
  timestamp: new Date(),
});
