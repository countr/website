import {
  DiscordMessages as Discord,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

# Talking module

The talking module allows users to add a message after their count.

<Discord className="bg-gray-100 p-4 rounded-lg shadow-md">
  <Message profile="promise">1000 wooo! let's gooooo</Message>
</Discord>

<br/>

:::note
If you want to filter out content, like disallow multiple lines or have a character limit, then you can use [regex filters](../03-regex-filters.md).
:::
