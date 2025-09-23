import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/app/components/common/page-layout";
import { Trophy, Target, Film, Mic, Award, Music, Calendar, TrendingUp, Star } from "lucide-react";

export const Route = createFileRoute("/achievements")({
  component: Achievements,
});

function Achievements() {
  return (
    <PageLayout mainClassName="max-w-7xl">
      {/* Main Content */}
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            About & Achievements
          </h1>
          
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {["All", "Awards", "Albums", "Films", "Milestones"].map((tab, index) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  index === 0
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile and About */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                {/* Profile Picture */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-700">ZD</span>
                  </div>
                </div>
                
                {/* Profile Info */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Zubeen Da</h2>
                  <p className="text-gray-500 mb-4">@zubeenda_official</p>
                  
                  {/* Stats */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="bg-gray-100 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700">
                      Memories 1,248
                    </div>
                    <div className="bg-gray-100 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700">
                      Followers 320k
                    </div>
                    <div className="bg-gray-100 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700">
                      Following 180
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Follow
                    </button>
                    <button className="bg-white text-gray-700 px-6 py-2.5 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">About Zubeen Da</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Singer, composer, actor, and director celebrated across the Assamese music and film industry. 
                Known for blending folk roots with contemporary sound and an electrifying stage presence that 
                inspired a generation of artists.
              </p>
              
              {/* Key Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">Origin: Assam, India</p>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">Active Years: 2000s – Present</p>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">Languages: Assamese, Hindi, Bengali</p>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Achievements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-xl border border-yellow-200">
                  <Trophy className="h-8 w-8 text-yellow-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-1">National Music Award</h4>
                  <p className="text-sm text-gray-600">Best Male Vocalist</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
                  <Target className="h-8 w-8 text-blue-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-1">River Stories</h4>
                  <p className="text-sm text-gray-600">Critically acclaimed album</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                  <Film className="h-8 w-8 text-purple-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-1">Directorial Debut</h4>
                  <p className="text-sm text-gray-600">Feature film, 2021</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                  <Mic className="h-8 w-8 text-green-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-1">Sold-Out National Tour</h4>
                  <p className="text-sm text-gray-600">20 cities across India</p>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-rose-50 p-4 rounded-xl border border-red-200">
                  <Award className="h-8 w-8 text-red-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-1">State Playback Award</h4>
                  <p className="text-sm text-gray-600">Best Playback Singer (Assam)</p>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-xl border border-indigo-200">
                  <Music className="h-8 w-8 text-indigo-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-1">Debut Studio Album</h4>
                  <p className="text-sm text-gray-600">Breakthrough early 2000s</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights and Popular Songs */}
          <div className="space-y-6">
            {/* Highlights */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Top Awarded Year</p>
                    <p className="text-sm text-gray-600">2024</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Most Streamed Song</p>
                    <p className="text-sm text-gray-600">Echoes</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                    <Film className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">First Direction Credit</p>
                    <p className="text-sm text-gray-600">2021</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Songs */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Popular Songs</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: "Echoes", image: "🎤" },
                  { title: "River Flow", image: "🎸" },
                  { title: "Memories", image: "🎵" },
                  { title: "Stage Lights", image: "🎹" },
                  { title: "Crowd Energy", image: "🎪" },
                  { title: "Piano Keys", image: "🎼" }
                ].map((song, index) => (
                  <div key={index} className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer">
                    <div className="text-center">
                      <div className="text-2xl mb-2">{song.image}</div>
                      <p className="text-xs font-medium text-gray-700">{song.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </PageLayout>
  );
}