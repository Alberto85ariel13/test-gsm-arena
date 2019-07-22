import { bootstrapFixture } from './bootstrapFixture';

const createFixture = clientRepository => ({
    add: client => clientRepository.create(client),
    remove: client => clientRepository.deleteById(client.id),
});

export const mongoFixture = bootstrapFixture('clientFixture', createFixture);
