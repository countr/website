import {
  DiscordInlineCode as Code,
  DiscordCommand as Command,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

# Binary

Binary is a base-2 counting system used by computers. In binary, each digit can only be 0 or 1, representing "off" or "on", respectively.

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
    {" (decimal: "}
    <Code>423</Code>
    {"), next up is "}
    <Code>110101000</Code>
    {"."}
  </Message>
  <Message>110101000</Message>
</Discord>
