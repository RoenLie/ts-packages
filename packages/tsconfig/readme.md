# tsconfig

> Convenient defaults for typescript projects. [TypeScript config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
## Install

```
$ pnpm add @roenlie/tsconfig -D
```

## Usage

`tsconfig.json`

```json
{
	"extends": "@roenlie/tsconfig",
	"compilerOptions": {
		"outDir": "dist", // whatever your output dir should be
		"types": [ // any explicit types you wish to include.
			"vite/client",
			"reflect-metadata",
			"node"
		],
	},
	"include": [
		"src/**/*.ts",
		"src/**/*.d.ts",
		"typings/**/*.d.ts",
	],
	"exclude": [
		"dist",
		"node_modules",
		"locales",
		"public",
		".vscode"
	]
}
```