module.exports = {
    socket: [
        {
            id: 'switch',
            common: {
                name: 'Switch',
                type: 'boolean',
                role: 'switch',
                read: true,
                write: true,
            },
        },
        {
            id: 'cur_power',
            common: {
                name: 'Current power',
                role: 'value',
                type: 'number',
                read: true
            }
        }
    ],
    humidifier: [
        {
            id: 'switch',
            common: {
                name: 'General on/off',
                type: 'boolean',
                role: 'switch',
                read: true,
                write: true,
            }
        },
        {
            id: 'cur_humidity',
            common: {
                name: 'Current humidity',
                type: 'number',
                role: 'value',
                read: true,
            }
        }
    ]
};
