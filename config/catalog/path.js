export function getRelativePathUnderPosts(inputPath) {
    const normalizedPath = inputPath.replace(/\\/g, "/");

    const marker = "/src/posts/";
    const index = normalizedPath.lastIndexOf(marker);

    if (index !== -1) {
        return normalizedPath.slice(index + marker.length);
    }

    return normalizedPath;
}

export function isPostFolder(segment) {
    return /^post-\d+$/i.test(segment);
}

export function isReadme(file) {
    return file.inputPath.includes("README.md");
}