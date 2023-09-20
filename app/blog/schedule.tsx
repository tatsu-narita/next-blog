export default function schedule() {
    return <h1>記事のタイトル</h1>
}

export async function getstaticProps() {
    console.log('処理1')
    console.log('処理2')
    console.log('処理3')

    return {
        props: {},
    }
}