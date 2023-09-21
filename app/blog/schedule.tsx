import { client } from 'lib/api'

export default function schedule() {
    return <h1>記事のタイトル</h1>
}

export async function getstaticProps() {
    console.log('処理1')
    setTimeout(() => console.log('処理2'), 1000)
    console.log('処理3')

    return {
        props: {},
    }
}