# 🔥 efa-companies

![Lint Check](https://github.com/playerony/efa-companies/workflows/Lint/badge.svg)
![Test Check](https://github.com/playerony/efa-companies/workflows/Test/badge.svg)
![Production Build](https://github.com/playerony/efa-companies/workflows/Build/badge.svg)
![Typecheck Check](https://github.com/playerony/efa-companies/workflows/Typecheck/badge.svg)

EFA in the project name means used architecture pattern.
![image](https://michalzalecki.com/posts/elegant-frontend-architecture-layers@2x.png)
This is a simple app which is a simple version of portfolio tracker

## 📖Table of Contents

- [✨ Getting started](#%e2%9c%a8-getting-started)
  - [Prerequisites](#prerequisites)
  - [Bootstrap](#bootstrap)
- [📜 Scripts](#%f0%9f%93%9c-scripts)
  - [Build](#build)
  - [Test](#test)
  - [Analyze](#analyze)
  - [Development](#development)
- [📚 Documentation](#%f0%9f%93%9a-documentation)
  - [Commit Message Guideline](#commit-message-guideline)

## ✨ Getting started

### Prerequisites

You need to have installed the following software:

- [nodejs](https://nodejs.org/en/) (>=14.15.0)
- [npm](https://npmjs.com/) (>= 6.14.0)

### Bootstrap

```bash
  git clone git@github.com:playerony/efa-companies.git
  cd efa-companies
  npm i
```

## 📜Scripts:

### Development

- `storybook` - Run storybook.
- `start` - Run application in development mode.
- `reinstall-deps` - Run will remove all dependencies and reinstall them.

### Build

- `build` - Build for production a ready application.
- `build-storybook` - Build a ready storybook.

### Test

- `test` - Run tests.
- `test:e2e` - Run e2e tests.
- `test:ci` - Run tests in CI mode.
- `test:watch` - Run tests in watch mode.

### Analyze

- `lint` - Run `eslint`. Output any errors 🚨.
- `lint:fix` - Run `eslint`. Fix any lint errors 🚨.
- `typecheck` - Run `tsc`. Output any errors 🚨.
- `format` - Run `prettier` to format all the files.

## 📚 Documentation

### Commit Message Guideline

- For easier commit type recognition commit messages are prefixed with an emoji
- See available [commit-emojis](https://github.com/sebald/commit-emojis#available-emojis)
