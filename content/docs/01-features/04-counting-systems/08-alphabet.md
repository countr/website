# Alphabet

Count using the alphabet!

```mdx-code-block
import {
  DiscordInlineCode as Code,
  DiscordCommand as Command,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

<Discord>
  <Message>SV</Message>
  <Message>SW</Message>
  <Message>SX</Message>
  <Message>SY</Message>
  <Message profile="countr" ephemeral>
    <Command slot="reply" command="/count" />
    {"📊 Current count for "}
    <Mention type="channel">counting</Mention>
    {" is "}
    <Code>SY</Code>
    {" (decimal: "}
    <Code>519</Code>
    {"), next up is "}
    <Code>SZ</Code>
    {"."}
  </Message>
  <Message>SZ</Message>
  <Message>TA</Message>
</Discord>
```
