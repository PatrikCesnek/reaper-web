/* ==========================================================================
   Reaper - site behaviour
   1. Translations (EN / SK / CS) with per-page title and description swap
   2. The hero torch: pointer-driven light mask, the page's one real device
   3. Scroll reveals via IntersectionObserver (never a scroll listener)
   Everything degrades to a static, fully-lit page under reduced motion.
   ========================================================================== */

const translations = {
  en: {
    "meta.home.title": "Reaper | Pixel-Art Horror Game for iPhone and iPad",
    "meta.home.description":
      "Reaper is a pixel-art horror game for iPhone and iPad. You are Death on a quota: take only the marked souls before dawn, because every living soul you reap costs a heart.",
    "meta.support.title": "Reaper Support | Help with Hearts, Game Center, and Progress",
    "meta.support.description":
      "Support for Reaper on iPhone and iPad. How the hearts and mercy rule work, Game Center, where your progress is stored, sound and haptics, and how to reach the developer.",
    "meta.privacy.title": "Reaper Privacy Policy | No Data Collected",
    "meta.privacy.description":
      "Reaper collects nothing. No account, no analytics, no advertising, no tracking, and no third-party SDKs. Your progress stays on your device.",
    "meta.notfound.title": "Not on the list | Reaper",
    "meta.notfound.description":
      "This page could not be found. Head back to the Reaper home page or open support.",

    "a11y.skip": "Skip to content",
    "nav.home": "Home",
    "nav.rules": "The rules",
    "nav.screens": "Screens",
    "nav.support": "Support",
    "nav.privacy": "Privacy",
    "footer.contact": "Contact",
    "footer.legal": "Reaper, an independent game by Patrik Cesnek",
    "cta.pending": "Coming to the App Store",
    "cta.rules": "How it plays",

    "hero.eyebrow": "iPhone and iPad",
    "hero.text":
      "Death on a quota. Your light is small, the night is not, and taking the wrong soul costs a heart.",
    "hero.torch": "Move to light the dark",

    "rules.title": "The list is short. Keeping to it is not.",
    "rules.lede":
      "You drift through a graveyard you can barely see, with a joystick in one corner and a quota hanging over you. Everything that matters happens inside your light.",
    "rules.marked.title": "The marked",
    "rules.marked.text":
      "Creatures wearing a skull are due tonight. Tap one inside your light and the scythe takes its soul.",
    "rules.living.title": "The living",
    "rules.living.text":
      "The unmarked are not yours. Reaping one still counts toward the quota, but it costs a heart. Take fewer than three and your hearts return at dawn.",
    "rules.dawn.title": "Before dawn",
    "rules.dawn.text":
      "Meet the quota before the clock runs out, or the souls slip away and the night is lost. Five hearts is all you get.",
    "rules.shot.caption": "The game teaches the rule before it holds you to it",

    "nights.title": "Every night asks for more.",
    "nights.souls": "Souls",
    "nights.n1.label": "Night 1",
    "nights.n1.text": "Three marked souls can be out at once. There is room to hesitate.",
    "nights.n5.label": "Night 5",
    "nights.n5.text": "Two at a time from here on, and everything moves a fifth faster.",
    "nights.n10.label": "Night 10",
    "nights.n10.text": "Twenty six creatures crowd the dark and only a handful are yours.",
    "nights.n15.label": "Night 15",
    "nights.n15.text": "The clock stops growing at five minutes. The quota does not.",
    "nights.note":
      "Every night is built so the quota can be met without touching a single living creature. The margin just keeps getting thinner, and nothing outruns you: creatures are capped at 85 percent of your speed.",

    "screens.title": "See it in the dark.",
    "screens.briefing": "The night's contract",
    "screens.gameplay": "A small light in a large night",
    "screens.tutorial": "Four cards, then you are on your own",
    "screens.profile": "Records, cloaks, and Game Center",
    "screens.paused": "Pause anywhere, the night waits",

    "cloaks.eyebrow": "Wear something else",
    "cloaks.title": "Five cloaks. None of them help.",
    "cloaks.text":
      "Colorways are a palette swap on the same pixel art, so the cloak changes and the odds do not. All five are free, and the one you pick carries over to every night.",
    "cloaks.classic": "Classic",
    "cloaks.blood": "Blood",
    "cloaks.soul": "Soul",
    "cloaks.shadow": "Shadow",
    "cloaks.gold": "Gold",
    "cloaks.note": "Premium cloaks arrive in a future update.",

    "ach.title": "Nine ways to be remembered.",
    "ach.lede":
      "Achievements and the deepest-night leaderboard run through Game Center. Sign in and they sync. Stay signed out and everything still records on your device.",
    "ach.first.title": "First harvest",
    "ach.first.text": "Collect your first marked soul.",
    "ach.n1.title": "Apprentice of death",
    "ach.n1.text": "Complete night 1.",
    "ach.n5.title": "Five nights deep",
    "ach.n5.text": "Complete night 5.",
    "ach.n10.title": "Decade of darkness",
    "ach.n10.text": "Complete night 10.",
    "ach.merciful.title": "Merciful",
    "ach.merciful.text": "Complete a night without touching the living.",
    "ach.bargain.title": "Dark bargain",
    "ach.bargain.text": "Complete a night after taking three or more living souls.",
    "ach.thread.title": "By a thread",
    "ach.thread.text": "Complete a night with a single heart left.",
    "ach.reaped.title": "The reaper, reaped",
    "ach.reaped.text": "Die. Even Death has quotas.",
    "ach.hundred.title": "Hundred souls",
    "ach.hundred.text":
      "Collect one hundred souls, all time. The count never resets, however many nights it takes you.",

    "facts.title": "No account. No ads. No tracking.",
    "facts.offline.title": "Plays offline",
    "facts.offline.text": "Every night runs on device. Airplane mode changes nothing.",
    "facts.account.title": "No sign up",
    "facts.account.text":
      "There is no Reaper account, no email field, and no password to forget.",
    "facts.privacy.title": "Nothing collected",
    "facts.privacy.text":
      "No analytics, no ads, no third-party SDKs. Your progress stays on your device.",
    "facts.gamecenter.title": "Game Center optional",
    "facts.gamecenter.text":
      "Decline it and the game never asks again. Local records keep working.",
    "facts.universal.title": "iPhone and iPad",
    "facts.universal.text":
      "One universal app, landscape, built for touch with a thumb joystick.",
    "facts.requirements.title": "iOS 18 or later",
    "facts.requirements.text":
      "Music, sound, and haptics each toggle off in the pause screen.",

    "closing.title": "Dawn is coming either way.",
    "closing.text":
      "Reaper is finished and heading to review. Support is already open if you need it.",

    "support.title": "Support",
    "support.intro":
      "Everything below is answered from how the game actually behaves. If your question is not here, write to me directly and you will get a real reply.",
    "support.contact.title": "Reach the developer",
    "support.contact.text":
      "Reaper is made by one person. Bug reports, refund questions, and ideas all land in the same inbox.",
    "support.contact.note":
      "Include your device, your iOS version, and the night you were on. Most replies go out within two working days.",
    "support.contact.button": "Email support",
    "support.playing.title": "Playing",
    "support.progress.title": "Progress and Game Center",
    "support.device.title": "Sound, haptics, and devices",
    "support.report.title": "Reporting a problem",
    "support.report.text": "A good report gets a fix much faster. Where you can, send:",
    "support.report.device":
      "Your device and iOS version, for example iPhone 15 Pro on iOS 18.4.",
    "support.report.night":
      "The night number and what the screen showed when it went wrong.",
    "support.report.steps": "What you did just before it happened, so I can reproduce it.",
    "support.report.shot": "A screenshot or screen recording, if the problem is visible.",
    "support.report.refund":
      'Refunds and billing are handled by Apple, not by me. Use <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a> and sign in with the Apple Account that made the purchase.',

    "faq.play.q": "How do I play?",
    "faq.play.a":
      "Drift with the joystick in the bottom corner. Creatures wearing a skull are marked and due tonight. Tap a marked creature inside your circle of light to swing the scythe and take its soul. Meet the quota before the clock runs out and the night is yours.",
    "faq.hearts.q": "Why am I losing hearts?",
    "faq.hearts.a":
      "You reaped a creature that was not marked. The unmarked still count toward the quota, but each one costs a heart. You start every run with five.",
    "faq.mercy.q": "Can I get my hearts back?",
    "faq.mercy.a":
      "Yes. Finish a night having reaped fewer than three living creatures and all five hearts return at dawn. That is the mercy rule, and it is the only way to heal.",
    "faq.gameover.q": "What happens when I run out of hearts?",
    "faq.gameover.a":
      "The run ends. Rise Again puts you back on night 1 with five hearts. Your lifetime souls, merciful nights, deepest night, and achievements are all kept.",
    "faq.timeout.q": "I ran out of time. Do I lose anything?",
    "faq.timeout.a":
      "No. Try Again restarts the same night with the hearts you began that night with, so hearts spent on a failed attempt come back.",
    "faq.tap.q": "My taps are not connecting.",
    "faq.tap.a":
      "Two things stop a swing. A creature outside your circle of light cannot be reached, so move closer first. Taps landing on the reaper itself are ignored on purpose, so the scythe never swings at its own bearer when a creature brushes past. Aim slightly away from your own sprite.",
    "faq.escape.q": "Can a marked soul outrun me?",
    "faq.escape.a":
      "No. Creature speed is capped at 85 percent of yours at every difficulty, so anything marked can always be caught. What runs out is the clock.",
    "faq.tutorial.q": "Can I see the tutorial again?",
    "faq.tutorial.a":
      "Yes. Open Profile from the night briefing screen and tap Tutorial. The four cards can be re-read as often as you like.",
    "faq.gc.q": "Do I have to use Game Center?",
    "faq.gc.a":
      "No. If you decline the sign-in or stay signed out, Reaper never asks again and simply keeps your records on the device. Sign in and the deepest-night leaderboard plus all nine achievements sync to your Apple Account.",
    "faq.storage.q": "Where is my progress stored?",
    "faq.storage.a":
      "On your device only. There is no Reaper account and no server of mine holding anything. Game Center achievements and leaderboard scores live with your Apple Account, under Apple's terms.",
    "faq.sync.q": "Does my progress move between iPhone and iPad?",
    "faq.sync.a":
      "Local records do not. Each device keeps its own hearts, cloak choice, and lifetime counts. Game Center achievements and your deepest-night score do follow your Apple Account across devices.",
    "faq.reset.q": "How do I wipe my progress and start clean?",
    "faq.reset.a":
      "Delete Reaper and install it again. That clears every local record, including the tutorial flag, so the game starts as it did on day one. Achievements already reported to Game Center stay with your Apple Account and are cleared from Game Center itself.",
    "faq.achievements.q": "An achievement did not unlock.",
    "faq.achievements.a":
      "Achievements are earned locally first and then reported to Game Center, so an unlock earned offline appears once you are back online and signed in. If one is still missing after that, email me with the achievement name and the night you were on.",
    "faq.audio.q": "How do I turn the music or sound off?",
    "faq.audio.a":
      "Tap the gear icon in the top corner during a night, or from the briefing screen. Music, sound, and haptics each have their own switch and the choice is remembered.",
    "faq.haptics.q": "Why do I feel no haptics?",
    "faq.haptics.a":
      "Haptics need an iPhone with a Taptic Engine. iPad has no haptic engine, so the game skips them silently rather than complaining. Check the pause screen in case the switch is simply off.",
    "faq.offline.q": "Does Reaper need an internet connection?",
    "faq.offline.a":
      "No. Every night runs entirely on device. Only Game Center syncing needs a connection, and Game Center is optional.",
    "faq.requirements.q": "What do I need to run it?",
    "faq.requirements.a":
      "An iPhone or iPad running iOS 18 or later. Reaper is one universal app, plays in landscape, and uses the full screen.",
    "faq.language.q": "Which languages does the game speak?",
    "faq.language.a":
      "The game itself is in English. This website is available in English, Slovak, and Czech.",
    "faq.a11y.q": "Is there anything for accessibility?",
    "faq.a11y.a":
      "Menus, overlays, and the pause switches carry VoiceOver labels and states. Music, sound, and haptics can each be switched off independently. The night itself is played by sight, so if something specific would help you play, tell me and I will look at it.",

    "privacy.title": "Privacy policy",
    "privacy.intro":
      "Reaper collects no personal data. There is no account to create, no analytics, no advertising, and no third-party SDK reading over your shoulder. This page says exactly what that means.",
    "privacy.updated": "Last updated 18 August 2026",
    "privacy.collect.title": "What Reaper collects",
    "privacy.collect.text":
      "Nothing. The app declares no collected data types in its App Privacy report and its privacy manifest, and it does not track you across apps or websites owned by other companies. There is no advertising identifier, no device fingerprinting, and no analytics or crash-reporting SDK in the build.",
    "privacy.device.title": "What stays on your device",
    "privacy.device.text":
      "Reaper saves your game state locally so you can put the phone down mid-run. That local record holds:",
    "privacy.device.night": "Your current night, hearts, and deepest night reached.",
    "privacy.device.souls": "Lifetime souls taken and the number of merciful nights.",
    "privacy.device.skin": "Your chosen cloak and whether you have seen the tutorial.",
    "privacy.device.settings": "Your music, sound, and haptics switches.",
    "privacy.device.note":
      "This is stored in the app's own storage on your device. It never leaves the device, it is not readable by me, and deleting the app deletes it.",
    "privacy.gc.title": "Game Center",
    "privacy.gc.text":
      "If you sign in to Game Center, Reaper submits two things to Apple: your deepest completed night as a leaderboard score, and the achievements you have unlocked. That data is handled by Apple under Apple's privacy policy, and it is tied to your Apple Account rather than to anything I hold. Reaper never reads your friends list, your profile, or your contacts.",
    "privacy.gc.optional":
      "Game Center is entirely optional. Decline the sign-in, or stay signed out, and the game keeps working with local records and never asks again.",
    "privacy.network.title": "Network use",
    "privacy.network.text":
      "The game makes no network requests of its own. It has no servers, no backend, and no remote configuration. The only network traffic that can occur is Apple's own Game Center syncing, and only when you are signed in.",
    "privacy.children.title": "Children",
    "privacy.children.text":
      "Because Reaper collects nothing, there is nothing for anyone of any age to hand over. The game contains dark themes and pixel-art fantasy violence and carries an age rating on the App Store to match. Parents who want the online element removed can simply leave Game Center signed out.",
    "privacy.purchases.title": "Purchases",
    "privacy.purchases.text":
      "Reaper ships with every cloak unlocked and no in-app purchases. If paid cloaks are added in a future update, any payment is processed by Apple. I never see your card details, your billing address, or your name.",
    "privacy.rights.title": "Your rights",
    "privacy.rights.text":
      "There is no personal data of yours in my hands to access, correct, export, or delete, so there is nothing to request. To erase everything the game has stored locally, delete the app. To remove Game Center achievements and scores, use the Game Center settings on your device or contact Apple.",
    "privacy.website.title": "This website",
    "privacy.website.text":
      "This site is a set of static pages. It runs no analytics, sets no cookies, and loads no fonts, scripts, or images from anyone else. Your language choice is saved in your browser's local storage on your own machine and is never sent anywhere.",
    "privacy.changes.title": "Changes",
    "privacy.changes.text":
      "If a future version of the game ever changes what it handles, this page is updated before that version ships, and the date at the top changes with it.",
    "privacy.contact.title": "Contact",
    "privacy.contact.text":
      'Questions about this policy go straight to the developer at <a href="mailto:pcesnek290@gmail.com?subject=Reaper%20Privacy">pcesnek290@gmail.com</a>.',

    "lost.code": "Error 404",
    "lost.title": "This one was never on the list.",
    "lost.text":
      "Whatever you were looking for is not here, and nothing else is either. It is a long way past the edge of the light.",
    "lost.home": "Back to the light",
  },

  sk: {
    "meta.home.title": "Reaper | Pixelová hororová hra pre iPhone a iPad",
    "meta.home.description":
      "Reaper je pixelová hororová hra pre iPhone a iPad. Si Smrť s kvótou: pred úsvitom zober iba označené duše, lebo každá živá duša ťa stojí srdce.",
    "meta.support.title": "Podpora Reaper | Srdcia, Game Center a postup",
    "meta.support.description":
      "Podpora pre hru Reaper na iPhone a iPad. Ako fungujú srdcia a pravidlo milosti, Game Center, kde sa ukladá postup, zvuk a haptika, a ako sa spojiť s vývojárom.",
    "meta.privacy.title": "Zásady ochrany súkromia hry Reaper | Nič sa nezbiera",
    "meta.privacy.description":
      "Reaper nezbiera nič. Žiadny účet, žiadna analytika, žiadna reklama, žiadne sledovanie a žiadne cudzie SDK. Tvoj postup zostáva v zariadení.",
    "meta.notfound.title": "Na zozname to nebolo | Reaper",
    "meta.notfound.description":
      "Táto stránka sa nenašla. Vráť sa na domovskú stránku hry Reaper alebo otvor podporu.",

    "a11y.skip": "Preskočiť na obsah",
    "nav.home": "Domov",
    "nav.rules": "Pravidlá",
    "nav.screens": "Zábery",
    "nav.support": "Podpora",
    "nav.privacy": "Súkromie",
    "footer.contact": "Kontakt",
    "footer.legal": "Reaper, nezávislá hra od Patrika Cesneka",
    "cta.pending": "Čoskoro v App Store",
    "cta.rules": "Ako sa hrá",

    "hero.eyebrow": "iPhone a iPad",
    "hero.text":
      "Smrť s kvótou. Tvoje svetlo je malé, noc nie je, a zobrať zlú dušu ťa stojí srdce.",
    "hero.torch": "Pohybom rozsvieť tmu",

    "rules.title": "Zoznam je krátky. Dodržať ho nie je.",
    "rules.lede":
      "Preplávaš cintorínom, ktorý sotva vidíš, s páčkou v rohu obrazovky a kvótou nad hlavou. Všetko podstatné sa deje vnútri tvojho svetla.",
    "rules.marked.title": "Označení",
    "rules.marked.text":
      "Tvory s lebkou majú prísť na rad dnes v noci. Ťukni na takú vnútri svojho svetla a kosa si vezme jej dušu.",
    "rules.living.title": "Živí",
    "rules.living.text":
      "Neoznačení ti nepatria. Zobrať takého sa síce počíta do kvóty, ale stojí ťa to srdce. Zober menej než troch a srdcia sa ti za úsvitu vrátia.",
    "rules.dawn.title": "Pred úsvitom",
    "rules.dawn.text":
      "Splň kvótu skôr, než dobehne čas, inak duše uniknú a noc je stratená. Máš iba päť srdc.",
    "rules.shot.caption": "Hra ťa pravidlo naučí skôr, než ťa podľa neho súdi",

    "nights.title": "Každá noc pýta viac.",
    "nights.souls": "Duší",
    "nights.n1.label": "Noc 1",
    "nights.n1.text": "Naraz môžu byť vonku tri označené duše. Je priestor zaváhať.",
    "nights.n5.label": "Noc 5",
    "nights.n5.text": "Odteraz už len dve naraz a všetko sa hýbe o pätinu rýchlejšie.",
    "nights.n10.label": "Noc 10",
    "nights.n10.text": "V tme sa tlačí dvadsaťšesť tvorov a len hŕstka je tvojich.",
    "nights.n15.label": "Noc 15",
    "nights.n15.text": "Čas prestane rásť na piatich minútach. Kvóta nie.",
    "nights.note":
      "Každá noc je postavená tak, aby sa kvóta dala splniť bez jediného živého tvora. Len rezerva sa stále stenčuje. A nič ti neujde: tvory majú rýchlosť obmedzenú na 85 percent tvojej.",

    "screens.title": "Pozri sa do tmy.",
    "screens.briefing": "Zmluva na túto noc",
    "screens.gameplay": "Malé svetlo vo veľkej noci",
    "screens.tutorial": "Štyri karty a potom si na to sám",
    "screens.profile": "Rekordy, plášte a Game Center",
    "screens.paused": "Pauza kedykoľvek, noc počká",

    "cloaks.eyebrow": "Obleč si niečo iné",
    "cloaks.title": "Päť plášťov. Ani jeden ti nepomôže.",
    "cloaks.text":
      "Farebné varianty sú výmenou palety na tej istej pixelovej kresbe, takže sa mení plášť, nie tvoje šance. Všetkých päť je zadarmo a vybraný ostáva na každú noc.",
    "cloaks.classic": "Klasický",
    "cloaks.blood": "Krvavý",
    "cloaks.soul": "Duša",
    "cloaks.shadow": "Tieň",
    "cloaks.gold": "Zlatý",
    "cloaks.note": "Prémiové plášte prídu v budúcej aktualizácii.",

    "ach.title": "Deväť spôsobov, ako sa zapísať.",
    "ach.lede":
      "Úspechy a rebríček najhlbšej noci bežia cez Game Center. Prihlás sa a synchronizujú sa. Zostaň odhlásený a všetko sa aj tak zapíše v zariadení.",
    "ach.first.title": "Prvá žatva",
    "ach.first.text": "Zober svoju prvú označenú dušu.",
    "ach.n1.title": "Učeň smrti",
    "ach.n1.text": "Dokonči noc 1.",
    "ach.n5.title": "Päť nocí hlboko",
    "ach.n5.text": "Dokonči noc 5.",
    "ach.n10.title": "Dekáda temnoty",
    "ach.n10.text": "Dokonči noc 10.",
    "ach.merciful.title": "Milosrdný",
    "ach.merciful.text": "Dokonči noc bez toho, aby si sa dotkol živých.",
    "ach.bargain.title": "Temná dohoda",
    "ach.bargain.text": "Dokonči noc po tom, čo si vzal tri alebo viac živých duší.",
    "ach.thread.title": "O vlások",
    "ach.thread.text": "Dokonči noc s jediným zostávajúcim srdcom.",
    "ach.reaped.title": "Smrť, ktorú zobrali",
    "ach.reaped.text": "Zomri. Aj Smrť má kvóty.",
    "ach.hundred.title": "Sto duší",
    "ach.hundred.text":
      "Nazbieraj sto duší za celý čas. Počítadlo sa nikdy nevynuluje, nech ti to trvá koľkokoľvek nocí.",

    "facts.title": "Žiadny účet. Žiadne reklamy. Žiadne sledovanie.",
    "facts.offline.title": "Hrá sa offline",
    "facts.offline.text": "Každá noc beží v zariadení. Režim v lietadle nič nezmení.",
    "facts.account.title": "Žiadna registrácia",
    "facts.account.text":
      "Neexistuje účet Reaper, žiadne políčko na e-mail ani heslo, ktoré by sa dalo zabudnúť.",
    "facts.privacy.title": "Nič sa nezbiera",
    "facts.privacy.text":
      "Žiadna analytika, žiadne reklamy, žiadne cudzie SDK. Tvoj postup zostáva v zariadení.",
    "facts.gamecenter.title": "Game Center dobrovoľne",
    "facts.gamecenter.text":
      "Odmietni ho a hra sa už nikdy nespýta. Lokálne rekordy fungujú ďalej.",
    "facts.universal.title": "iPhone a iPad",
    "facts.universal.text":
      "Jedna univerzálna aplikácia, na šírku, stavaná na dotyk s páčkou pod palcom.",
    "facts.requirements.title": "iOS 18 alebo novší",
    "facts.requirements.text":
      "Hudbu, zvuk aj haptiku vypneš samostatne v obrazovke pauzy.",

    "closing.title": "Úsvit príde tak či tak.",
    "closing.text":
      "Reaper je hotový a mieri na posúdenie. Podpora je otvorená už teraz, ak ju potrebuješ.",

    "support.title": "Podpora",
    "support.intro":
      "Všetko nižšie vychádza z toho, ako sa hra naozaj správa. Ak tu tvoja otázka nie je, napíš mi priamo a dostaneš skutočnú odpoveď.",
    "support.contact.title": "Napíš vývojárovi",
    "support.contact.text":
      "Reaper robí jeden človek. Hlásenia chýb, otázky k vráteniu peňazí aj nápady chodia do tej istej schránky.",
    "support.contact.note":
      "Uveď zariadenie, verziu iOS a noc, na ktorej si bol. Väčšina odpovedí odchádza do dvoch pracovných dní.",
    "support.contact.button": "Napísať podpore",
    "support.playing.title": "Hranie",
    "support.progress.title": "Postup a Game Center",
    "support.device.title": "Zvuk, haptika a zariadenia",
    "support.report.title": "Nahlásenie problému",
    "support.report.text": "Dobré hlásenie výrazne zrýchli opravu. Ak môžeš, pošli:",
    "support.report.device":
      "Zariadenie a verziu iOS, napríklad iPhone 15 Pro s iOS 18.4.",
    "support.report.night": "Číslo noci a čo bolo na obrazovke, keď sa to pokazilo.",
    "support.report.steps": "Čo si robil tesne predtým, aby som to vedel zopakovať.",
    "support.report.shot": "Snímku alebo záznam obrazovky, ak je problém vidieť.",
    "support.report.refund":
      'Vrátenie peňazí a platby rieši Apple, nie ja. Použi <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a> a prihlás sa účtom Apple, ktorým bol nákup urobený.',

    "faq.play.q": "Ako sa to hrá?",
    "faq.play.a":
      "Pohybuj sa páčkou v dolnom rohu. Tvory s lebkou sú označené a majú dnes prísť na rad. Ťukni na označeného tvora vnútri svojho kruhu svetla, kosa sa zaženie a vezme jeho dušu. Splň kvótu skôr, než dobehne čas, a noc je tvoja.",
    "faq.hearts.q": "Prečo strácam srdcia?",
    "faq.hearts.a":
      "Zobral si tvora, ktorý nebol označený. Neoznačení sa síce počítajú do kvóty, ale každý stojí jedno srdce. Každý pokus začínaš s piatimi.",
    "faq.mercy.q": "Dajú sa srdcia získať späť?",
    "faq.mercy.a":
      "Áno. Dokonči noc s menej než tromi zobratými živými tvormi a za úsvitu sa vráti všetkých päť srdc. To je pravidlo milosti a je to jediný spôsob liečenia.",
    "faq.gameover.q": "Čo sa stane, keď mi dôjdu srdcia?",
    "faq.gameover.a":
      "Pokus končí. Voľba Rise Again ťa vráti na noc 1 s piatimi srdcami. Celkový počet duší, milosrdné noci, najhlbšia noc aj úspechy ti zostanú.",
    "faq.timeout.q": "Došiel mi čas. Stratím niečo?",
    "faq.timeout.a":
      "Nie. Try Again spustí tú istú noc znova so srdcami, s ktorými si ju začal, takže srdcia stratené v neúspešnom pokuse sa vrátia.",
    "faq.tap.q": "Moje ťuknutia nezaberajú.",
    "faq.tap.a":
      "Zásah zastavia dve veci. Na tvora mimo kruhu svetla nedosiahneš, takže sa najprv priblíž. Ťuknutia priamo na kosca sú ignorované zámerne, aby kosa nikdy nezaťala do svojho nositeľa, keď okolo prebehne tvor. Mier trochu bokom od vlastnej postavy.",
    "faq.escape.q": "Môže mi označená duša ujsť?",
    "faq.escape.a":
      "Nie. Rýchlosť tvorov je na každej obtiažnosti obmedzená na 85 percent tvojej, takže označeného vždy dobehneš. Čo dochádza, je čas.",
    "faq.tutorial.q": "Dá sa tutoriál pozrieť znova?",
    "faq.tutorial.a":
      "Áno. Otvor Profile z úvodnej obrazovky noci a ťukni na Tutorial. Štyri karty si môžeš prečítať koľkokrát chceš.",
    "faq.gc.q": "Musím používať Game Center?",
    "faq.gc.a":
      "Nie. Ak prihlásenie odmietneš alebo zostaneš odhlásený, Reaper sa už nikdy nespýta a rekordy si drží v zariadení. Po prihlásení sa rebríček najhlbšej noci a všetkých deväť úspechov synchronizuje s tvojím účtom Apple.",
    "faq.storage.q": "Kde sa ukladá môj postup?",
    "faq.storage.a":
      "Len v tvojom zariadení. Neexistuje účet Reaper ani môj server, ktorý by čokoľvek držal. Úspechy a skóre v Game Center patria k tvojmu účtu Apple podľa podmienok Apple.",
    "faq.sync.q": "Prenáša sa postup medzi iPhonom a iPadom?",
    "faq.sync.a":
      "Lokálne rekordy nie. Každé zariadenie si drží vlastné srdcia, vybraný plášť aj celkové počty. Úspechy v Game Center a skóre najhlbšej noci však tvoj účet Apple prenáša medzi zariadeniami.",
    "faq.reset.q": "Ako vymažem postup a začnem odznova?",
    "faq.reset.a":
      "Zmaž Reaper a nainštaluj ho znova. Tým sa vymažú všetky lokálne záznamy vrátane príznaku tutoriálu, takže hra začne ako v prvý deň. Úspechy už nahlásené do Game Center zostávajú pri tvojom účte Apple a mažú sa priamo v Game Center.",
    "faq.achievements.q": "Úspech sa neodomkol.",
    "faq.achievements.a":
      "Úspechy sa najprv zapíšu lokálne a až potom nahlásia do Game Center, takže úspech získaný offline sa objaví, keď budeš späť online a prihlásený. Ak aj potom chýba, napíš mi jeho názov a noc, na ktorej si bol.",
    "faq.audio.q": "Ako vypnem hudbu alebo zvuk?",
    "faq.audio.a":
      "Ťukni na ozubené koliesko v hornom rohu počas noci alebo na úvodnej obrazovke. Hudba, zvuk aj haptika majú vlastný prepínač a voľba sa zapamätá.",
    "faq.haptics.q": "Prečo necítim haptiku?",
    "faq.haptics.a":
      "Haptika potrebuje iPhone s Taptic Engine. iPad haptický modul nemá, takže ju hra ticho preskočí namiesto sťažovania sa. Skontroluj aj obrazovku pauzy, či prepínač nie je jednoducho vypnutý.",
    "faq.offline.q": "Potrebuje Reaper internet?",
    "faq.offline.a":
      "Nie. Každá noc beží celá v zariadení. Pripojenie potrebuje len synchronizácia Game Center, ktorá je dobrovoľná.",
    "faq.requirements.q": "Čo potrebujem, aby to bežalo?",
    "faq.requirements.a":
      "iPhone alebo iPad s iOS 18 alebo novším. Reaper je jedna univerzálna aplikácia, hrá sa na šírku a využíva celú obrazovku.",
    "faq.language.q": "V akých jazykoch hra hovorí?",
    "faq.language.a":
      "Samotná hra je v angličtine. Táto stránka je dostupná v angličtine, slovenčine a češtine.",
    "faq.a11y.q": "Je tam niečo pre prístupnosť?",
    "faq.a11y.a":
      "Menu, prekryvné obrazovky aj prepínače v pauze majú popisy a stavy pre VoiceOver. Hudbu, zvuk a haptiku vieš vypnúť samostatne. Samotná noc sa hrá zrakom, takže ak by ti niečo konkrétne pomohlo, napíš mi a pozriem sa na to.",

    "privacy.title": "Zásady ochrany súkromia",
    "privacy.intro":
      "Reaper nezbiera žiadne osobné údaje. Nie je čo zakladať, žiadna analytika, žiadna reklama a žiadne cudzie SDK ti nekuká cez rameno. Táto stránka presne hovorí, čo to znamená.",
    "privacy.updated": "Naposledy upravené 18. augusta 2026",
    "privacy.collect.title": "Čo Reaper zbiera",
    "privacy.collect.text":
      "Nič. Aplikácia neuvádza žiadne zbierané typy údajov v hlásení App Privacy ani v manifeste súkromia a nesleduje ťa naprieč aplikáciami či webmi iných spoločností. V zostave nie je reklamný identifikátor, odtlačok zariadenia ani žiadne analytické alebo chybové SDK.",
    "privacy.device.title": "Čo zostáva v tvojom zariadení",
    "privacy.device.text":
      "Reaper ukladá stav hry lokálne, aby si mohol telefón kedykoľvek odložiť. Tento lokálny záznam obsahuje:",
    "privacy.device.night": "Tvoju aktuálnu noc, srdcia a najhlbšiu dosiahnutú noc.",
    "privacy.device.souls": "Celkový počet zobratých duší a počet milosrdných nocí.",
    "privacy.device.skin": "Vybraný plášť a to, či si už videl tutoriál.",
    "privacy.device.settings": "Prepínače hudby, zvuku a haptiky.",
    "privacy.device.note":
      "Ukladá sa to do vlastného úložiska aplikácie v tvojom zariadení. Nikdy ho neopustí, ja to nedokážem prečítať a zmazaním aplikácie sa to vymaže.",
    "privacy.gc.title": "Game Center",
    "privacy.gc.text":
      "Ak sa prihlásiš do Game Center, Reaper posiela Apple dve veci: tvoju najhlbšiu dokončenú noc ako skóre do rebríčka a odomknuté úspechy. Tieto údaje spracúva Apple podľa svojich zásad ochrany súkromia a viažu sa na tvoj účet Apple, nie na čokoľvek u mňa. Reaper nikdy nečíta tvoj zoznam priateľov, profil ani kontakty.",
    "privacy.gc.optional":
      "Game Center je úplne dobrovoľné. Odmietni prihlásenie alebo zostaň odhlásený a hra funguje ďalej s lokálnymi rekordmi a už sa nepýta.",
    "privacy.network.title": "Používanie siete",
    "privacy.network.text":
      "Hra sama neposiela žiadne sieťové požiadavky. Nemá servery, backend ani vzdialenú konfiguráciu. Jediná možná sieťová komunikácia je synchronizácia Game Center od Apple, a to len keď si prihlásený.",
    "privacy.children.title": "Deti",
    "privacy.children.text":
      "Keďže Reaper nič nezbiera, nie je čo odovzdať v žiadnom veku. Hra obsahuje temné motívy a fantazijné pixelové násilie a na App Store má tomu zodpovedajúce vekové hodnotenie. Rodičia, ktorí chcú odstrániť online prvok, môžu jednoducho nechať Game Center odhlásené.",
    "privacy.purchases.title": "Nákupy",
    "privacy.purchases.text":
      "Reaper vychádza so všetkými plášťami odomknutými a bez nákupov v aplikácii. Ak v budúcej aktualizácii pribudnú platené plášte, platbu spracuje Apple. Nikdy nevidím údaje o karte, fakturačnú adresu ani tvoje meno.",
    "privacy.rights.title": "Tvoje práva",
    "privacy.rights.text":
      "V mojich rukách nie sú žiadne tvoje osobné údaje, ku ktorým by sa dalo pristúpiť, opraviť ich, vyviezť alebo zmazať, takže nie je o čo žiadať. Ak chceš vymazať všetko, čo hra uložila lokálne, zmaž aplikáciu. Úspechy a skóre v Game Center odstrániš cez nastavenia Game Center v zariadení alebo kontaktovaním Apple.",
    "privacy.website.title": "Táto stránka",
    "privacy.website.text":
      "Táto stránka je sada statických súborov. Nebeží na nej žiadna analytika, nenastavuje cookies a nenačítava písma, skripty ani obrázky od nikoho iného. Voľba jazyka sa ukladá do lokálneho úložiska tvojho prehliadača na tvojom počítači a nikam sa neposiela.",
    "privacy.changes.title": "Zmeny",
    "privacy.changes.text":
      "Ak niektorá budúca verzia hry zmení to, s čím pracuje, táto stránka sa upraví skôr, než taká verzia vyjde, a dátum hore sa zmení spolu s ňou.",
    "privacy.contact.title": "Kontakt",
    "privacy.contact.text":
      'Otázky k týmto zásadám choď priamo vývojárovi na <a href="mailto:pcesnek290@gmail.com?subject=Reaper%20Privacy">pcesnek290@gmail.com</a>.',

    "lost.code": "Chyba 404",
    "lost.title": "Táto na zozname nikdy nebola.",
    "lost.text":
      "Čokoľvek si hľadal, tu to nie je, a nič iné tiež nie. Je to poriadny kus za okrajom svetla.",
    "lost.home": "Späť do svetla",
  },

  cs: {
    "meta.home.title": "Reaper | Pixelová hororová hra pro iPhone a iPad",
    "meta.home.description":
      "Reaper je pixelová hororová hra pro iPhone a iPad. Jsi Smrt s kvótou: před úsvitem vezmi jen označené duše, protože každá živá duše tě stojí srdce.",
    "meta.support.title": "Podpora Reaper | Srdce, Game Center a postup",
    "meta.support.description":
      "Podpora pro hru Reaper na iPhone a iPad. Jak fungují srdce a pravidlo milosti, Game Center, kde se ukládá postup, zvuk a haptika, a jak se spojit s vývojářem.",
    "meta.privacy.title": "Zásady ochrany soukromí hry Reaper | Nic se nesbírá",
    "meta.privacy.description":
      "Reaper nesbírá nic. Žádný účet, žádná analytika, žádná reklama, žádné sledování a žádná cizí SDK. Tvůj postup zůstává v zařízení.",
    "meta.notfound.title": "Na seznamu to nebylo | Reaper",
    "meta.notfound.description":
      "Tato stránka nebyla nalezena. Vrať se na domovskou stránku hry Reaper nebo otevři podporu.",

    "a11y.skip": "Přeskočit na obsah",
    "nav.home": "Domů",
    "nav.rules": "Pravidla",
    "nav.screens": "Záběry",
    "nav.support": "Podpora",
    "nav.privacy": "Soukromí",
    "footer.contact": "Kontakt",
    "footer.legal": "Reaper, nezávislá hra od Patrika Cesneka",
    "cta.pending": "Brzy v App Store",
    "cta.rules": "Jak se hraje",

    "hero.eyebrow": "iPhone a iPad",
    "hero.text":
      "Smrt s kvótou. Tvoje světlo je malé, noc není, a vzít špatnou duši tě stojí srdce.",
    "hero.torch": "Pohybem rozsviť tmu",

    "rules.title": "Seznam je krátký. Dodržet ho není.",
    "rules.lede":
      "Proplouváš hřbitovem, který sotva vidíš, s páčkou v rohu obrazovky a kvótou nad hlavou. Všechno podstatné se děje uvnitř tvého světla.",
    "rules.marked.title": "Označení",
    "rules.marked.text":
      "Tvorové s lebkou mají dnes v noci přijít na řadu. Klepni na takového uvnitř svého světla a kosa si vezme jeho duši.",
    "rules.living.title": "Živí",
    "rules.living.text":
      "Neoznačení ti nepatří. Vzít takového se sice počítá do kvóty, ale stojí tě to srdce. Vezmi méně než tři a srdce se ti za úsvitu vrátí.",
    "rules.dawn.title": "Před úsvitem",
    "rules.dawn.text":
      "Splň kvótu dřív, než doběhne čas, jinak duše uniknou a noc je ztracená. Máš jen pět srdcí.",
    "rules.shot.caption": "Hra tě pravidlo naučí dřív, než tě podle něj soudí",

    "nights.title": "Každá noc chce víc.",
    "nights.souls": "Duší",
    "nights.n1.label": "Noc 1",
    "nights.n1.text": "Naráz můžou být venku tři označené duše. Je prostor zaváhat.",
    "nights.n5.label": "Noc 5",
    "nights.n5.text": "Odteď už jen dvě naráz a všechno se hýbe o pětinu rychleji.",
    "nights.n10.label": "Noc 10",
    "nights.n10.text": "Ve tmě se tlačí dvacet šest tvorů a jen hrstka je tvoje.",
    "nights.n15.label": "Noc 15",
    "nights.n15.text": "Čas přestane růst na pěti minutách. Kvóta ne.",
    "nights.note":
      "Každá noc je postavená tak, aby se kvóta dala splnit bez jediného živého tvora. Jen rezerva se pořád ztenčuje. A nic ti neuteče: tvorové mají rychlost omezenou na 85 procent té tvojí.",

    "screens.title": "Podívej se do tmy.",
    "screens.briefing": "Smlouva na tuhle noc",
    "screens.gameplay": "Malé světlo ve velké noci",
    "screens.tutorial": "Čtyři karty a pak už jsi na to sám",
    "screens.profile": "Rekordy, pláště a Game Center",
    "screens.paused": "Pauza kdykoli, noc počká",

    "cloaks.eyebrow": "Obleč si něco jiného",
    "cloaks.title": "Pět plášťů. Ani jeden ti nepomůže.",
    "cloaks.text":
      "Barevné varianty jsou výměnou palety na téže pixelové kresbě, takže se mění plášť, ne tvoje šance. Všech pět je zdarma a vybraný zůstává na každou noc.",
    "cloaks.classic": "Klasický",
    "cloaks.blood": "Krvavý",
    "cloaks.soul": "Duše",
    "cloaks.shadow": "Stín",
    "cloaks.gold": "Zlatý",
    "cloaks.note": "Prémiové pláště přijdou v příští aktualizaci.",

    "ach.title": "Devět způsobů, jak se zapsat.",
    "ach.lede":
      "Úspěchy a žebříček nejhlubší noci běží přes Game Center. Přihlas se a synchronizují se. Zůstaň odhlášený a všechno se stejně zapíše v zařízení.",
    "ach.first.title": "První žeň",
    "ach.first.text": "Vezmi svou první označenou duši.",
    "ach.n1.title": "Učeň smrti",
    "ach.n1.text": "Dokonči noc 1.",
    "ach.n5.title": "Pět nocí hluboko",
    "ach.n5.text": "Dokonči noc 5.",
    "ach.n10.title": "Dekáda temnoty",
    "ach.n10.text": "Dokonči noc 10.",
    "ach.merciful.title": "Milosrdný",
    "ach.merciful.text": "Dokonči noc, aniž by ses dotkl živých.",
    "ach.bargain.title": "Temná dohoda",
    "ach.bargain.text": "Dokonči noc poté, co jsi vzal tři nebo více živých duší.",
    "ach.thread.title": "O vlásek",
    "ach.thread.text": "Dokonči noc s jediným zbývajícím srdcem.",
    "ach.reaped.title": "Smrt, kterou vzali",
    "ach.reaped.text": "Zemři. I Smrt má kvóty.",
    "ach.hundred.title": "Sto duší",
    "ach.hundred.text":
      "Nasbírej sto duší za celou dobu. Počítadlo se nikdy nevynuluje, ať ti to trvá kolik nocí chce.",

    "facts.title": "Žádný účet. Žádné reklamy. Žádné sledování.",
    "facts.offline.title": "Hraje se offline",
    "facts.offline.text": "Každá noc běží v zařízení. Režim letadlo nic nezmění.",
    "facts.account.title": "Žádná registrace",
    "facts.account.text":
      "Neexistuje účet Reaper, žádné pole na e-mail ani heslo, které by šlo zapomenout.",
    "facts.privacy.title": "Nic se nesbírá",
    "facts.privacy.text":
      "Žádná analytika, žádné reklamy, žádná cizí SDK. Tvůj postup zůstává v zařízení.",
    "facts.gamecenter.title": "Game Center dobrovolně",
    "facts.gamecenter.text":
      "Odmítni ho a hra se už nikdy nezeptá. Lokální rekordy fungují dál.",
    "facts.universal.title": "iPhone a iPad",
    "facts.universal.text":
      "Jedna univerzální aplikace, na šířku, stavěná na dotyk s páčkou pod palcem.",
    "facts.requirements.title": "iOS 18 nebo novější",
    "facts.requirements.text":
      "Hudbu, zvuk i haptiku vypneš samostatně na obrazovce pauzy.",

    "closing.title": "Úsvit přijde tak jako tak.",
    "closing.text":
      "Reaper je hotový a míří na posouzení. Podpora je otevřená už teď, pokud ji potřebuješ.",

    "support.title": "Podpora",
    "support.intro":
      "Všechno níže vychází z toho, jak se hra opravdu chová. Pokud tu tvoje otázka není, napiš mi přímo a dostaneš skutečnou odpověď.",
    "support.contact.title": "Napiš vývojáři",
    "support.contact.text":
      "Reaper dělá jeden člověk. Hlášení chyb, dotazy k vrácení peněz i nápady chodí do stejné schránky.",
    "support.contact.note":
      "Uveď zařízení, verzi iOS a noc, na které jsi byl. Většina odpovědí odchází do dvou pracovních dnů.",
    "support.contact.button": "Napsat podpoře",
    "support.playing.title": "Hraní",
    "support.progress.title": "Postup a Game Center",
    "support.device.title": "Zvuk, haptika a zařízení",
    "support.report.title": "Nahlášení problému",
    "support.report.text": "Dobré hlášení opravu výrazně zrychlí. Pokud můžeš, pošli:",
    "support.report.device": "Zařízení a verzi iOS, například iPhone 15 Pro s iOS 18.4.",
    "support.report.night": "Číslo noci a co bylo na obrazovce, když se to pokazilo.",
    "support.report.steps": "Co jsi dělal těsně předtím, abych to dokázal zopakovat.",
    "support.report.shot": "Snímek nebo záznam obrazovky, pokud je problém vidět.",
    "support.report.refund":
      'Vrácení peněz a platby řeší Apple, ne já. Použij <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a> a přihlas se účtem Apple, kterým byl nákup proveden.',

    "faq.play.q": "Jak se to hraje?",
    "faq.play.a":
      "Pohybuj se páčkou v dolním rohu. Tvorové s lebkou jsou označení a mají dnes přijít na řadu. Klepni na označeného tvora uvnitř svého kruhu světla, kosa se rozmáchne a vezme jeho duši. Splň kvótu dřív, než doběhne čas, a noc je tvoje.",
    "faq.hearts.q": "Proč ztrácím srdce?",
    "faq.hearts.a":
      "Vzal jsi tvora, který nebyl označený. Neoznačení se sice počítají do kvóty, ale každý stojí jedno srdce. Každý pokus začínáš s pěti.",
    "faq.mercy.q": "Dají se srdce získat zpět?",
    "faq.mercy.a":
      "Ano. Dokonči noc s méně než třemi vzatými živými tvory a za úsvitu se vrátí všech pět srdcí. To je pravidlo milosti a je to jediný způsob léčení.",
    "faq.gameover.q": "Co se stane, když mi dojdou srdce?",
    "faq.gameover.a":
      "Pokus končí. Volba Rise Again tě vrátí na noc 1 s pěti srdci. Celkový počet duší, milosrdné noci, nejhlubší noc i úspěchy ti zůstanou.",
    "faq.timeout.q": "Došel mi čas. Přijdu o něco?",
    "faq.timeout.a":
      "Ne. Try Again spustí tutéž noc znovu se srdci, se kterými jsi ji začal, takže srdce ztracená v neúspěšném pokusu se vrátí.",
    "faq.tap.q": "Moje klepnutí nezabírají.",
    "faq.tap.a":
      "Zásah zastaví dvě věci. Na tvora mimo kruh světla nedosáhneš, takže se nejdřív přibliž. Klepnutí přímo na kosce jsou ignorována záměrně, aby kosa nikdy nesekla do svého nositele, když kolem proběhne tvor. Miř kousek stranou od vlastní postavy.",
    "faq.escape.q": "Může mi označená duše utéct?",
    "faq.escape.a":
      "Ne. Rychlost tvorů je na každé obtížnosti omezená na 85 procent té tvojí, takže označeného vždycky dohoníš. Co dochází, je čas.",
    "faq.tutorial.q": "Jde si tutoriál pustit znovu?",
    "faq.tutorial.a":
      "Ano. Otevři Profile z úvodní obrazovky noci a klepni na Tutorial. Čtyři karty si můžeš přečíst kolikrát chceš.",
    "faq.gc.q": "Musím používat Game Center?",
    "faq.gc.a":
      "Ne. Když přihlášení odmítneš nebo zůstaneš odhlášený, Reaper se už nikdy nezeptá a rekordy si drží v zařízení. Po přihlášení se žebříček nejhlubší noci a všech devět úspěchů synchronizuje s tvým účtem Apple.",
    "faq.storage.q": "Kde se ukládá můj postup?",
    "faq.storage.a":
      "Jen ve tvém zařízení. Neexistuje účet Reaper ani můj server, který by cokoli držel. Úspěchy a skóre v Game Center patří k tvému účtu Apple podle podmínek Apple.",
    "faq.sync.q": "Přenáší se postup mezi iPhonem a iPadem?",
    "faq.sync.a":
      "Lokální rekordy ne. Každé zařízení si drží vlastní srdce, vybraný plášť i celkové počty. Úspěchy v Game Center a skóre nejhlubší noci ale tvůj účet Apple přenáší mezi zařízeními.",
    "faq.reset.q": "Jak smažu postup a začnu načisto?",
    "faq.reset.a":
      "Smaž Reaper a nainstaluj ho znovu. Tím se smažou všechny lokální záznamy včetně příznaku tutoriálu, takže hra začne jako první den. Úspěchy už nahlášené do Game Center zůstávají u tvého účtu Apple a mažou se přímo v Game Center.",
    "faq.achievements.q": "Úspěch se neodemkl.",
    "faq.achievements.a":
      "Úspěchy se nejdřív zapíšou lokálně a teprve pak nahlásí do Game Center, takže úspěch získaný offline se objeví, až budeš zpátky online a přihlášený. Pokud i potom chybí, napiš mi jeho název a noc, na které jsi byl.",
    "faq.audio.q": "Jak vypnu hudbu nebo zvuk?",
    "faq.audio.a":
      "Klepni na ozubené kolečko v horním rohu během noci nebo na úvodní obrazovce. Hudba, zvuk i haptika mají vlastní přepínač a volba se pamatuje.",
    "faq.haptics.q": "Proč necítím haptiku?",
    "faq.haptics.a":
      "Haptika potřebuje iPhone s Taptic Engine. iPad haptický modul nemá, takže ji hra tiše přeskočí, místo aby si stěžovala. Zkontroluj i obrazovku pauzy, jestli přepínač není prostě vypnutý.",
    "faq.offline.q": "Potřebuje Reaper internet?",
    "faq.offline.a":
      "Ne. Každá noc běží celá v zařízení. Připojení potřebuje jen synchronizace Game Center, která je dobrovolná.",
    "faq.requirements.q": "Co potřebuju, aby to běželo?",
    "faq.requirements.a":
      "iPhone nebo iPad s iOS 18 nebo novějším. Reaper je jedna univerzální aplikace, hraje se na šířku a využívá celou obrazovku.",
    "faq.language.q": "V jakých jazycích hra mluví?",
    "faq.language.a":
      "Samotná hra je v angličtině. Tato stránka je dostupná v angličtině, slovenštině a češtině.",
    "faq.a11y.q": "Je tam něco pro přístupnost?",
    "faq.a11y.a":
      "Menu, překryvné obrazovky i přepínače v pauze mají popisy a stavy pro VoiceOver. Hudbu, zvuk a haptiku lze vypnout samostatně. Samotná noc se hraje zrakem, takže pokud by ti něco konkrétního pomohlo, napiš mi a podívám se na to.",

    "privacy.title": "Zásady ochrany soukromí",
    "privacy.intro":
      "Reaper nesbírá žádné osobní údaje. Není co zakládat, žádná analytika, žádná reklama a žádná cizí SDK ti nekouká přes rameno. Tato stránka přesně říká, co to znamená.",
    "privacy.updated": "Naposledy upraveno 18. srpna 2026",
    "privacy.collect.title": "Co Reaper sbírá",
    "privacy.collect.text":
      "Nic. Aplikace neuvádí žádné sbírané typy údajů ve zprávě App Privacy ani v manifestu soukromí a nesleduje tě napříč aplikacemi či weby jiných společností. V sestavení není reklamní identifikátor, otisk zařízení ani žádná analytická nebo chybová SDK.",
    "privacy.device.title": "Co zůstává ve tvém zařízení",
    "privacy.device.text":
      "Reaper ukládá stav hry lokálně, abys mohl telefon kdykoli odložit. Tento lokální záznam obsahuje:",
    "privacy.device.night": "Tvou aktuální noc, srdce a nejhlubší dosaženou noc.",
    "privacy.device.souls": "Celkový počet vzatých duší a počet milosrdných nocí.",
    "privacy.device.skin": "Vybraný plášť a to, jestli jsi už viděl tutoriál.",
    "privacy.device.settings": "Přepínače hudby, zvuku a haptiky.",
    "privacy.device.note":
      "Ukládá se to do vlastního úložiště aplikace ve tvém zařízení. Nikdy ho neopustí, já to nedokážu přečíst a smazáním aplikace se to smaže.",
    "privacy.gc.title": "Game Center",
    "privacy.gc.text":
      "Když se přihlásíš do Game Center, Reaper posílá Applu dvě věci: tvou nejhlubší dokončenou noc jako skóre do žebříčku a odemčené úspěchy. Tyto údaje zpracovává Apple podle svých zásad ochrany soukromí a váží se na tvůj účet Apple, ne na cokoli u mě. Reaper nikdy nečte tvůj seznam přátel, profil ani kontakty.",
    "privacy.gc.optional":
      "Game Center je zcela dobrovolné. Odmítni přihlášení nebo zůstaň odhlášený a hra funguje dál s lokálními rekordy a už se neptá.",
    "privacy.network.title": "Používání sítě",
    "privacy.network.text":
      "Hra sama neposílá žádné síťové požadavky. Nemá servery, backend ani vzdálenou konfiguraci. Jediná možná síťová komunikace je synchronizace Game Center od Applu, a to jen když jsi přihlášený.",
    "privacy.children.title": "Děti",
    "privacy.children.text":
      "Protože Reaper nic nesbírá, není co odevzdat v žádném věku. Hra obsahuje temné motivy a fantazijní pixelové násilí a na App Storu má tomu odpovídající věkové hodnocení. Rodiče, kteří chtějí odstranit online prvek, můžou jednoduše nechat Game Center odhlášené.",
    "privacy.purchases.title": "Nákupy",
    "privacy.purchases.text":
      "Reaper vychází se všemi plášti odemčenými a bez nákupů v aplikaci. Pokud v příští aktualizaci přibudou placené pláště, platbu zpracuje Apple. Nikdy nevidím údaje o kartě, fakturační adresu ani tvoje jméno.",
    "privacy.rights.title": "Tvoje práva",
    "privacy.rights.text":
      "V mých rukou nejsou žádné tvoje osobní údaje, ke kterým by šlo přistoupit, opravit je, vyvézt nebo smazat, takže není o co žádat. Pokud chceš smazat všechno, co hra uložila lokálně, smaž aplikaci. Úspěchy a skóre v Game Center odstraníš přes nastavení Game Center v zařízení nebo kontaktováním Applu.",
    "privacy.website.title": "Tato stránka",
    "privacy.website.text":
      "Tato stránka je sada statických souborů. Neběží na ní žádná analytika, nenastavuje cookies a nenačítá písma, skripty ani obrázky od nikoho jiného. Volba jazyka se ukládá do lokálního úložiště tvého prohlížeče na tvém počítači a nikam se neposílá.",
    "privacy.changes.title": "Změny",
    "privacy.changes.text":
      "Pokud některá budoucí verze hry změní to, s čím pracuje, tato stránka se upraví dřív, než taková verze vyjde, a datum nahoře se změní s ní.",
    "privacy.contact.title": "Kontakt",
    "privacy.contact.text":
      'Dotazy k těmto zásadám jdou přímo vývojáři na <a href="mailto:pcesnek290@gmail.com?subject=Reaper%20Privacy">pcesnek290@gmail.com</a>.',

    "lost.code": "Chyba 404",
    "lost.title": "Tahle na seznamu nikdy nebyla.",
    "lost.text":
      "Cokoli jsi hledal, tady to není, a nic jiného taky ne. Je to pořádný kus za okrajem světla.",
    "lost.home": "Zpátky do světla",
  },
};

