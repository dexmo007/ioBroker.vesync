class VeSyncClient {
    async login() {
        this.token = 'blablabla';
        return true;
    }

    async getDevices() {
        return [
            {
                id: '123-456',
                name: 'Smart Plug 1',
                type: 'socket'
            },
            {
                id: '789-000',
                name: 'Humidifier',
                type: 'humidifier'
            }
        ];
    }
}

module.exports = VeSyncClient;
