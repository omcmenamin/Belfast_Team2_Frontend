module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard-with-typescript",
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
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "@typescript-eslint/strict-boolean-expressions": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-floating-promises": 0,
        "@typescript-eslint/consistent-type-definitions":0,
        "no-return-assign": 0,
        "operator-linebreak": 0,
        "react/jsx-tag-spacing": 2,
        "react/prop-types": 0,
        "react/display-name": 0,
        "@typescript-eslint/return-await": 0,
        "react-hooks/rules-of-hooks": 2,
        "react-hooks/exhaustive-deps": 2
    },
    "ignorePatterns": "node_modules/",
    "ignorePatterns": "dist/",
}
