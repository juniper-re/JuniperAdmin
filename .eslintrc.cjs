module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:tailwindcss/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "ignorePatterns": ["tailwind.config.js", ".eslintrc.cjs", "postcss.config.js"],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": ["error", 2],
        "import/order": "error",
        "semi": "warn",
        "tailwindcss/migration-from-tailwind-2": "off", 
        "tailwindcss/no-custom-classname": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/indent": 'off'
    },
    "settings":{
        tailwindcss:{
            config:'tailwind.config.js'
        }
    }
}
