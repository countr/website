import {
  DiscordBold as Bold,
  DiscordEmbed as Embed,
  DiscordEmbedDescription as Description,
  DiscordEmbedFooter as Footer,
  DiscordItalic as Italic,
  DiscordCommand as Command,
  DiscordMessages as Discord,
  DiscordMention as Mention,
  DiscordMessage as Message,
  DiscordUnderlined as Underline,
} from "@skyra/discord-components-react";

# Scores & Leaderboard

Countr keeps track of how many times each user has counted in the counting channel, and can display this information in a score table and leaderboard.


## How to modify {#modify}

To modify a user's score manually, use the `/scores modify` command. This command allows you to add or subtract points from a user's score. You can also prune the score table with the `/scores prune` command, which removes users who have left your server from the table.


## Leaderboard {#view}

To view the score table, use the `/leaderboard` command. This command displays the top 25 users with the highest scores, along with their scores and positions on the leaderboard. You can also view individual scores with the `/user` command.


### Leaderboard Example {#view-example}

<Discord>
  <Message profile="countr">
    <Command slot="reply" command="/leaderboard" profile="promise" />
    {"🏆 Top 25 users of "}<Mention type="channel">counting</Mention>{":"}
    <Embed slot="embeds" colors="#bd4632" authorImage="/ps-logo-on-blurple.png" authorName="Counting Leaderboard">
      <Description slot="description">
        {"🥇 "}<Mention>Kai</Mention>{", "}<Bold>score:</Bold>{" 10,000"}<br/>
        {"🥈 "}<Mention>Helper</Mention>{", "}<Bold>score:</Bold>{" 5,190"}<br/>
        {"🥉 "}<Mention>Josh</Mention>{", "}<Bold>score:</Bold>{" 2,687"}<br/>
        <Bold>4th</Bold>{" "}<Mention>Mathias</Mention>{", "}<Bold>score:</Bold>{" 2,074"}<br/>
        <Italic><Underline><Bold>5th</Bold>{" "}<Mention>Promise</Mention>{", "}<Bold>score:</Bold>{" 1,462"}</Underline></Italic><br/>
        <Bold>6th</Bold>{" "}<Mention>Max</Mention>{", "}<Bold>score:</Bold>{" 1,247"}<br/>
        <Bold>7th</Bold>{" "}<Mention>SENPAI</Mention>{", "}<Bold>score:</Bold>{" 1,014"}<br/>
        <Bold>8th</Bold>{" "}<Mention>Relatable name</Mention>{", "}<Bold>score:</Bold>{" 1,002"}<br/>
        <Bold>9th</Bold>{" "}<Mention>Chief Awaited Otter</Mention>{", "}<Bold>score:</Bold>{" 820"}<br/>
        <Bold>10th</Bold>{" "}<Mention>prawnmoose</Mention>{", "}<Bold>score:</Bold>{" 723"}<br/>
        <Bold>11th</Bold>{" "}<Mention>glenn</Mention>{", "}<Bold>score:</Bold>{" 536"}<br/>
      </Description>
      <Footer slot="footer">Today at 10:50 AM</Footer>
    </Embed>
  </Message>
</Discord>

### Users that have left the server {#users-left}

If a user has left the server, their score will still show on the leaderboard but their `@mention` might not work correctly. If you want to remove users that have left the server from the leaderboard, use the `/scores prune` command.


## Liveboard (live leaderboard) {#live}

The Liveboard is a premium feature that automatically updates every 5 minutes. To access the Liveboard, you need to purchase [Premium](../03-premium.md). The Liveboard displays the top 25 users with the highest scores, along with their scores and positions on the leaderboard.
