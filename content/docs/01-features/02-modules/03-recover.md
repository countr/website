import {
  DiscordMessages as Discord,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

# Recover module

The recover module deletes unprocessed messages from the counting channel whenever the bot is restarted.

## Example

### Before

<Discord>
  <Message profile="promise">42</Message>
  <Message>43</Message>
  <Message profile="promise">bot is dead?</Message>
  <Message>time to flood chat</Message>
  <Message profile="promise">aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Message>
  <Message>ooooooooooooooo</Message>
</Discord>


### After

<Discord>
  <Message profile="promise">42</Message>
  <Message>43</Message>
</Discord>

<br/>

:::note
Keep in mind that you won't see any effect until the bot goes offline and then comes back online.
:::
