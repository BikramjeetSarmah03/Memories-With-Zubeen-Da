import { createFileRoute } from "@tanstack/react-router";
import {
  Trophy,
  Target,
  Film,
  Mic,
  Award,
  Music,
  Calendar,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/achievements")({
  component: Achievements,
});

function Achievements() {
  return (
    <div className="mx-auto py-8 max-w-7xl">
      {/* Main Content */}
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="mb-2 font-bold text-gray-900 text-3xl md:text-4xl">
          About & Achievements
        </h1>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mt-6">
          {["All", "Awards", "Albums", "Films", "Milestones"].map(
            (tab, index) => (
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
            )
          )}
        </div>
      </div>

      <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
        {/* Left Column - Profile and About */}
        <div className="space-y-6 lg:col-span-2">
          {/* Profile Card */}
          <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-2xl">
            <div className="flex sm:flex-row flex-col items-start sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
              {/* Profile Picture */}
              <div className="flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg rounded-full w-20 h-20">
                <div className="flex justify-center items-center bg-white rounded-full w-16 h-16">
                  <span className="font-bold text-gray-700 text-2xl">ZD</span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <h2 className="mb-1 font-bold text-gray-900 text-2xl">
                  Zubeen Da
                </h2>
                <p className="mb-4 text-gray-500">@zubeenda_official</p>

                {/* Stats */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="bg-gray-100 px-3 py-1.5 rounded-lg font-medium text-gray-700 text-sm">
                    Memories 1,248
                  </div>
                  <div className="bg-gray-100 px-3 py-1.5 rounded-lg font-medium text-gray-700 text-sm">
                    Followers 320k
                  </div>
                  <div className="bg-gray-100 px-3 py-1.5 rounded-lg font-medium text-gray-700 text-sm">
                    Following 180
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex sm:flex-row flex-col gap-3">
                  <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-lg font-semibold text-white transition-colors">
                    Follow
                  </button>
                  <button className="bg-white hover:bg-gray-50 px-6 py-2.5 border border-gray-300 rounded-lg font-semibold text-gray-700 transition-colors">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-2xl">
            <h3 className="mb-4 font-semibold text-gray-900 text-xl">
              About Zubeen Da
            </h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Singer, composer, actor, and director celebrated across the
              Assamese music and film industry. Known for blending folk roots
              with contemporary sound and an electrifying stage presence that
              inspired a generation of artists.
            </p>

            {/* Key Details */}
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-3">
              <div className="bg-gray-50 px-4 py-3 rounded-lg">
                <p className="font-medium text-gray-700 text-sm">
                  Origin: Assam, India
                </p>
              </div>
              <div className="bg-gray-50 px-4 py-3 rounded-lg">
                <p className="font-medium text-gray-700 text-sm">
                  Active Years: 2000s – Present
                </p>
              </div>
              <div className="bg-gray-50 px-4 py-3 rounded-lg">
                <p className="font-medium text-gray-700 text-sm">
                  Languages: Assamese, Hindi, Bengali
                </p>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-2xl">
            <h3 className="mb-6 font-semibold text-gray-900 text-xl">
              Key Achievements
            </h3>
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 border border-yellow-200 rounded-xl">
                <Trophy className="mb-3 w-8 h-8 text-yellow-600" />
                <h4 className="mb-1 font-semibold text-gray-900">
                  National Music Award
                </h4>
                <p className="text-gray-600 text-sm">Best Male Vocalist</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 border border-blue-200 rounded-xl">
                <Target className="mb-3 w-8 h-8 text-blue-600" />
                <h4 className="mb-1 font-semibold text-gray-900">
                  River Stories
                </h4>
                <p className="text-gray-600 text-sm">
                  Critically acclaimed album
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 border border-purple-200 rounded-xl">
                <Film className="mb-3 w-8 h-8 text-purple-600" />
                <h4 className="mb-1 font-semibold text-gray-900">
                  Directorial Debut
                </h4>
                <p className="text-gray-600 text-sm">Feature film, 2021</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 border border-green-200 rounded-xl">
                <Mic className="mb-3 w-8 h-8 text-green-600" />
                <h4 className="mb-1 font-semibold text-gray-900">
                  Sold-Out National Tour
                </h4>
                <p className="text-gray-600 text-sm">20 cities across India</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-rose-50 p-4 border border-red-200 rounded-xl">
                <Award className="mb-3 w-8 h-8 text-red-600" />
                <h4 className="mb-1 font-semibold text-gray-900">
                  State Playback Award
                </h4>
                <p className="text-gray-600 text-sm">
                  Best Playback Singer (Assam)
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 border border-indigo-200 rounded-xl">
                <Music className="mb-3 w-8 h-8 text-indigo-600" />
                <h4 className="mb-1 font-semibold text-gray-900">
                  Debut Studio Album
                </h4>
                <p className="text-gray-600 text-sm">
                  Breakthrough early 2000s
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Highlights and Popular Songs */}
        <div className="space-y-6">
          {/* Highlights */}
          <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-2xl">
            <h3 className="mb-6 font-semibold text-gray-900 text-xl">
              Highlights
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex justify-center items-center bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg w-12 h-12">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Top Awarded Year</p>
                  <p className="text-gray-600 text-sm">2024</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex justify-center items-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg w-12 h-12">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Most Streamed Song
                  </p>
                  <p className="text-gray-600 text-sm">Echoes</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex justify-center items-center bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg w-12 h-12">
                  <Film className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    First Direction Credit
                  </p>
                  <p className="text-gray-600 text-sm">2021</p>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Songs */}
          <div className="bg-white shadow-sm p-6 border border-gray-100 rounded-2xl">
            <h3 className="mb-6 font-semibold text-gray-900 text-xl">
              Popular Songs
            </h3>
            <div className="gap-3 grid grid-cols-2">
              {[
                { title: "Echoes", image: "🎤" },
                { title: "River Flow", image: "🎸" },
                { title: "Memories", image: "🎵" },
                { title: "Stage Lights", image: "🎹" },
                { title: "Crowd Energy", image: "🎪" },
                { title: "Piano Keys", image: "🎼" },
              ].map((song, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200 hover:shadow-md rounded-lg aspect-square transition-shadow cursor-pointer"
                >
                  <div className="text-center">
                    <div className="mb-2 text-2xl">{song.image}</div>
                    <p className="font-medium text-gray-700 text-xs">
                      {song.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
