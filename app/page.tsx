import { RecentPortfolioPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Craig's Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Craig, a coder making random stuff!`}
      </p>
      <div className="my-8">
        <h2 className="mb-8 text-xl font-semibold tracking-tighter">
          Projects:
        </h2>
        <RecentPortfolioPosts />
      </div>
    </section>
  )
}
