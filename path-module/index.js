const path = require('path');

console.log("Directory name:", path.dirname(__filename));

console.log("File name:", path.basename(__filename));

console.log("File extension:", path.extname(__filename)); // e.g., .js

const joinedPath = path.join('/user', 'documents', 'node', 'projects');
console.log("Joined path:", joinedPath); // Output: /user/documents/node/projects

const resolvedPath = path.resolve('user', 'documents', 'node', 'projects');
console.log("Resolved path:", resolvedPath); // Output: (absolute path to current dir)/user/documents/node/projects

const normalizedPath = path.normalize('/user/../documents/./node/projects');
console.log("Normalized path:", normalizedPath); // Output: /documents/node/projects