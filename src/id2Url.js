export function getYoutubeVideoId(url) {
    // Regular expression to match YouTube URLs with various formats
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([\w-]{11})/;
  
    // Executing the regular expression on the URL to get the video ID
    const match = url.match(regex);
  
    if (match && match[1]) {
      return match[1]; // The first capturing group in the regex will contain the video ID
    } else {
      // Return null if the URL is invalid or no video ID is found
      return null;
    }
  }
  