# Troubleshooting

If you're experiencing issues with Countr, don't worry! We're here to help. Check out the common issues below to see if your problem is listed. If it's not, or if you're still having trouble, join our [support server](https://promise.solutions/discord) and we'll assist you further.


## "Remove everyone from a role" action is not working {#role-member-caching}

If you're having trouble with the "Remove everyone from a role" action, it may be due to a memory-saving feature we use. We don't cache everyone's user information, including their roles. We've tried to work around this issue by fetching everyone in the server that have a score in the counting channel, and then filter out who has the role and who doesn't, but this isn't always reliable. Unfortunately, there's currently no way of fetching everyone from a role or setting a role's members directly through the Discord API.

As a workaround, you can use the "Give unique role" flow action instead. This action will give a role to the user who triggered the flow, and remove the previous user that triggered the action. This will effectively remove everyone from the original role.


## My regex doesn't work as it should {#regex}

If your regex isn't working as expected, there are two possible reasons. First, your regex may not be correct or functioning the way you intended. You can test your regex with a [regex tester](01-features/03-regex-filters.md#test).

Second, your regex may be too complex. If your regex takes more than 100 milliseconds (which is actually a lot of time for a computer to evaluate a regex), it will fail. We do this to avoid a Regex Denial of Service (ReDoS) attack. Most regex should be fine, so this is highly unlikely.


## Deletions in the counting channel is slow {#queue-delete}

To work around Discord's rate limit system, we've implemented a bulk delete system that bulk deletes messages if it becomes too active for Discord to handle. It may take up to 10 seconds before it deletes incorrect messages. If it never deletes your messages, it's probably a permission issue.


## I'm not receiving notifications {#notifications}

If you're not receiving notifications from Countr, it may be because we block sending messages to you for five minutes if we detect that we're unable to send you a notification. If you've recently made sure Countr can send you notifications and it's still not working after five minutes, then you might have an issue with the notification itself.


## Countr reposted my message without a reposting module enabled {#reposting-tampered-message}

If Countr reposted your message without a reposting module enabled, it's likely because we automatically repost messages that have been edited or deleted. You can distinguish this from the [reposting module](01-features/02-modules/04-reposting.md) as the entire message is cursive, like this:

```mdx-code-block
import {
  DiscordMessages as Discord,
  DiscordItalic as Italic,
  DiscordMention as Mention,
  DiscordMessage as Message,
} from "@skyra/discord-components-react";

<Discord>
  <Message profile="countr" highlight>
    <Italic><Mention>Promise</Mention>{": 933"}</Italic>
  </Message>
</Discord>
<br/>
```

If Countr deletes messages and reposts like this automatically in your server then check if there's some other bot interfering. One way to check if this is the case is to manually remove the "Manage Messages" permission from Countr in the counting channel, and then try to send a message. If it still deletes then some other bot is interfering, if it doesn't then it's an issue with your setup.


## I don't see the commands. {#permissions}

All commands have a default permission requirement of Administrator, meaning you need to be an Administrator to access commands. This allows the server admins to override and grant whoever they'd like to access to the commands. If you don't see the commands, it's likely because you don't have the necessary permissions. A simple fix is to ask your server admin to grant you access, and to read the [Permissions page](./02-permissions.md) for instructions on how to do so.

If you're a server admin or the server owner, you should have access to all commands by default. If you're still having trouble, or if you have any questions or concerns, please don't hesitate to reach out to us. We're here to help!


## What is Countr's prefix? {#prefix}

Countr has fully moved over to slash commands, so you can use `/`` as your new prefix! This means that all of Countr's commands are now accessed through the Discord slash command interface. To see a list of available commands, simply type `/`` in any channel where Countr is present.
