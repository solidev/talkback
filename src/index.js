import Server from "./server";
import Logger from "./logger";

const defaultOptions = {
  ignoreHeaders: [],
  path: "./tapes/",
  port: 8080,
  record: true,
  silent: false,
  summary: true
};

const talkback = usrOpts => {
  const opts = {
    ...defaultOptions,
    ...usrOpts
  };

  const logger = new Logger(opts);
  opts.logger = logger;

  return new Server(opts);
};

export default talkback;