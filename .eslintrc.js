module.exports = {
  env: {browser: true, es6: true},
  extends: ["eslint:recommended", "eslint-config-google"],
  parserOptions: {
    // para poder processar os imports
    sourceType: "module",
    // para poder processar vue templates
    jsx: true,
  },
  plugins: ['vue'],
  rules: {
    'vue/jsx-uses-vars': 2,
  },
};
