import {
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

# Reposting module

The reposting module reposts all counts in the counting channel in a normal message.

<Discord className="bg-gray-100 p-4 rounded-lg shadow-md">
  <Message profile="countr">
    <Mention highlight className="text-blue-500 font-semibold">Promise</Mention>{": 933"}
  </Message>
</Discord>
