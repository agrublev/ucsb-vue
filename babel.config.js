module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: "current"
                }
            }
        ],
        "@vue/app"
    ],
    plugins: ["@babel/plugin-transform-runtime", "@babel/plugin-transform-regenerator"]
};
