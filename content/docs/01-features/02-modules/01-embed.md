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
