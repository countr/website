# Multiple counting channels

You can have up to 2 counting channels for free, and up to 5 counting channels with Premium. If you have more than one counting channel, some commands might require you to use the `/select`-command to select which counting channel you are referring to in the command.

Your selected counting channel is remembered for 24 hours, you will need to use the `/select`-command again after this time. You can optionally run the original command in the counting channel itself to avoid having to select it and/or override your already-selected counting channel. However, some commands are required to be ran outside of the counting channel, so you will therefore need to select it first.

Countr will tell you if it needs you to select one though, so don't worry too much about this.

```mdx-code-block
import {
  DiscordInlineCode as Code,
  DiscordCommand as Command,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

<Discord>
  <Message profile="countr" ephemeral>
    <Command slot="reply" command="/set count" profile="promise" />
    {"💥 You need a counting channel selected to run this command. Type "}
    <Code>/select</Code>
    {" to select a counting channel and then run this command again."}
  </Message>
  <Message profile="countr" ephemeral>
    <Command slot="reply" command="/select" profile="promise" />
    {"✅ You have selected "}
    <Mention type="channel">counting</Mention>
    {" as your counting channel."}
  </Message>
  <Message profile="countr">
    <Command slot="reply" command="/set count" profile="promise" />
    {"✅ The count of "}
    <Mention type="channel">counting</Mention>
    {" is now set to 123."}
  </Message>
</Discord>
```