/* -----------------------------------------------------------------------
   Language
   -------------------------------------------------------------------- */

const STORAGE_KEY = "reaper-language";
const supportedLanguages = Object.keys(translations);
const pageKey = document.body.dataset.page || "home";

function readSavedLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

function pickInitialLanguage() {
  const saved = readSavedLanguage();
  if (supportedLanguages.includes(saved)) return saved;
  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  return supportedLanguages.includes(browser) ? browser : "en";
}

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  // Strings that carry a link. The dictionary is a local constant, never
  // user input, so assigning markup here is safe.
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = dictionary[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const title = dictionary[`meta.${pageKey}.title`];
  const description = dictionary[`meta.${pageKey}.description`];
  if (title) document.title = title;
  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag && description) descriptionTag.setAttribute("content", description);
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute("content", language);

  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch (error) {
    /* private browsing: the choice simply does not persist */
  }
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage(pickInitialLanguage());

/* -----------------------------------------------------------------------
   The torch. Pointer position drives two custom properties that a radial
   mask reads, so the hero frame is only lit where the light falls. This is
   the game's core mechanic, stated before any copy does.
   -------------------------------------------------------------------- */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover)");
const torch = document.getElementById("torch");

if (torch && finePointer.matches && !reduceMotion.matches) {
  let frame = null;
  let next = null;

  const apply = () => {
    frame = null;
    if (!next) return;
    torch.style.setProperty("--tx", `${next.x}%`);
    torch.style.setProperty("--ty", `${next.y}%`);
  };

  const track = (event) => {
    const box = torch.getBoundingClientRect();
    next = {
      x: ((event.clientX - box.left) / box.width) * 100,
      y: ((event.clientY - box.top) / box.height) * 100,
    };
    if (frame === null) frame = requestAnimationFrame(apply);
  };

  torch.addEventListener("pointermove", track);
  torch.addEventListener("pointerleave", () => {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    torch.style.setProperty("--tx", "50%");
    torch.style.setProperty("--ty", "46%");
  });
}

/* -----------------------------------------------------------------------
   Scroll reveals. IntersectionObserver only, never a scroll listener.
   -------------------------------------------------------------------- */

const revealables = document.querySelectorAll(".reveal");

if (revealables.length) {
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    revealables.forEach((element) => element.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    revealables.forEach((element, index) => {
      element.style.transitionDelay = `${(index % 4) * 70}ms`;
      observer.observe(element);
    });
  }
}
