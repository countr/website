# Bypass message deletion

If you want to announce something in the channel without actually counting something then you can set up a bypassable role. Anyone with a bypassable role can bypass message deletion by starting their message with `!`.

You can later edit the message and remove the exclamation mark from the message.

```mdx-code-block
import {
  DiscordMessages as Discord,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

<Discord>
  <Message>999</Message>
  <Message>1000</Message>
  <Message profile="promise">! We hit a thousand counts!</Message>
</Discord>
```

## How to set up {#how}

You can add a bypassable role with the `/bypassroles add` command. You can list all your bypassable roles with the `/bypassroles list` command. You can also remove a bypassable role with the `/bypassroles remove` command.