'use strict';
const { ManagementClient } = require('authing-sdk-js');

module.exports = app => {
  app.addSingleton('authing', createAuthing);
};

async function createAuthing(config, app) {

  const client = await new ManagementClient(config);

  app.beforeStart(async () => {
    app.coreLogger.info('[egg-authing] Authing ...');
  });

  return client;
}
