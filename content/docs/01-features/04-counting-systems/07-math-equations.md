import {
  DiscordInlineCode as Code,
  DiscordCommand as Command,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

# Math equations

Using math equations to count can be a fun way to challenge yourself and others. Give it a try and see how you do!

<Discord>
  <Message>27*3+14</Message>
  <!-- mdx fails without this space?? -->
  <Message>16*6</Message>
  <Message>81+16</Message>
  <!-- mdx fails without this space?? -->
  <Message>7*7*2</Message>
  <Message profile="countr" ephemeral>
    <Command slot="reply" command="/count" />
    {"📊 Current count for "}
    <Mention type="channel">counting</Mention>
    {" is "}
    <Code>98</Code>
    {", next up is "}
    <Code>99</Code>
    {"."}
  </Message>
  <Message>11*9</Message>
  <Message>100</Message>
</Discord>

<br/>

:::note
The `/count` command will not give you a math equation back, it will only give you the current count in decimal form (like a normal number).
:::
