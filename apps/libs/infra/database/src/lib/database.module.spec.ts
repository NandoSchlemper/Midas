import { database } from './database.module';

describe('database', () => {
  it('should work', () => {
    expect(database()).toEqual('database');
  });
});
