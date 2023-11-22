import {
  DiscordInlineCode as Code,
  DiscordCommand as Command,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

# Hexadecimal

Hexadecimal is a base-16 counting system used in computing. It's often used to represent colors, as color codes are usually in hexadecimal format, like Countr's theme color [#BD4632](https://google.com/search?q=%23BD4632).

<Discord>
  <Message>539</Message>
  <Message>53a</Message>
  <Message>53b</Message>
  <Message>53c</Message>
  <Message profile="countr" ephemeral>
    <Command slot="reply" command="/count" />
    {"📊 Current count for "}
    <Mention type="channel">counting</Mention>
    {" is "}
    <Code>53c</Code>
    {" (decimal: "}
    <Code>1340</Code>
    {"), next up is "}
    <Code>53d</Code>
    {"."}
  </Message>
  <Message>53d</Message>
</Discord>
