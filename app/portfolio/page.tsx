import { PortfolioPosts } from 'app/components/posts'

export const metadata = {
  title: 'Portfolio',
  description: 'View my portfolio.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Projects</h1>
      <PortfolioPosts />
    </section>
  )
}
