import {
  DiscordMessages as Discord,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

# Bypass Message Deletion

If you want to make an announcement in the counting channel without actually counting something, you can set up a bypassable role. Anyone with a bypassable role can bypass message deletion by starting their message with `!`. Once your message is sent, feel free to edit the message and remove the exclamation mark.

<Discord className="bg-gray-100 p-4 rounded-lg shadow-md">
  <Message>999</Message>
  <Message>1000</Message>
  <Message profile="promise">! We hit a thousand counts!</Message>
</Discord>

## How to set up {#how}

You can add a bypassable role with the `/bypassroles add` command. You can list all your bypassable roles with the `/bypassroles list` command. You can also remove a bypassable role with the `/bypassroles remove` command.
