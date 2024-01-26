# BUILD NOTICE

This project will be notify build result to group chat, you can define you group id in `.env` by format below:

```
TELEGRAM_BOT_TOKEN="" # Grab it by bot father in telegram
TELEGRAM_CHAT_ID="" # You can open telegram browser and copy your group id in url

DISCORD_HOOK_URL="" # Grab it at here: https://api.slack.com/apps/[you app id]/incoming-webhooks?
```

## Setup

Install package by below command

```
yarn add @vanhoaltw/buildnotify
# or npm install @vanhoaltw/buildnotify
# or pnpm install @vanhoaltw/buildnotify
```

Add this command to your build script

```
"scripts": {
    "build": "node index.js buildnotify"
}
```

It should be send build result to your group chat was configured in `.env`
