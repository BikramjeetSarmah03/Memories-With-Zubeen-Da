import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div>
      <div className="mb-12 text-center">
        <h1 className="mb-4 font-bold text-gray-900 text-3xl md:text-4xl">
          About Zubeen Da Community
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-gray-600 text-lg">
          A platform dedicated to celebrating the musical legacy and
          achievements of Zubeen Da, bringing together fans from around the
          world to share memories and connect through music.
        </p>

        <Link to="/achievements">
          <button className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl px-8 py-3 rounded-lg font-semibold text-white transition-colors">
            View Achievements
          </button>
        </Link>
      </div>

      <div className="bg-white shadow-sm p-8 border border-gray-100 rounded-2xl">
        <h2 className="mb-6 font-semibold text-gray-900 text-2xl">
          Our Mission
        </h2>
        <p className="mb-6 text-gray-600 leading-relaxed">
          We believe in preserving and celebrating the rich musical heritage
          that Zubeen Da has created throughout his illustrious career. This
          community serves as a digital space where fans can share their
          favorite memories, concert experiences, and personal stories related
          to his music.
        </p>

        <h3 className="mb-4 font-semibold text-gray-900 text-xl">
          What We Offer
        </h3>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <span className="mr-3 text-blue-600">•</span>
            Memory sharing and storytelling platform
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-600">•</span>
            Comprehensive achievement showcase
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-600">•</span>
            Community-driven content and discussions
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-600">•</span>
            Mobile-responsive design for all devices
          </li>
        </ul>
      </div>
    </div>
  );
}
