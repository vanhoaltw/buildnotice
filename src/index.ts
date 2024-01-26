import { getPackageInfo } from '@/utils/get-package-info'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()

process.on('SIGINT', () => process.exit(0))
process.on('SIGTERM', () => process.exit(0))

async function reportSlack(message: string) {
  const hookUrl = process.env.DISCORD_HOOK_URL
  if (!hookUrl) return

  fetch(hookUrl, {
    method: 'post',
    body: JSON.stringify({
      text: message,
      username: 'Bot',
      icon_emoji: 'taco',
      unfurl_links: true,
      link_names: 1
    })
  })
}

function reportTelegram(message: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) return
  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: message })
  })
}

async function main() {
  const packageInfo = getPackageInfo()
  const versionBuild = packageInfo?.version || '1.0.0'
  const projectName = packageInfo?.name
  console.log(`🚀 Build Notice - version ${versionBuild}`)
  const message = `🚀 Build start ${projectName} - version ${versionBuild} at ${new Date()}`
  reportTelegram(message)
  reportSlack(message)
}

main()
