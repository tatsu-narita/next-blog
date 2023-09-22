import { client } from 'lib/api'

export default function schedule() {
    return <h1>記事のタイトル</h1>
}

export async function getStaticProps() {
    const resPromise = client.get({
        endpoint: 'blogs'
    })
    console.log(resPromise)
    resPromise.then((res) => console.log(res)).catch((err) => console.log(err))

    try{
        const res = await resPromise
        console.log(res)
    } catch (err) {
        console.log(err)
    }

    console.log('処理1')
    setTimeout(() => console.log('処理2'), 1000)
    console.log('処理3')

    return {
        props: {},
    }
}