export class TreeNode {
    constructor({ key, label, level }) {
        this.key = key;
        this.label = label;
        this.level = level;
        this.childrenMap = new Map();
        this.index = null;
        this.posts = [];
    }

    getOrCreateChild(key, label, level) {
        if (!this.childrenMap.has(key)) {
            this.childrenMap.set(key, new TreeNode({ key, label, level }));
        }
        return this.childrenMap.get(key);
    }

    finalize() {
        this.children = [...this.childrenMap.values()]
            .map((n) => n.finalize())
            .sort((a, b) => a.label.localeCompare(b.label, "es"));

        this.totalPosts =
            this.posts.length +
            this.children.reduce((acc, c) => acc + c.totalPosts, 0);

        delete this.childrenMap;
        return this;
    }
}