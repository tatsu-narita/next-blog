import { createClient } from 'microms-js-sdk'

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apikey: process.env.API_KEY,
})