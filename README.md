This is a [Next.js](https://nextjs.org/) project with [typescript](https://www.typescriptlang.org/) and [react-babylonjs](https://github.com/brianzinn/react-babylonjs).

## Getting Started

Clone this repo, then run the development server:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file. You can also update `pages/fullscreen.tsx` to update the fullscreen view.

The key differences between `create-next-app` and this repo are the custom configuration for babylon ES6 modules in `next.config.js` using `next-transpile-modules` and a slight change to `tsconfig.json` to use the "allowSyntheticDefaultImports" property. Other than that, this repo mostly just uses the example from the `react-babylonjs` repo.

## Building

Run the following:
```bash
yarn build
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Learn Babylonjs and react-babylonjs

Learn [react-babylonjs](https://github.com/brianzinn/react-babylonjs) and  [Babylonjs](https://doc.babylonjs.com/) to see how you can make sophisticated 3d apps and games.
