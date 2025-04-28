import {
  DiscordEmbed as Embed,
  DiscordEmbedDescription as Description,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

# Embed module

The embed module reposts all counts in the counting channel in an embed.

<Discord className="bg-gray-100 p-4 rounded-lg shadow-md">
  <Message profile="countr">
    <Embed slot="embeds" color="#36393f">
      <Description slot="description">
        <Mention className="text-blue-500 font-semibold">Promise</Mention>{": 2793"}
      </Description>
    </Embed>
  </Message>
</Discord>
