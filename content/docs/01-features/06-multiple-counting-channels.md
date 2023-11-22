import {
  DiscordInlineCode as Code,
  DiscordCommand as Command,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

# Multiple Counting Channels

With Countr, you can have up to 2 counting channels for free, and up to 5 counting channels with Premium. If you have more than one counting channel, some commands might require you to use the `/select` command to specify which counting channel you are referring to.

Your selected counting channel is remembered for 24 hours, after which you will need to use the `/select` command again. You can also run the original command in the counting channel itself to avoid having to select it and/or override your already-selected counting channel. However, some commands are required to be run outside of the counting channel, so you will need to select it first.

If Countr needs you to select a counting channel, it will let you know. Simply type `/select` to select a counting channel, and then run the command again.

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
