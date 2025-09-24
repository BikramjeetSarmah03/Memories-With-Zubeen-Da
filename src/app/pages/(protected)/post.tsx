import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Upload,
  X,
  Camera,
  Image as ImageIcon,
  Tag,
  Sparkles,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useState, useRef } from "react";
import { Footer } from "@/app/components/common/footer";
import { SUGGESTED_TAGS, FILE_UPLOAD } from "@/app/constants/app";
import { validateMemoryForm, isValidFileType } from "@/app/utils/validation";

export const Route = createFileRoute("/(protected)/post")({
  component: CreatePost,
});

function CreatePost() {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [tags, setTags] = useState<string[]>(["#concert", "#nostalgia"]);
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter((file) =>
      isValidFileType(file, FILE_UPLOAD.ACCEPTED_TYPES)
    );

    if (validFiles.length > 0) {
      const newImages = [...images, ...validFiles];
      setImages(newImages);

      // Create previews
      const newPreviews = validFiles.map((file) => URL.createObjectURL(file));
      setImagePreviews([...imagePreviews, ...newPreviews]);
    }
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    setImages(newImages);
    setImagePreviews(newPreviews);
  };

  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateMemoryForm({ title, story, images });

    if (validation.isValid) {
      console.log("New post created:", {
        title: title.trim(),
        story: story.trim(),
        tags,
        images,
      });
      window.history.back();
    } else {
      alert(validation.errors.join(", "));
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-6">
        <div className="mx-auto px-6 max-w-5xl">
          <div className="text-center">
            <Link
              to="/"
              className="group inline-flex items-center space-x-3 mb-4"
            >
              <div className="bg-white/20 group-hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all duration-300">
                <ArrowLeft className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium text-white/80 text-sm">
                Back to Home
              </span>
            </Link>

            <p className="mx-auto max-w-2xl text-white/90 text-xl">
              Share your special moment with Zubeen Da and the community
            </p>
          </div>
        </div>
      </div>

      {/* Main Content - Card Layout */}
      <div className="mx-auto px-6 py-8 max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Upload Section - Enhanced */}
          <div className="bg-white shadow-xl p-8 border border-white/20 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Camera className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  Upload Your Memory
                </h3>
                <p className="text-gray-500 text-sm">
                  Share photos or videos from your experience
                </p>
              </div>
            </div>

            <div className="group hover:bg-blue-50/50 p-12 border-2 border-blue-200 hover:border-blue-300 border-dashed rounded-2xl text-center transition-all duration-300">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept={FILE_UPLOAD.ACCEPTED_TYPES.join(",")}
                onChange={handleImageUpload}
                className="hidden"
              />

              <div className="mb-6">
                <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 rounded-2xl w-16 h-16 group-hover:scale-110 transition-transform duration-300">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <h4 className="mb-2 font-semibold text-gray-900 text-xl">
                  Drop your memories here
                </h4>
                <p className="mb-6 text-gray-600">
                  or click to browse from your device
                </p>
              </div>

              <Button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="bg-gradient-to-r from-blue-500 hover:from-blue-600 to-purple-500 hover:to-purple-600 shadow-lg hover:shadow-xl px-8 py-3 rounded-xl font-medium text-white transition-all duration-300"
              >
                <ImageIcon className="mr-2 w-4 h-4" />
                Choose Files
              </Button>

              <div className="flex justify-center items-center space-x-6 mt-6 text-sm">
                <div className="flex items-center space-x-2 text-gray-500">
                  <div className="bg-green-400 rounded-full w-2 h-2"></div>
                  <span>
                    {FILE_UPLOAD.ACCEPTED_TYPES.join(", ").toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <div className="bg-blue-400 rounded-full w-2 h-2"></div>
                  <span>Max {FILE_UPLOAD.MAX_SIZE}</span>
                </div>
              </div>
            </div>

            {/* Enhanced Image Previews */}
            {imagePreviews.length > 0 && (
              <div className="mt-8">
                <h4 className="mb-4 font-medium text-gray-700 text-sm">
                  Uploaded Files ({imagePreviews.length})
                </h4>
                <div className="gap-4 grid grid-cols-2 md:grid-cols-4">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="group relative">
                      <div className="bg-gray-100 shadow-md hover:shadow-lg rounded-xl aspect-square overflow-hidden transition-all duration-300">
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="-top-2 -right-2 absolute bg-red-500 hover:bg-red-600 opacity-0 group-hover:opacity-100 shadow-lg p-2 rounded-full text-white transition-all duration-300"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Title Section - Enhanced */}
          <div className="bg-white shadow-xl p-8 border border-white/20 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  Give it a Title
                </h3>
                <p className="text-gray-500 text-sm">
                  Make it memorable and catchy
                </p>
              </div>
            </div>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., 'Meeting Zubeen Da backstage in 2023'"
              className="px-6 py-4 border-2 border-gray-200 focus:border-blue-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 w-full text-lg transition-all duration-300 placeholder-gray-400"
              required
            />
          </div>

          {/* Story Section - Enhanced */}
          <div className="bg-white shadow-xl p-8 border border-white/20 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-2 rounded-lg">
                <ImageIcon className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  Tell Your Story
                </h3>
                <p className="text-gray-500 text-sm">
                  Share what made this moment special
                </p>
              </div>
            </div>

            <textarea
              value={story}
              onChange={(e) => setStory(e.target.value)}
              placeholder="Describe the moment, your feelings, what made it unforgettable..."
              rows={6}
              className="px-6 py-4 border-2 border-gray-200 focus:border-blue-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 w-full text-base transition-all duration-300 resize-none placeholder-gray-400"
              required
            />
          </div>

          {/* Tags Section - Enhanced */}
          <div className="bg-white shadow-xl p-8 border border-white/20 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Tag className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  Add Tags
                </h3>
                <p className="text-gray-500 text-sm">
                  Help others discover your memory
                </p>
              </div>
            </div>

            {/* Selected Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:shadow-lg px-4 py-2 rounded-full text-white text-sm transition-all duration-300"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="hover:bg-white/20 ml-1 p-1 rounded-full transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>

            {/* Suggested Tags */}
            <div className="space-y-3">
              <h4 className="font-medium text-gray-700 text-sm">
                Suggested tags:
              </h4>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => addTag(tag)}
                    disabled={tags.includes(tag)}
                    className="bg-gray-100 hover:bg-gray-200 disabled:opacity-50 hover:shadow-md px-4 py-2 rounded-full text-gray-700 text-sm transition-colors duration-300 disabled:cursor-not-allowed"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button
              onClick={handleSubmit}
              disabled={!title.trim() || !story.trim() || images.length === 0}
              className="bg-gradient-to-r from-blue-600 hover:from-blue-700 to-purple-600 hover:to-purple-700 disabled:opacity-50 shadow-lg hover:shadow-xl px-12 py-4 rounded-xl font-medium text-white text-lg transition-all duration-300 disabled:cursor-not-allowed"
            >
              <Sparkles className="mr-2 w-5 h-5" />
              Publish Memory
            </Button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
