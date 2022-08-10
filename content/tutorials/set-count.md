---
authors:
  - name: MaSera
    title: Contributor
    url: https://github.com/Maseraphina
    image_url: https://github.com/Maseraphina.png
tags: [set count, multiple counting channels]
---
import {
  DiscordActionRow as ActionRow,
  DiscordAttachments as Attachments,
  DiscordBold as Bold,
  DiscordButton as Button,
  DiscordCommand as Command,
  DiscordEmbedDescription as Description,
  DiscordMessages as Discord,
  DiscordEmbed as Embed,
  DiscordMessage as Message,
  DiscordMention as Mention,
} from "@skyra/discord-components-react";

# How do I change the count?
This tutorial will give you more information on how to change a count in your server.<br/>(regardless of whether you have 1 or more counting channels in your server)

<!--truncate-->
#### First of all, why is my count sometimes wrong?

The count can be incorrectdue to various reasons:
1. You or someone else deleted the previous count, so it looks messed up.
2. Countr has been offline
3. It bugged out due to high latency.
  <br/>or
4. you've just invited countr in your server and there already  is a counting channel.

## /set count {#count}
You can solve this very easily bye using `/set count` `latest-or-new-number-here` in the counting channel.

```mdx-code-block


<Discord>
  <Message>4</Message>
  <Message>5</Message>
  <Message profile="countr">
    <Command slot="reply" profile="promise" command="/set count"></Command>
    ✅ The count of <Mention type="channel">counting</Mention> is now set to 50.
  </Message>
  <Message>51</Message>
  <Message>52</Message>
</Discord>
```
*`/set count 50`*

## I have more than one counting channel in my server. {#more}

If you have more than one counting channel in your server, the bot may not know which count needs to be changed.
Use `/select` `#channel` to select the channel you want to adjust and use `/count` to set the count for that channel.


```mdx-code-block
<Discord>
  <Message profile="countr" ephemeral>
    <Command slot="reply" profile="promise" command="/set count"></Command>    
    💥 You need a counting channel selected to run this command.
    <br/>Type <code>/select</code> to select a counting channel and then run this command again.
  </Message>
  
  <Message profile="countr" ephemeral>
    <Command slot="reply" profile="promise" command="/select"></Command>    
    ✅ You have selected <Mention type="channel">counting-2</Mention> as your counting channel.
  </Message>
  
  <Message profile="countr">
    <Command slot="reply" profile="promise" command="/set count"></Command>
    ✅ The count of <Mention type="channel">counting-2</Mention> is now set to 17.
  </Message>
</Discord>
```
*`/select #channel`* - *`/set count 17`*
<br/>

:::tip


You can also use `/count` directly in the channel you want to change to skip this step


```mdx-code-block
<Discord>
  
  <Message profile="countr">
    <Command slot="reply" profile="promise" command="/set count"></Command>
    ✅ The count of <Mention type="channel">counting-2</Mention> is now set to 25.
  </Message>
</Discord>
```
*`/set count 25` in `#counting-2`*
::: 
