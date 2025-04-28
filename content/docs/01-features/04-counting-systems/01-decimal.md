import {
  DiscordInlineCode as Code,
  DiscordCommand as Command,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

# Decimal

Decimal is the default counting system that us humans use on a daily basis. It's also known as the base-10 system.

<Discord className="bg-gray-100 p-4 rounded-lg shadow-md">
  <Message className="text-blue-500">399</Message>
  <Message className="text-blue-500">400</Message>
  <Message className="text-blue-500">401</Message>
  <Message className="text-blue-500">402</Message>
  <Message profile="countr" ephemeral className="bg-yellow-100 p-2 rounded-md">
    <Command slot="reply" command="/count" className="text-green-500" />
    {"📊 Current count for "}
    <Mention type="channel" className="text-red-500">counting</Mention>
    {" is "}
    <Code className="bg-gray-200 p-1 rounded">402</Code>
    {", next up is "}
    <Code className="bg-gray-200 p-1 rounded">403</Code>
    {"."}
  </Message>
  <Message className="text-blue-500">403</Message>
</Discord>
