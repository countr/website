import {
  DiscordInlineCode as Code,
  DiscordCommand as Command,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

# Roman numerals

The Roman numeral system uses the letters I, V, X, L, C, D, and M to represent numbers. It's a system that has been used for centuries and is still used today in some contexts.

Traditionally, the highest number you can represent using Roman numerals is 3,999. However, the bot accepts higher values by just adding more M's.

<Discord className="bg-gray-100 p-4 rounded-lg shadow-md">
  <Message className="text-blue-500">CDXXIII</Message>
  <Message className="text-blue-500">CDXXIV</Message>
  <Message className="text-blue-500">CDXXV</Message>
  <Message className="text-blue-500">CDXXVI</Message>
  <Message profile="countr" ephemeral className="bg-yellow-100 p-2 rounded-md">
    <Command slot="reply" command="/count" className="text-green-500" />
    {"📊 Current count for "}
    <Mention type="channel" className="text-red-500">counting</Mention>
    {" is "}
    <Code className="bg-gray-200 p-1 rounded">CDXXVI</Code>
    {" (decimal: "}
    <Code className="bg-gray-200 p-1 rounded">426</Code>
    {"), next up is "}
    <Code className="bg-gray-200 p-1 rounded">CDXXVII</Code>
    {"."}
  </Message>
  <Message className="text-blue-500">CDXXVII</Message>
</Discord>
