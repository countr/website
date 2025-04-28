import {
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

# Webhook module

The webhook module allows you to repost all counts in the counting channel through a webhook, impersonating the user that sent it. This can be useful if you want to prevent members from editing or deleting their messages afterwards.

<Discord className="bg-gray-100 p-4 rounded-lg shadow-md">
  <Message profile="promise" bot>1337</Message>
</Discord>

<br/>

:::note
Keep in mind that when you use the webhook module, the message will have a "BOT" tag since it's posted through a webhook. This is a limitation of how webhooks work and cannot be disabled.
:::
