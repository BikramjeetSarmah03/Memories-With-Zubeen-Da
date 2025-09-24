// Validation utilities
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidFileType(file: File, acceptedTypes: readonly string[]): boolean {
  const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;
  return acceptedTypes.includes(fileExtension);
}

export function isValidFileSize(file: File, maxSizeInMB: number): boolean {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  return file.size <= maxSizeInBytes;
}

export function validateMemoryForm(data: {
  title: string;
  story: string;
  images: File[];
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.title.trim()) {
    errors.push("Title is required");
  }

  if (!data.story.trim()) {
    errors.push("Story is required");
  }

  if (data.images.length === 0) {
    errors.push("At least one image is required");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function sanitizeTag(tag: string): string {
  return tag
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9#]/g, '')
    .substring(0, 20);
}
