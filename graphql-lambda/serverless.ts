import type { AWS } from '@serverless/typescript';

import runner from '@functions/runner';

const serverlessConfiguration: AWS = {
  service: 'example',
  frameworkVersion: '3',
  useDotenv: true,
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    region: 'ap-southeast-2',
    runtime: 'nodejs14.x',
    apiGateway: {
      apiKeys: [{ value: '${env:RUNNER_SERVICE_API_KEY}' }],
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  // import the function via paths
  functions: { runner },
  package: { individually: true },
  custom: {
    'serverless-offline': {
      httpPort: 4005,
    },
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
      packager: 'yarn',
    },
  },
};

module.exports = serverlessConfiguration;
