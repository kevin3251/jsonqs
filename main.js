import qs from 'querystring'
import set from 'lodash.set'

function flatten(obj, path = '') {
    if (typeof obj !== 'object') return obj
    let result = Object.create(null)

    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value !== 'object' || Array.isArray(value)) {
            let curPath = (path === '') ? key : [path, key].join('.')
            Object.assign(result, { [curPath]: value })
            return
        }
        Object.assign(
            result,
            flatten(
                value,
                (path === '') ? key : [path, key].join('.')
            )
        )
    })
    return result
}

function unflatten(obj) {
    if (typeof obj !== 'object') return obj

    let result = Object.create(null)
    Object.entries(obj).forEach(([key, value]) => {
        set(result, key, value)
    })
    return result
}

export function stringify(input) {
    const data = typeof input !== 'object'
        ? input
        : flatten(input)

    return qs.stringify(data)
}

export function parse(input) {
    let data = qs.parse(input)
    return unflatten(data)
}

export default { parse, stringify }