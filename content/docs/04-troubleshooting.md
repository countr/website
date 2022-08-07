# Troubleshooting

If you're ever stuck with something, feel free to check if your issue is here. If your issue isn't here, or it's still not working, then join our [support server](https://promise.solutions/discord) and we can help you out.


## "Remove everyone from a role" action is not working {#role-member-caching}

To save up on memory, we don't cache everyone's user information, including their roles. We've tried to work around this issue by fetching everyone in the server that have a score in the counting channel, and then filter out who has the role and who doesn't, but this isn't always reliable. There's currently no way of fetching everyone from a role or set a role's members directly through the Discord API.


## My regex doesn't work as it should {#regex}

There's two reasons this might happen, number one is if your regex is not correct or not the way you wanted it to function. You can test your regex with a [regex tester](01-features/03-regex-filters.md#test).

The second is your regex might be too complex. If your regex takes more than 100 milliseconds (this is actually a lot of time for a computer to evaluate a regex) then it will fail. We do this to avoid a Regex Denial of Service (ReDoS) attack. Most regex should be fine though, so this is highly unlikely.


## Deletions in the counting channel is slow {#queue-delete}

Because of Discord's rate limit system, we have implemented a system that bulk deletes messages if it becomes too active for it to handle. It might take up to 10 seconds before it deletes incorrect messages.

If it never deletes your messages then it's probably a permission issue.


## I'm not receiving notifications {#notifications}

Countr will block sending messages to you for five minutes if it detects it's unable to send you a notification. We do this because if Countr fails to send 10.000 direct messages within 10 minutes because the user has either blocked them on purpose (with bad intent) or not opened direct messages in the mutual server, then Countr will stop functioning globally and will be IP-banned for up to 12 hours. That's no fun.

If you've recently made sure Countr can send you notifications and it's still not working after five minutes, then you might have an issue with the notification itself.


## Countr reposted my message without a reposting module enabled {#reposting-tampered-message}

Countr reposts messages that have been edited or deleted automatically. You can distinguish this from the [reposting module](01-features/02-modules/03-reposting.md) as the entire message is cursive, like this:

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

If Countr deletes messages and reposts like this automatically in your server then check if there's some other bot interfering. One way to check if this is the case is to manually remove the "Manage Messages" permission from Countr in the counting channel, and then try to send a message. If it deletes then some other bot is interfereing, if it doesn't then it's an issue with your setup. Join our support server and we'll gladly help you.