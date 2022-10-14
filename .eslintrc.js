module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "eslint:recommended", //Inherit the (hooked) rule item recommended in Eslink http://eslint.cn/docs/rules/
    "plugin:vue/essential", // This item is used to configure the vue.js style
    "prettier" //Add the rule set in prettier to override the rule set above. This will not conflict with the above rules
    //"@vue/prettier"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: false
      }
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
}
