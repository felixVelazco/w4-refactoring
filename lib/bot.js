require('dotenv').config();
const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");

const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, {polling:true});

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId =msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
})

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const numberToApplyFb = parseInt(msg.text);

  if(!isNaN(numberToApplyFb)){
    const fizzbuzzTrick = ExplorerController.getFizzbuzzNumber(numberToApplyFb);
    const responseBot = `Tu numero es: ${numberToApplyFb}. Validación ${fizzbuzzTrick.trick}`;
    bot.sendMessage(chatId, responseBot);
  }
})