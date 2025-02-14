import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: 'e5d8574fb41e4f16a11cf3e31eca49ea'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '86b3e831efae461e8fc10c65d137d273'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'ba7575462cb54affae5b2ac7150cc983'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '31f39f483f6f4262bdf7cdee1ab8f4a6'
                    }
                }
            }
        }
    }
}
