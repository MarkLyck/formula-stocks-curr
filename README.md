![repo-banner](https://github.com/MarkLyck/fs-next/blob/master/static/icons/logo_horizontal.svg)

[![Build Status](https://travis-ci.org/MarkLyck/fs-next.svg?branch=master)](https://travis-ci.org/MarkLyck/fs-next)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Formula Stocks is a stock recommendation service, that gives you recommendations on what to buy, for how much and when you should sell it. These recommendations are based on a deep learning algorithm that selects winning stocks +90% of the time. With an average annual interest rate of 20-35% depending on the product you choose.

![screenshot](https://github.com/MarkLyck/fs-next/blob/master/static/images/screenshots/trades.png)

To see the current production version see here: [https://formulastocks.com](https://formulastocks.com).

### Technologies used

- React 16.7 (very little state-management needed, so the new Context will do over Redux for this application)
- GraphQL (with GraphCool as a backend, (to be moved to Prisma))
- react-apollo to integrate with GraphQL (handles all CRUD on the graphQL endpoint)
- now.zeit for deployments
- emotion.sh for css-in-js (simular to styled-components but faster w/ dynamic styles)
- fontAwesome 5 Pro (for icons)
- date-fns for time management as it's much smaller than Moment, and we mostly just need { format }.
- draft.js for rich-text-editing (article system)
- Flow.js (to be added after MVP)

## Quick Start

```bash
git clone https://github.com/MarkLyck/fs-next.git
cd fs-next
yarn && yarn dev
```

Then open http://localhost:3000/ to see the application.

Useful commands:

### `yarn dev`

Runs the project in development mode.  
You can view your application at `http://localhost:3000`

The page will reload if you make edits.

### `yarn build`

Builds the app for production to the build folder.

The build is minified and the filenames include the hashes, ready for deployment

### `yarn start`

Runs the compiled app in production.

You can again view the application at `http://localhost:3000`

### `yarn test-unit`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

### `yarn start -- --inspect`

To debug the node server, you can use `yarn start --inspect`. This will start the node server and enable the inspector agent. For more information, see [this](https://nodejs.org/en/docs/inspector/).

### `yarn start -- --inspect-brk`

To debug the node server, you can use `yarn start --inspect-brk`. This will start the node server, enable the inspector agent and Break before user code starts. For more information, see [this](https://nodejs.org/en/docs/inspector/).

---

#### Author

- [Mark Lyck](https://twitter.com/marklyck)
