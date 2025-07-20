import { blogPosts } from "./constants";

const Blogs = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I enjoy sharing my knowledge and insights about web development,
            best practices, and the latest tech trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer"
            >
              <div className="p-6">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                  <time>{new Date(post.date).toLocaleDateString()}</time>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                  Read more →
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
