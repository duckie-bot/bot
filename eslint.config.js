/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
//@ts-check

const eslint = require('@eslint/js');
const tslint = require('typescript-eslint');
module.exports = tslint.config(
    eslint.configs.recommended,
    ...tslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/no-unused-expressions': 'off',
        },
    },
);
