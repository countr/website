import {
  DiscordEmbed as Embed,
  DiscordEmbedDescription as Description,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

# Embed module

The embed module reposts all counts in the counting channel in an embed.

<Discord>
  <Message profile="countr">
    <Embed slot="embeds" color="#36393f">
      <Description slot="description">
        <Mention>Promise</Mention>{": 2793"}
      </Description>
    </Embed>
  </Message>
</Discord>
