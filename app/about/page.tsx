import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Image from 'next/legacy/image'
import eyecatch from 'images/about.jpg'

export default function About() {
  return (
    <Container>
      <Hero title="About" subtitle="About development activities" />

<figure>
  <Image
    src={eyecatch}
    alt="" layout="responsive"
    sizes="(min-width: 1152px) 1152px, 100vw"
    priority
    placeholder="blur"
  />
</figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングからデザインなど、様々な技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。</p>
            <h2>モノづくりで目指していること</h2>
            <p>モノづくりではデータの解析からクリエイティブまで幅広い事を担当しています。新しい事を取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。</p>
            <p>単純に形にするだけでなく、作る過程や、なぜその様にしたのかを大事にしながらモノづくりをしています。毎回課題解決テーマを持って「モノ」と向き合い制作をし、フィードバックしてもらう事で自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。</p>
            <h3>新しいことへのチャレンジ</h3>
            <p>今までと違うものを作ることで愛着が湧いてきます。そこで興味を持った事は小さな事でもいいから取り入れて、良いものを作れる様にしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。</p>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}