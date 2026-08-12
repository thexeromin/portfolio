---
title: "Using RSS to take control of what I consume"
description: "Using RSS to take control of what I consume"
date: 2026-08-01
tags: ["RSS", "Self-host"]
---

Nowadays brain-rot, brain-fog and decision paralysis are becoming increasingly common due to the overwhelming amount of content available on the internet. On top of this, big companies investing heavily to keep us longer on their platform, So it's easy to get distracted now a days. That's why, since few days I have been researching about how I can choose what I consume. Then I found out about RSS.

So what is this RSS?
As per the wikipedia, it's a web feed that allows users and applications to access updates to websites. Basically it will monitor the websites for new content and show it in my feed aggregator.

So I started my quest of searching for a good RSS aggregator. Then I found [Inoreader](inoreader.com) and used it for few days. But the problem with Inoreader is that it's bloated. My needs are simple: I just want an simple aggregator to add/remove feed and view their content.

Then I did some research and discovered a few self-hosted options. Among them, [Miniflux](https://miniflux.app/) seemed good for me. I liked it but for me it is also bloated. I have a 5$ server and as per miniflux setup instruction, I don't wanna use docker. Also it uses `postgresql` which I think overkill for my use case. I know there is a way to install it without docker but I don't wanna go through all those things.

Then I searched again and found another self-hosted option called [yarr](https://github.com/nkanaev/yarr)(yet another RSS reader). I will try setting this one up on my server.

I am also considering building my own RSS feed reader using simple tech stack like `express.js`, `pug` and `sqlite`. For my use case, this might be the best option.
