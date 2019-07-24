export function fixtureData(): any {
    return {
        __collection__: {
            devices: {
                __doc__: {
                    '5aa5e1a0f170ce24a1044ff1': {
                        name: 'test1',
                        brand: 'brand1',
                        model: 'model1',
                        createdOn: new Date('2019-01-01'),
                    },
                    '5aa5e1a0f170ce24a1044ff2': {
                        name: 'test2',
                        brand: 'brand1',
                        model: 'model1',
                        createdOn: new Date('2019-01-01'),
                    },
                    '5aa5e1a0f170ce24a1044ff3': {
                        name: 'test3',
                        brand: 'brand1',
                        model: 'model1',
                        createdOn: new Date('2019-01-01'),
                    },
                },
            },
        },
    };
}

export const data = {
    findAll: [
        {
            id: '5aa5e1a0f170ce24a1044ff1',
            data: () => {
                return {
                    name: 'test1',
                    brand: 'brand1',
                    model: 'model1',
                };
            },
        },
        {
            id: '5aa5e1a0f170ce24a1044ff2',
            data: () => {
                return {
                    name: 'test2',
                    brand: 'brand2',
                    model: 'model2',
                };
            },
        },
        {
            id: '5aa5e1a0f170ce24a1044ff3',
            data: () => {
                return {
                    name: 'test3',
                    brand: 'brand3',
                    model: 'model3',
                };
            },
        },
    ],
    create: {
        name: 'test1',
        brand: 'brand1',
        model: 'model1',
    },
    update: {
        id: '5aa5e1a0f170ce24a1044ff1',
        name: 'name test 2',
    },
    delete: {
        id: '5aa5e1a0f170ce24a1044ff1',
    },
};
