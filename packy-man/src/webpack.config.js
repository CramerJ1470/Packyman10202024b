module.exports = {
    resolve:{ fallback: {zlib: require.resolve("browserify-zlib"),stream: require.resolve("stream-browserify") ,path: require.resolve("path-browserify"),buffer: require.resolve("buffer/") },
},
};