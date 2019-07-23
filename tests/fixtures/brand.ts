export function fixtureData(): any {
    return {
        __collection__: {
            brands: {
                __doc__: {
                    '5aa5e1a0f170ce24a1044ff1': {
                        name: 'test1',
                        devices: 1,
                        url: 'url.test.co',
                        createdOn: new Date('2019-01-01'),
                    },
                    '5aa5e1a0f170ce24a1044ff2': {
                        name: 'test2',
                        devices: 3,
                        url: 'url.test.co',
                        createdOn: new Date('2019-01-01'),
                    },
                    '5aa5e1a0f170ce24a1044ff3': {
                        name: 'test3',
                        devices: 3,
                        url: 'url.test.co',
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
                    devices: 1,
                    url: 'url1.com',
                };
            },
        },
        {
            id: '5aa5e1a0f170ce24a1044ff2',
            data: () => {
                return {
                    name: 'test2',
                    devices: 2,
                    url: 'url2.com',
                };
            },
        },
        {
            id: '5aa5e1a0f170ce24a1044ff3',
            data: () => {
                return {
                    name: 'test2',
                    devices: 2,
                    url: 'url2.com',
                };
            },
        },
    ],
    create: {
        name: 'test1',
        devices: 1,
        url: 'url1.com',
    },
    update: {
        id: '5aa5e1a0f170ce24a1044ff1',
        name: 'name test 2',
    },
    delete: {
        id: '5aa5e1a0f170ce24a1044ff1',
    },
};
