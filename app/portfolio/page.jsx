'use client';

export default function Portfolio() {
  // Sample data for portfolio items
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of Project One. It showcases my skills and expertise in React and Tailwind CSS and NextJS.',
      imageUrl: '/project1.jpg', // Replace with your project image
      link: '/project1', // Replace with your project details page or external link
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two. This project highlights my expertise in full-stack development.',
      imageUrl: '/project2.jpg', // Replace with your project image
      link: '/project2', // Replace with your project details page or external link
    },
    {
      title: 'Project Three',
      description: 'A brief description of Project Three. This project demonstrates my experience with Node.js and Express.',
      imageUrl: '/project3.jpg', // Replace with your project image
      link: '/project3', // Replace with your project details page or external link
    },
  ];

  return (
    <div className=" bg-gray-900 text-white py-12" style={{height:"89.5vh"}}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="bg-gray-700 hover:bg-gray-700 text-white px-4 py-2 rounded-md inline-block transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
