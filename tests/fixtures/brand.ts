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
