module.exports = {
	"env": {
		"browser": true,
		"node": true
	},
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
		"emitDecoratorMetadata": true,

	},
	"plugins": [
		"@typescript-eslint",
	],
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/stylistic",
	]
};
