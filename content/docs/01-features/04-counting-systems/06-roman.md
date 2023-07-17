# Roman numerals

The Roman numeral system uses the letters I, V, X, L, C, D, and M to represent numbers. It's a system that has been used for centuries and is still used today in some contexts.

Traditionally, the highest number you can represent using Roman numerals is 3,999. However, the bot accepts higher values by just adding more M's.

```mdx-code-block
import {
  DiscordInlineCode as Code,
  DiscordCommand as Command,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

<Discord>
  <Message>CDXXIII</Message>
  <Message>CDXXIV</Message>
  <Message>CDXXV</Message>
  <Message>CDXXVI</Message>
  <Message profile="countr" ephemeral>
    <Command slot="reply" command="/count" />
    {"📊 Current count for "}
    <Mention type="channel">counting</Mention>
    {" is "}
    <Code>CDXXVI</Code>
    {", next up is "}
    <Code>CDXXVII</Code>
    {"."}
  </Message>
  <Message>CDXXVII</Message>
</Discord>
```
