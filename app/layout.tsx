import 'app/globals.css'
import Layout from 'components/layout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}