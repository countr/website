import {
  DiscordInlineCode as Code,
  DiscordCommand as Command,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

# Math equations

Using math equations to count can be a fun way to challenge yourself and others. Give it a try and see how you do!

<Discord className="bg-gray-100 p-4 rounded-lg shadow-md">
  <Message className="text-blue-500">27*3+14</Message>
  <!-- mdx fails without this space?? -->
  <Message className="text-blue-500">16*6</Message>
  <Message className="text-blue-500">81+16</Message>
  <!-- mdx fails without this space?? -->
  <Message className="text-blue-500">7*7*2</Message>
  <Message profile="countr" ephemeral className="bg-yellow-100 p-2 rounded-md">
    <Command slot="reply" command="/count" className="text-green-500" />
    {"📊 Current count for "}
    <Mention type="channel" className="text-red-500">counting</Mention>
    {" is "}
    <Code className="bg-gray-200 p-1 rounded">98</Code>
    {", next up is "}
    <Code className="bg-gray-200 p-1 rounded">99</Code>
    {"."}
  </Message>
  <Message className="text-blue-500">11*9</Message>
  <Message className="text-blue-500">100</Message>
</Discord>

<br/>

:::note
The `/count` command will not give you a math equation back, it will only give you the current count in decimal form (like a normal number).
:::
