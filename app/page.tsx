import { RecentBlogPosts } from 'app/components/posts'
import { RecentPortfolioPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Craig's Portfolio & Blog
      </h1>
      <p className="mb-4">
        {`I'm Craig, a coder making random stuff! This is my portfolio & blog, feel free to have a look around!`}
      </p>
      <div className="my-8">
        <h2 className="mb-8 text-xl font-semibold tracking-tighter">
          Projects:
        </h2>
        <RecentPortfolioPosts />
        <h2 className="mt-8 mb-8 text-xl font-semibold tracking-tighter">
          Blog Posts:
        </h2>
        <RecentBlogPosts />
      </div>
    </section>
  )
}
