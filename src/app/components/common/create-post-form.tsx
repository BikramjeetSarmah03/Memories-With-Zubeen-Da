import { useState, useRef } from "react";
import { X, Upload, Plus, Tag } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface CreatePostFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (postData: PostData) => void;
}

interface PostData {
  title: string;
  story: string;
  tags: string[];
  images: File[];
}

export function CreatePostForm({ isOpen, onClose, onSubmit }: CreatePostFormProps) {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => 
      file.type === 'image/jpeg' || file.type === 'image/jpg'
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

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && story.trim() && images.length > 0) {
      onSubmit({
        title: title.trim(),
        story: story.trim(),
        tags,
        images
      });
      // Reset form
      setTitle("");
      setStory("");
      setTags([]);
      setImages([]);
      setImagePreviews([]);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200/50 sticky top-0 bg-white/95 backdrop-blur-sm rounded-t-2xl sm:rounded-t-3xl">
          <div>
            <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Create New Post
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Share your memories with the community</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-105"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              📸 Upload Photos (JPG, JPEG)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-200">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".jpg,.jpeg"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Upload className="h-8 w-8 sm:h-10 sm:w-10 text-gray-400 mx-auto mb-3" />
              <p className="text-sm sm:text-base text-gray-600 mb-3">
                Click to upload or drag and drop
              </p>
              <Button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                className="text-sm px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Choose Files
              </Button>
            </div>

            {/* Image Previews */}
            {imagePreviews.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Preview ({imagePreviews.length} photos)
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={preview}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-20 sm:h-24 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-red-600 hover:scale-110"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ✏️ Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a catchy title..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-gray-50/50"
              required
            />
          </div>

          {/* Story */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              📖 Story *
            </label>
            <textarea
              value={story}
              onChange={(e) => setStory(e.target.value)}
              placeholder="Share your memory story..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none transition-all duration-200 bg-gray-50/50"
              required
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              🏷️ Tags
            </label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                placeholder="Add a tag..."
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-gray-50/50"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              />
              <Button
                type="button"
                onClick={addTag}
                variant="outline"
                size="sm"
                className="px-3 py-2.5 rounded-lg sm:rounded-xl hover:bg-blue-50 transition-colors"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {/* Tag List */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-1 hover:text-blue-600 transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200/50">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl sm:rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              disabled={!title.trim() || !story.trim() || images.length === 0}
            >
              ✨ Create Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
