import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/app/components/common/page-layout";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <PageLayout>
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Zubeen Da Community
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A platform dedicated to celebrating the musical legacy and achievements of Zubeen Da, 
            bringing together fans from around the world to share memories and connect through music.
          </p>
          
          <Link to="/achievements">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              View Achievements
            </button>
          </Link>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We believe in preserving and celebrating the rich musical heritage that Zubeen Da has created 
            throughout his illustrious career. This community serves as a digital space where fans can 
            share their favorite memories, concert experiences, and personal stories related to his music.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">•</span>
              Memory sharing and storytelling platform
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">•</span>
              Comprehensive achievement showcase
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">•</span>
              Community-driven content and discussions
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">•</span>
              Mobile-responsive design for all devices
            </li>
          </ul>
        </div>
    </PageLayout>
  );
}
