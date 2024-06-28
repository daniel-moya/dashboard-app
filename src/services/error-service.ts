const log = (e: any, logLevel: number) => {
  switch (logLevel) {
    case 3:
      // TODO: report error to monitoring service
      console.error(e);
      break;
    case 2:
      // TODO: report info to monitoring service
      console.info(e);
      break;
    case 1:
      // TODO: report message to monitoring service
      console.log(e);
      break;
    default:
      console.log(e);
  }
};

export const error = (e: any) => log(e, 3);
