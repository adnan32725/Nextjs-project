'use client';

export default function Blog() {
  // Sample data for blog posts
  const posts = [
    {
      title: 'Understanding React Hooks',
      excerpt: 'React Hooks are a new addition in React 16.8 that let you use state and other React features without writing a class...',
      date: 'September 10, 2024',
      link: '/blog/understanding-react-hooks', 
    },
    {
      title: 'Introduction to Tailwind CSS',
      excerpt: 'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs...',
      date: 'August 20, 2024',
      link: '/blog/introduction-to-tailwind-css', // Replace with your blog post URL
    }
  ];

  return (
    <div className=" bg-gray-900 text-white py-6" style={{height:"89.5vh"}}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Blog</h2>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <p className="text-gray-500 mb-4">{post.date}</p>
              <a
                href={post.link}
                className="bg-gray-700 hover:bg-gray-700 text-white px-4 py-2 rounded-md inline-block transition"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
