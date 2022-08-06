---
authors: promise
tags: [changelog, maintenance]
---


# Countr Upgrade + Maintenance Announcement

We are doing a massive upgrade on Countr that we've planned for way over a year now. It's finally here. Global maintenance will take place on August 5th until August 7th, and will affect all services including Countr, Countr Premium, Website and Status page. We will most likely not use all three days for everything, and we hope to have the bot up on the 5th, however it might take some time to get everything up and running.

<!--truncate-->


## Visible changes

* **Slash commands:** We're finally moving over to slash commands! There will be some @mention commands, but these are mostly for the support team of the bot to assist you if you need help.
* **Stability improvements:** The uptime and stability are improved as it's now using the latest Discord.js version. It is now also a lot more scalable and easier to upgrade in the future.
    * *Technical explanation: our approach before was to spawn a worker thread per shard, but we used this way before it scaled to 120 shards. We will now spawn 12 clusters (same as 12 workers) with 10 shards each, and we can easily scale this in the future. It's also now dockerized, so if one cluster crashes then it will auto-restart, versus using pm2 that just restarts all 120 worker shards i.e,. a very nice improvement we should've done a long time ago.*
* **Multiple counting channels + Threads:** You can now make multiple counting channels for your server! You can also now use threads for your counting channels!
* **Support for other number systems:** Up until now you've only been able to count with the decimal counting system. We now have a lot more ways to count! [Check it out!](https://content-rewrite.countr.pages.dev/docs/category/counting-systems)
* **Flow creator/editor improvements:** The flow editor previously created a channel where you can create a flow. We've rewritten it using slash commands and interactions instead. [Take a sneak peek!](https://content-rewrite.countr.pages.dev/docs/features/flows)
* **Export and import flows:** You can also now export your flow configuration and import it in another server or share it with others!

[1]: https://en.wikipedia.org/wiki/Decimal
[2]: https://en.wikipedia.org/wiki/Hexadecimal
[3]: https://en.wikipedia.org/wiki/Binary
[4]: https://en.wikipedia.org/wiki/Base_36
[5]: https://en.wikipedia.org/wiki/Base_64
[6]: https://en.wikipedia.org/wiki/Roman_numerals


## Countr rewritten for the third time

I remember back in the day when Countr used discord.js version 11 and I was starting to make a rewrite to support version 12. The week after we launched our new version, the discord.js team launched version 13. That was quite frustrating to see.

So, we kept going with version 12 until it eventually was going to be unsupported soon. I started rewriting it in version 13, this time in TypeScript so it's much easier to maintain and also upgrade to future upgrades.

The code was almost done, but then - even more frustratingly than the last time - Discord.js launched a development version of version 14.

I decided to scrap the code and rewrite it again. I also had better ideas for the code anyways so I would either have to rewrite every file in the project, or just start from scratch again. I am quite happy with how this code turned out though, and they also released version 14 two weeks ago which we successfully upgraded to.


## Website overhaul

We've changed up our website and made it easier to maintain and also moved documentation here as well, instead of having two separate websites.

The community will also be able to contribute to the content of the website with tutorials or community posts where people can share their stories. More info on this in a future blog post :)

We're also going to make changes to the status page, and will open-source this code as well.


## Still in BETA

There will most likely be bugs and issues with the bot at first, please [join the support server](https://promise.solutions/discord) and let us know about them so we can fix them! Thank you :)
