module.exports = {
    extends: 'airbnb',
    plugins: [
        'promise',
        'json'
    ],
    globals: {
        App: true,
        Page: true,
        getApp: true,
        wx: true
    },
    rules: {
        "indent": ["error", 4],
        "semi": 0,
        "object-shorthand": 0,
        "arrow-parens": ["error", "as-needed"],
        "arrow-body-style": 0,
        "comma-dangle": 0,
        "consistent-return": 0,
        "no-unused-expressions": 0
    }
};
