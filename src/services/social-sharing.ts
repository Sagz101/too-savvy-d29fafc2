
export type SocialPlatform = 'twitter' | 'facebook' | 'linkedin' | 'telegram' | 'whatsapp';

interface ShareOptions {
  title?: string;
  text?: string;
  url: string;
}

// Helper function to create share URLs for different platforms
export const createShareUrl = (platform: SocialPlatform, options: ShareOptions): string => {
  const { title, text, url } = options;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = text ? encodeURIComponent(text) : '';
  const encodedTitle = title ? encodeURIComponent(title) : '';
  
  switch (platform) {
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    case 'telegram':
      return `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
    case 'whatsapp':
      return `https://api.whatsapp.com/send?text=${encodedText} ${encodedUrl}`;
    default:
      return url;
  }
};

// Use Web Share API if available, otherwise fall back to opening a new window
export const shareContent = async (options: ShareOptions, platform?: SocialPlatform): Promise<boolean> => {
  try {
    // Try to use Web Share API first if no specific platform is given
    if (!platform && navigator.share) {
      await navigator.share({
        title: options.title,
        text: options.text,
        url: options.url
      });
      return true;
    }
    
    // Fall back to platform-specific sharing
    const shareUrl = platform ? createShareUrl(platform, options) : options.url;
    window.open(shareUrl, '_blank', 'width=600,height=400');
    return true;
  } catch (error) {
    console.error('Error sharing content:', error);
    return false;
  }
};
