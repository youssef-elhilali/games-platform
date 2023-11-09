import baseImage from "../assets/No-Image-Placeholder.webp";

const cropImageURL = (url: string) => {
  if (url !== null) {
    const mediaIndex = url.indexOf("media/");
    return (
      url.substring(0, mediaIndex + 6) +
      "crop/600/400/" +
      url.substring(mediaIndex + 6)
    );
  } else {
    return baseImage;
  }
};

export default cropImageURL;
