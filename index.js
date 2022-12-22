const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf("5880997660:AAHMq0TWwoVhC0W2S78AbNVxpJ9JRdx4l7M");
bot.command("start", (ctx) => {
  ctx.reply("Здравствуй, дружок-пирожок", {
    reply_markup: Markup.inlineKeyboard([
      [Markup.callbackButton("Далее ", "next")],
    ]),
  });
});
bot.action("next", (ctx) => {
  ctx.editMessageText("как дела", {
    reply_markup: Markup.inlineKeyboard([
      [
        Markup.callbackButton("Хорошо", "good"),
        Markup.callbackButton("Плохо", "bad"),
      ],
    ]),
  });
});

bot.action("good", (ctx) => {
  ctx.editMessageText("Я так рад за тебя, Солнышко 🌞");
});
bot.action("bad", (ctx) => {
  ctx.editMessageText("Что произошло, бубубуличка?", {
    reply_markup: Markup.inlineKeyboard([
      [
        Markup.callbackButton("Не выспался", "sleep"),
        Markup.callbackButton("Плохая погода", "weather"),
      ],
    ]),
  });
});
bot.action("sleep", (ctx) => {
  ctx.replyWithPhoto({
    source: "imgbot/sleep.jpg",
  });
});
bot.action("weather", (ctx) => {
  ctx.replyWithPhoto({
    source: "imgbot/weather.jpg",
  });
});
bot.command("food", (ctx) => {
  ctx.reply("В какое время будем кушац?", {
    reply_markup: Markup.inlineKeyboard([
      [
        Markup.callbackButton("Завтрак", "breakfast"),
        Markup.callbackButton("Обед", "lunch"),
        Markup.callbackButton("Ужин", "diner"),
      ],
    ]),
  });
});
bot.action("lunch", (ctx) => {
  ctx.editMessageText("давай выберем что-то одно", {
    reply_markup: Markup.inlineKeyboard([
      [
        Markup.callbackButton("суп", "sup"),
        Markup.callbackButton("второе", "thesecond"),
      ],
    ]),
  });
});

let breakfastArray = [
  "Сырники",
  "Каша манная",
  "Каша овсянка",
  "Молочный суп",
  "Омлет с сосисками ",
  "Омлет с помидорками ",
  "Сухой корм",
  "Яички вареные",
  "Яички жаренные 🍳",
  "Ты слишком много ешь - давай в этот раз пропустим завтрак ( человек может сутки продержаться без еды,а тут всего лишь до обеда пару часиков ❤",
  "бутеры",
  "все что угодно, но не 🧀 'Lamber'",
];
bot.action("breakfast", (ctx) => {
  let i = Math.trunc(Math.random() * breakfastArray.length);
  ctx.reply(breakfastArray[i]);
});
let supArray = [
  "🍜 из семи Залуп",
  "борщ",
  "щи",
  "куриный",
  "солянка",
  "obaby",
  "",
];
let meetArray = [
  "слушай, давай подождем до ужина, а пока можешь обмануть свой желужок мандаринкой 🍊",
  "жаркое",
  "плов",
  "🍗 на сковородке",
  "🍗 в духовке",
  "🍗 на 🔥 ",
  "🍖 на сковородке",
  "🍖 в духовке",
  "🍖 на 🔥",
  "бефстроганов",
  "сосисочки",
];
let lateArray = [
  "не часто ли ты выбираешь сегодня? Давай докушаем то, что осталось с обеда",
  "жаркое",
  "плов",
  "скоро спать, а кушать перед сном вредно. Так что мыть попу и в кроватку!",
  "🍗 на сковородке",
  "🍗 в духовке",
  "🍗 на 🔥 ",
  "🍖 на сковородке",
  "🍖 в духовке",
  "🍖 на 🔥",
  "бефстроганов",
  "сосисочки",
];
let garnirArray = [
  "макароны",
  "рис 🍚",
  "гречка",
  "картошка вареная ",
  "🍟",
  "спагетти",
  "овощной салатик 🥗",
];
bot.action("sup", (ctx) => {
  let j = Math.trunc(Math.random() * supArray.length);
  ctx.reply(supArray[j]);
});
bot.action("thesecond", (ctx) => {
  let n = Math.trunc(Math.random() * garnirArray.length);
  let k = Math.trunc(Math.random() * meetArray.length);
  if (k === 0 || k === 1 || k === 2) {
    ctx.reply(meetArray[k]);
  } else {
    ctx.reply(garnirArray[n]);
    ctx.reply(meetArray[k]);
  }
});
bot.action("diner", (ctx) => {
  let s = Math.trunc(Math.random() * lateArray.length);
  let q = Math.trunc(Math.random() * garnirArray.length);
  if (s === 0 || s === 1 || s === 2 || s === 3) {
    ctx.reply(lateArray[s]);
  } else {
    ctx.reply(lateArray[s]);
    ctx.reply(garnirArray[q]);
  }
});

bot.launch();
