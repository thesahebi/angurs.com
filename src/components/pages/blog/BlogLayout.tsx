import BlogList from "./BlogList"


function BlogLayout() {
  return (

    <section className="py-12 sm:py-16 lg:py-20 bg-[#0A0A0A]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <BlogList path="/blogs" displayClass="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12"/>
      </div>
    </section>
  )
}

export default BlogLayout