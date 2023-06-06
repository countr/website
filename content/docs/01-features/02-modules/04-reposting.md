# Reposting module

The reposting module reposts all counts in the counting channel in a normal message.

```mdx-code-block
import {
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

<Discord>
  <Message profile="countr">
    <Mention highlight>Promise</Mention>{": 933"}
  </Message>
</Discord>
```


## Purpose

The purpose is, like the [embed](01-embed.md#purpose) and the [webhook](06-webhook.md#purpose) module, to disallow the members to edit or delete their messages afterwards.