import Server from "./server";

const defaultOptions = {
  port: 8080,
  record: true,
  ignoreHeaders: [],
  path: "./tapes/"
};

const talkback = usrOpts => {
  const opts = {
    ...defaultOptions,
    ...usrOpts
  };
  return new Server(opts);
};

export default talkback;