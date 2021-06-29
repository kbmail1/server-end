'use strict'

import fs from 'fs'
import * as Debug from 'debug';
let debug = Debug.debug('init-api')

const getFileContentsAsJson = (filePath: string): object | undefined => {
    const contents: Buffer = fs.readFileSync(filePath)
    if (contents !== undefined) {
        debug('received...')
        const asJson = JSON.parse(contents.toString())
        debug(asJson)
        return asJson
    } else {
        return undefined
    }
}

export const getApis = (): string[] => {
    const apis = getFileContentsAsJson ('api-config/apis.json')
    if (apis !== undefined) {
        let apiArray: string[]  = Object.keys(apis)
        debug(apiArray)
        return apiArray
    } else {
        return []
    }
}

export interface endpoint {
    type: string,
    relativePath: string,
    op: string,
    optParams?: string[]
}
export interface apiInfo {
    endpoints: endpoint[],
    mandatoryHeader?: object,
    url: string
}

export const getApiInfo = (apiName: string): apiInfo | undefined => {
    const apis = getFileContentsAsJson ('api-config/words.json')

}