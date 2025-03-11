module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true, // Добавлено для поддержки Node.js
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    rules: {
        // Здесь вы можете добавить свои собственные правила
    },
};