import { BlogPosts } from 'app/components/posts'
import { PortfolioPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Craig, a passionate coder making cool stuff! This is my portfolio & blog, feel free to have a look around!`}
      </p>
      <div className="my-8">
        <h2 className="mb-8 text-xl font-semibold tracking-tighter">
          Blog Posts:
        </h2>
        <BlogPosts />
        <h2 className="mb-8 text-xl font-semibold tracking-tighter">
          Porjects:
        </h2>
        <PortfolioPosts />
      </div>
    </section>
  )
}
