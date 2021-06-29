import * as publicAPIs from './api-config/init-api'

import * as Debug from 'debug';
let debug = Debug.debug('app')
let apiName = undefined

// then to use
debug("Something happened");
debug('start')
const message: string = "Kudan Hello World"
// tslint:disable-next-line: no-console
debug(message)

debug('got public api')
const apis: string[] = publicAPIs.getApis()
if (apis.length > 0) {
    apiName = apis[0]
    
}

