# Binary

The base-2 system. This is how computers count. Simply "on" or "off" for a computer.

```mdx-code-block
import {
  DiscordInlineCode as Code,
  DiscordCommand as Command,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

<Discord>
  <Message>110100100</Message>
  <Message>110100101</Message>
  <Message>110100110</Message>
  <Message>110100111</Message>
  <Message profile="countr" ephemeral>
    <Command slot="reply" command="/count" />
    {"📊 Current count for "}
    <Mention type="channel">counting</Mention>
    {" is "}
    <Code>110100111</Code>
    {", next up is "}
    <Code>110101000</Code>
    {"."}
  </Message>
  <Message>110101000</Message>
</Discord>
```