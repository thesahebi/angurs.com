import { useParams } from "react-router-dom";
import { articles } from "./blogModel";

function BlogDetails() {
  const { id } = useParams<{ id: string }>(); // Extract the `id` from the URL
  const article = articles.find((a) => a.id === Number(id)); // Find the article by `id`

  return (
<<<<<<< HEAD
    <section className="dark:bg-black py-24">
=======
    <section className="dark:bg-black">
>>>>>>> 36b0a5c (firt commit)
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {article ? (
          <div className="blog-card">
            <img
<<<<<<< HEAD
              src={article.image} 
=======
              src={article.image}
>>>>>>> 36b0a5c (firt commit)
              alt={article.title}
              className="rounded-lg lg:h-[400px] h-[300px] w-full hover:-zoom-in-50"
            />
            <div className="py-3">
              <span className="text-[#ea580c] bg-[#ffedd5] px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="text-gray-600 ps-3">{article.date}</span>
              <p className="lg:text-4xl md:text-2xl text-2xl font-semibold pt-3">{article.title}</p>
              {article.details && (
                <div className="pt-4">
                  {article.details.content?.map((block, index) => {
                    switch (block.type) {
                      case "paragraph":
                        return (
                          <p key={index} className="py-2 text-gray-700">
                            {block.text}
                          </p>
                        );
                      case "list":
                        return (
                          <ul key={index} className="list-disc list-inside py-2">
                            {block.items?.map((item, idx) => (
                              <li key={idx} className="text-gray-700">
                                {item}
                              </li>
                            ))}
                          </ul>
                        );
                      case "image":
                        return (
                          <div key={index} className="py-4">
                            <img
<<<<<<< HEAD
                              src={`${block.url}`}
=======
                              src={block.url}
>>>>>>> 36b0a5c (firt commit)
                              alt={block.caption || "Article Image"}
                              className="rounded-lg w-full lg:h-[600px] md:h-[400px]"
                            />
                            {block.caption && (
                              <p className="text-xl text-gray-500 text-center pt-2">
                                {block.caption}
                              </p>
                            )}
                          </div>
                        );
                      default:
                        return null;
                    }
                  })}
                </div>
              )}
            </div>
          </div>
        ) : (
          <p>Article not found.</p>
        )}
      </div>
    </section>
  );
}

export default BlogDetails;
