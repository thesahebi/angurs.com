import BlogList from "./BlogList"


function BlogLayout() {
  return (

    <section className="py-12  sm:py-16 lg:py-12  bg-[#121212] ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
     <BlogList   path="/blogs" displayClass="lg:grid-cols-3 md:grid-cols-2 gap-12"/>
    

    </div>
    </section>
  )
}

export default BlogLayout