'use strict';

if (process.env.NODE_ENV === 'production') {
  process.exit(0);
}

process.env.INSTANCE_ID = 'script';

require('@/common/init');

const Logger = require('@/common/logger').createLogger($filepath(__filename));

require('@/common/dal');

const EVENT = require('@/common/events');

Logger.debug('Database reset');

// @TODO

process.exit(0);

// dataUtils.reset(() => {
//   require('@/common/dal');
// });

// EVENT.once('dal-ready', async () => {
//   Logger.debug('Database reset done');
//   process.exit(0);
// });
