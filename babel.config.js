module.exports = {
    presets: [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    plugins: [
        //para nao ser necessario adicionar constructor para usar varivaeis status
        "@babel/plugin-proposal-class-properties"
    ]
}