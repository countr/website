import {
  DiscordInlineCode as Code,
  DiscordCommand as Command,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

# Binary

Binary is a base-2 counting system used by computers. In binary, each digit can only be 0 or 1, representing "off" or "on", respectively.

<Discord className="bg-gray-100 p-4 rounded-lg shadow-md">
  <Message className="text-blue-500">110100100</Message>
  <Message className="text-blue-500">110100101</Message>
  <Message className="text-blue-500">110100110</Message>
  <Message className="text-blue-500">110100111</Message>
  <Message profile="countr" ephemeral className="bg-yellow-100 p-2 rounded-md">
    <Command slot="reply" command="/count" className="text-green-500" />
    {"📊 Current count for "}
    <Mention type="channel" className="text-red-500">counting</Mention>
    {" is "}
    <Code className="bg-gray-200 p-1 rounded">110100111</Code>
    {" (decimal: "}
    <Code className="bg-gray-200 p-1 rounded">423</Code>
    {"), next up is "}
    <Code className="bg-gray-200 p-1 rounded">110101000</Code>
    {"."}
  </Message>
  <Message className="text-blue-500">110101000</Message>
</Discord>
