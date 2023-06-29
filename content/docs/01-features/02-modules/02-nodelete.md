# Nodelete module

The nodelete module allows you to send anything in the chat.

```mdx-code-block
import {
  DiscordMessages as Discord,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

<Discord>
  <Message>123</Message>
  <Message>hello world!</Message>
</Discord>
```


## Purpose

The purpose is to allow for normal messages in chat. Combined with the ["Message reaction" flow action](../01-flows.md), you can easily distinguish between correct counts and failed counts/other messages.

```mdx-code-block
import {
  DiscordReactions as Reactions,
  DiscordReaction as Reaction,
} from "@skyra/discord-components-react";

<Discord>
  <Message>
    123
    <Reactions slot="reactions">
      <Reaction name="✅" emoji="/reactions/white_check_mark.svg" />
    </Reactions>
  </Message>
  <Message>
    hello world!
    <Reactions slot="reactions">
      <Reaction name="❌" emoji="/reactions/x.svg" />
    </Reactions>
  </Message>
</Discord>
```
