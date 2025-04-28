import {
  DiscordInlineCode as Code,
  DiscordCommand as Command,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

# Alphabet

Count using the alphabet!

<Discord className="bg-gray-100 p-4 rounded-lg shadow-md">
  <Message className="text-blue-500">SV</Message>
  <Message className="text-blue-500">SW</Message>
  <Message className="text-blue-500">SX</Message>
  <Message className="text-blue-500">SY</Message>
  <Message profile="countr" ephemeral className="bg-yellow-100 p-2 rounded-md">
    <Command slot="reply" command="/count" className="text-green-500" />
    {"📊 Current count for "}
    <Mention type="channel" className="text-red-500">counting</Mention>
    {" is "}
    <Code className="bg-gray-200 p-1 rounded">SY</Code>
    {" (decimal: "}
    <Code className="bg-gray-200 p-1 rounded">519</Code>
    {"), next up is "}
    <Code className="bg-gray-200 p-1 rounded">SZ</Code>
    {"."}
  </Message>
  <Message className="text-blue-500">SZ</Message>
  <Message className="text-blue-500">TA</Message>
</Discord>
