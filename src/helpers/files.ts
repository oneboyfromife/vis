export function shortenFileName(fileName: string) {
  const maxFileNameLength = 10; // Maximum length for the file name (excluding extension)
  const extension = fileName.split(".").pop();
  const fileNameWithoutExtension = fileName.substring(
    0,
    fileName.length - extension!.length - 1
  );

  if (fileNameWithoutExtension.length <= maxFileNameLength) {
    return fileName;
  }

  const shortenedFileName =
    fileNameWithoutExtension.substring(0, maxFileNameLength / 2) +
    ".." +
    fileNameWithoutExtension.slice(-maxFileNameLength / 2);
  return shortenedFileName + "." + extension;
}
