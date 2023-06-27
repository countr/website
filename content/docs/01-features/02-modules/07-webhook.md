# Webhook module

The webhook module reposts all counts in the counting channel through a webhook, impersonating the user that sent it.

```mdx-code-block
import {
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

<Discord>
  <Message profile="promise" bot>1337</Message>
</Discord>
```

<br/>

:::note
There will appear a BOT tag in the message since it's posted through a webhook. That's how webhook works, and there's nothing we can do to disable this.
:::


## Purpose

The purpose is, like the [embed](01-embed.md#purpose) and the [reposting](04-reposting.md#purpose) module, to disallow the members to edit or delete their messages afterwards.
