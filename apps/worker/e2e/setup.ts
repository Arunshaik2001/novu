import { DalService } from '@novu/dal';
import { testServer } from '@novu/testing';
import sinon from 'sinon';

import { bootstrap } from '../src/bootstrap';

const dalService = new DalService();

before(async () => {
  await testServer.create(await bootstrap());
  await dalService.connect(process.env.MONGO_URL);
});

after(async () => {
  try {
    await testServer.teardown();

    await dalService.destroy();
  } catch (e) {
    if (e.code !== 12586) {
      throw e;
    }
  }
});

afterEach(() => {
  sinon.restore();
});
