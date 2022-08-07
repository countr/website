# Embed module

The embed module reposts all counts in the counting channel in an embed.

```mdx-code-block
import {
  DiscordEmbed as Embed,
  DiscordEmbedDescription as Description,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

<Discord>
  <Message profile="countr">
    <Embed slot="embeds" color="#36393f">
      <Description slot="description">
        <Mention>Promise</Mention>{": 2793"}
      </Description>
    </Embed>
  </Message>
</Discord>
```


## Purpose

The purpose is, like the [reposting](03-reposting.md#purpose) and the [webhook](06-webhook.md#purpose) module, to disallow the members to edit or delete their messages afterwards.


## Feedback

This probably isn't the best module in the form of looks, but it's been requested before so we added it. If you have feedback on it then [join our support server](https://promise.solutions/support) and let us know!