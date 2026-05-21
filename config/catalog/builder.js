import { TreeNode } from "./tree.js";
import { getRelativePathUnderPosts, isPostFolder } from "./path.js";

export  function buildCatalogTree(collectionApi) {
    const root = new TreeNode({
        key: "root",
        label: "Catalogo",
        level: "root",
    });

    const files = collectionApi.getFilteredByGlob("src/posts/**/*.md");

    for (const item of files) {
        const relativePath = getRelativePathUnderPosts(item.inputPath);
        const parts = relativePath.split("/").filter(Boolean);

        const fileName = parts.pop();

        let node = root;

        const filteredParts = parts.filter((p) => !isPostFolder(p));

        filteredParts.forEach((segment, index) => {
            const level = index === 0 ? "materia" : "anio";
            node = node.getOrCreateChild(segment, segment, level);
        });

        if (fileName === "README.md") {
            node.index = item;
        } else {
            node.posts.push(item);
        }
    }

    return root.finalize().children;
}