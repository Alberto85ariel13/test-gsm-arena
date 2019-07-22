export const bootstrapFixture = (name, fixtureFactory) => (data, context) => {
    before(() => { context[name] = fixtureFactory(context.container.containerCreated.resolve('clientRepository')); });
    before(() => {
        context[name].add(data);
    });
    after(() => {
        context[name].remove(data);
    });
};
