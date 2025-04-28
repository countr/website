import {
  DiscordInlineCode as Code,
  DiscordCommand as Command,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

# Hexadecimal

Hexadecimal is a base-16 counting system used in computing. It's often used to represent colors, as color codes are usually in hexadecimal format, like Countr's theme color [#BD4632](https://google.com/search?q=%23BD4632).

<Discord className="bg-gray-100 p-4 rounded-lg shadow-md">
  <Message className="text-blue-500">539</Message>
  <Message className="text-blue-500">53a</Message>
  <Message className="text-blue-500">53b</Message>
  <Message className="text-blue-500">53c</Message>
  <Message profile="countr" ephemeral className="bg-yellow-100 p-2 rounded-md">
    <Command slot="reply" command="/count" className="text-green-500" />
    {"📊 Current count for "}
    <Mention type="channel" className="text-red-500">counting</Mention>
    {" is "}
    <Code className="bg-gray-200 p-1 rounded">53c</Code>
    {" (decimal: "}
    <Code className="bg-gray-200 p-1 rounded">1340</Code>
    {"), next up is "}
    <Code className="bg-gray-200 p-1 rounded">53d</Code>
    {"."}
  </Message>
  <Message className="text-blue-500">53d</Message>
</Discord>
