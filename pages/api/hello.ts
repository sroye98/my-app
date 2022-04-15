// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string | undefined
}

class EnvironmentVariables {
  api_host: string | undefined
  app_host: string | undefined
}

const local_api_host: string = "local.api.casectrl.com";
const local_app_host: string = "local.app.casectrl.com";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<EnvironmentVariables>
) {
  const env = process.env.APP_ENV;

  const envVars = new EnvironmentVariables();

  switch (env) {
    case 'local':
      envVars.api_host = local_api_host;
      envVars.app_host = local_app_host;
      break;
    case 'development':
      envVars.api_host = "development.api.casectrl.com";
      envVars.app_host = "development.app.casectrl.com";
      break;
    case 'staging':
      envVars.api_host = "staging.api.casectrl.com";
      envVars.app_host = "staging.app.casectrl.com";
      break;
    case 'production':
      envVars.api_host = "production.api.casectrl.com";
      envVars.app_host = "production.app.casectrl.com";
      break;
  }

  res.status(200).json(envVars);
}
