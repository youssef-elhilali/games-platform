const cropImageURL = (url: string) => {
  const mediaIndex = url.indexOf("media/");
  return (
    url.substring(0, mediaIndex + 6) +
    "crop/600/400/" +
    url.substring(mediaIndex + 6)
  );
};

export default cropImageURL;
