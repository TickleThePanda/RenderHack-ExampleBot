# ExampleBot

An example Slackbot to use as a starter at Render hack

## Setup

1. Clone this repository
2. `npm install`
3. Copy `.env.example` to `.env`
4. Get token details from [Marcus](https://github.com/AverageMarcus) or setup your own legacy token in a Slack team you control (see: https://api.slack.com/custom-integrations/legacy-tokens) and populate the `.env` file as appropriate. (Try to pick a unique name)
5. To run the bot: `npm start`

## Adding new functionality

Simply add a new file in the `lib` directory that exports a single function that takes in a `bot` parameter.

This file will automatically be loaded on start and the bot instance passed in once conected.

For available functions see: https://www.npmjs.com/package/slackbots#methods

**Note:** You can disable files from being loaded by renaming them to start with a `.` E.g. `countdown.js` would become `.countdown.js`. _It is recommended to do this with the example files once you are confident your bot it working._
