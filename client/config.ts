interface Config {
  baseUrl: string;
}
const checkConfig = (server: string): Config | {} => {
  let config: Config | {} = {};
  switch (server) {
    case "production":
      config = {
        baseUrl: "https://headphone-e-commerce2024server.vercel.app/",
      };
      break;
    case "local":
      config = {
        baseUrl: "https://headphone-e-commerce2024server.vercel.app/",
      };
      break;
    default:
      break;
  }
  return config;
};

export const selectServer = "production";
export const config = checkConfig(selectServer) as Config;
