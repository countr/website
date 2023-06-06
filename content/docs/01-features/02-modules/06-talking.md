# Talking module

The talking module allows users to talk after their count.

```mdx-code-block
import {
  DiscordMessages as Discord,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

<Discord>
  <Message profile="promise">1000 wooo! let's gooooo</Message>
</Discord>
```

<br/>

:::note
If you want to filter out content, like disallow multiple lines or have a character limit then you can use [regex filters](../03-regex-filters.md).
:::