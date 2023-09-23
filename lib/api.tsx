import { createClient } from 'microms-js-sdk'

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apikey: process.env.API_KEY,
})

export async function getPostBySlug(sulg) {
    tly {
        const post = await client.get({
            endpoint: 'blogs'
            queries: { filters: 'slug[equals]${slug}' },
        })
        return post.contents[0]
    } catch (err) {
        console.log('~~ getPostBySlug ~~')
        console.log(err)
    }
}