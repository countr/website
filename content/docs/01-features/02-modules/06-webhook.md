---
description: Re-send counts as a webhook to prevent people from deleting/editing there counts.
---

import {
  DiscordInlineCode as Code,
  DiscordCommand as Command,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";


# Decimal

Re-send counts as a webhook to prevent people from deleting/editing there counts.

<Discord>
  <Message>103</Message>
  <Message profile="User" ephemeral>
    <Command slot="send" command="" />
    {"103"}
  </Message>
</Discord>
