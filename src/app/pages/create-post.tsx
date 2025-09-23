import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Upload, X, Camera, Image as ImageIcon, Tag, Sparkles } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { useState, useRef } from "react";
import { Header } from "@/app/components/common/header";
import { Footer } from "@/app/components/common/footer";
import { SUGGESTED_TAGS, FILE_UPLOAD } from "@/app/constants/app";
import { validateMemoryForm, isValidFileType } from "@/app/utils/validation";

export const Route = createFileRoute("/create-post")({
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
    const validFiles = files.filter(file => 
      isValidFileType(file, FILE_UPLOAD.ACCEPTED_TYPES)
    );

    if (validFiles.length > 0) {
      const newImages = [...images, ...validFiles];
      setImages(newImages);

      // Create previews
      const newPreviews = validFiles.map(file => URL.createObjectURL(file));
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
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateMemoryForm({ title, story, images });
    
    if (validation.isValid) {
      console.log("New post created:", {
        title: title.trim(),
        story: story.trim(),
        tags,
        images
      });
      window.history.back();
    } else {
      alert(validation.errors.join(", "));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center space-x-3 group mb-4">
              <div className="p-2 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                <ArrowLeft className="h-5 w-5 text-white" />
              </div>
              <span className="text-white/80 text-sm font-medium">Back to Home</span>
            </Link>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Share your special moment with Zubeen Da and the community
            </p>
          </div>
        </div>
      </div>

      {/* Main Content - Card Layout */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Upload Section - Enhanced */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Camera className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Upload Your Memory</h3>
                <p className="text-sm text-gray-500">Share photos or videos from your experience</p>
              </div>
            </div>

            <div className="border-2 border-dashed border-blue-200 rounded-2xl p-12 text-center hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 group">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept={FILE_UPLOAD.ACCEPTED_TYPES.join(",")}
                onChange={handleImageUpload}
                className="hidden"
              />
              
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Upload className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Drop your memories here</h4>
                <p className="text-gray-600 mb-6">or click to browse from your device</p>
              </div>

              <Button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ImageIcon className="h-4 w-4 mr-2" />
                Choose Files
              </Button>

              <div className="flex justify-center items-center space-x-6 mt-6 text-sm">
                 <div className="flex items-center space-x-2 text-gray-500">
                   <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                   <span>{FILE_UPLOAD.ACCEPTED_TYPES.join(", ").toUpperCase()}</span>
                 </div>
                 <div className="flex items-center space-x-2 text-gray-500">
                   <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                   <span>Max {FILE_UPLOAD.MAX_SIZE}</span>
                 </div>
              </div>
            </div>

            {/* Enhanced Image Previews */}
            {imagePreviews.length > 0 && (
              <div className="mt-8">
                <h4 className="text-sm font-medium text-gray-700 mb-4">Uploaded Files ({imagePreviews.length})</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-md hover:shadow-lg transition-all duration-300">
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Title Section - Enhanced */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Sparkles className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Give it a Title</h3>
                <p className="text-sm text-gray-500">Make it memorable and catchy</p>
              </div>
            </div>
            
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., 'Meeting Zubeen Da backstage in 2023'"
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg placeholder-gray-400"
              required
            />
          </div>

          {/* Story Section - Enhanced */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <ImageIcon className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Tell Your Story</h3>
                <p className="text-sm text-gray-500">Share what made this moment special</p>
              </div>
            </div>
            
            <textarea
              value={story}
              onChange={(e) => setStory(e.target.value)}
              placeholder="Describe the moment, your feelings, what made it unforgettable..."
              rows={6}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none text-base placeholder-gray-400"
              required
            />
          </div>

          {/* Tags Section - Enhanced */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Tag className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Add Tags</h3>
                <p className="text-sm text-gray-500">Help others discover your memory</p>
              </div>
            </div>

            {/* Selected Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-1 hover:bg-white/20 rounded-full p-1 transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
            
            {/* Suggested Tags */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-700">Suggested tags:</h4>
             <div className="flex flex-wrap gap-2">
               {SUGGESTED_TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => addTag(tag)}
                    disabled={tags.includes(tag)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
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
               className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
             >
               <Sparkles className="h-5 w-5 mr-2" />
               Publish Memory
             </Button>
           </div>
         </form>
       </div>
       
       <Footer />
     </div>
   );
 }