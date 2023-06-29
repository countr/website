# Recover module

The recover module deletes unprocessed messages from the counting channel whenever the bot is restarted.

## Example

### Before

```mdx-code-block
import {
  DiscordMessages as Discord,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

<Discord>
  <Message profile="promise">42</Message>
  <Message>43</Message>
  <Message profile="promise">bot is dead?</Message>
  <Message>time to flood chat</Message>
  <Message profile="promise">aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Message>
  <Message>ooooooooooooooo</Message>
</Discord>
```

### After

```mdx-code-block
<Discord>
  <Message profile="promise">42</Message>
  <Message>43</Message>
</Discord>
```

<br/>

:::note
You won't see any effect until the bot goes offline and then comes back online.
:::