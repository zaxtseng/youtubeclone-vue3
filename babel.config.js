module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage', // 按需引入polyfill
                corejs: 3
            }
        ],
        [
            '@babel/preset-typescript',
            {
                allExtensions: true // 支持所有文件扩展名,在vue中使用ts
            }
        ]
    ],
    plugins: [
        [
            '@babel/plugin-transform-runtime',
            {
                corejs: 3
            }
        ]
    ]
}