# Spam module

The spam module allows users to send multiple counts in a row, instead of having to wait for someone else to count before they can count again.

```mdx-code-block
import {
  DiscordMessages as Discord,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

<Discord>
  <Message profile="promise">432</Message>
  <Message profile="promise">433</Message>
  <Message profile="promise">434</Message>
  <Message profile="promise">435</Message>
</Discord>
```