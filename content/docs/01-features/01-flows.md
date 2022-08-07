# Flows

A flow is a configurable automated process that will run one or more actions. It sounds complicated, but we've tried to make it as user-friendly as we can with our flow editor.

Simply put, a flow is a list of triggers and actions, and whenever one of those triggers is triggered, the flow will run all the actions.


## How to create a flow {#how}

```mdx-code-block
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
} from "@skyra/discord-components-react";

<Discord>
  <Message profile="countr">
    <Command slot="reply" profile="promise" command="/flows create"></Command>
    <Embed embedTitle="Editing flow 6e9300" color="#6e9300">
      <Description slot="description">
        🌀 <Bold>Step 1: Welcome to the flow editor!</Bold><br/>
        ✴️ Step 2: Triggers<br/>
        ✴️ Step 3: Actions<br/>
        ✴️ Step 4: Optional details
      </Description>
    </Embed>
    <Embed embedTitle="Welcome to the flow editor!" color="#5865f2">
      <Description slot="description">
        I will guide you through creating a flow. It is very easy to set one up, and you can customize flows a lot as well!
        <br/><br/>
        Here's some things to note:<br/>
        • <Bold>Any trigger</Bold> will run <Bold>all actions</Bold>. So if you want to give out role rewards, you need to set up a flow per reward.<br/>
        • Actions run <Bold>asynchronously</Bold>, meaning that your first action will run, and then your second, and then your third etc.<br/>
        • If an action fails, it will just continue on to the next action.
        <br/><br/>
        Click the buttons below to navigate. Need help? Check out the documentation or ask a question in the support server. Have feedback? Join the support server, we would love to hear from you!
      </Description>
    </Embed>
    <Attachments slot="components">
      <ActionRow>
        <Button type="primary" disabled>&lt; Back</Button>
        <Button type="secondary" disabled>Step 1/4</Button>
        <Button type="primary">Next &gt;</Button>
        <Button type="success" disabled>Save</Button>
        <Button type="destructive">Cancel</Button>
      </ActionRow>
    </Attachments>
  </Message>
</Discord>
```

<br/>

When you first run the command `/flows create`, this message will come up. Looks like a lot, and looks quite advanced, but it's actually pretty simple and user friendly.

You are first greeted with this welcome message. It's a bit long, but it's a good way to get started. Click Next to go to the next step. There are in total four steps. Step 2 and 3 is where you configure your flow, and step 4 is where you can give your flow a name or toggle it as well. After step 4, you can save the flow.

:::note
Keep in mind that **any trigger** will trigger **all actions** in a flow. So if you have multiple triggers, let's say "each 10" and "only 15" are your flow's triggers, then all of your flow's actions will run if someone counts 10, 20, 30 etc. and also if someone counts the number 15. So if you plan on making role rewards then you need a flow for each role you want to give out.
:::


## Triggers

| Triggers |
|:--------:|
| **Each X number**<br/>This will get triggered whenever a user counts a multiple of X. For example, if X is 10, this will trigger on 10, 20, 30 etc. |
| **Only number X**<br/>This will get triggered whenever a user counts the number X, and only the number X. |
| **Score of X**<br/>This will get triggered whenever a user has counted a total of X counts. |
| **Regex match**<br/>This will get triggered when a successful count message matches a regex. |
| **Count fail**<br/>This will get triggered whenever someone fails a count. |
| **Timeout role triggered**<br/>This will get triggered whenever someone gets the timeout role. |
| **Greater than or equal to number X**<br/>This will get triggered whenever a user counts a number that is greater than or equal to the number X. |
| **Score greater than or equal to X**<br/>This will get triggered whenever a user has counted a total of X counts, or more than X counts. |


## Actions

| Actions |
|:-------:|
| **Give a role (or list of roles) to the user**<br/>This will add a role, or a list of roles, to the user who triggered this flow. |
| **Remove a role (or list of roles) from the user**<br/>This will remove a role, or a list of roles, from the user who triggered this flow. |
| **Remove everyone from a role (or list of roles)**<br/>This will remove everyone from a role, or a list of roles.<br/>Note: This might not remove everyone from the role(s). This is due to caching. [Read more](../04-troubleshooting.md#role-member-caching). |
| **Pin the count message** |
| **Send a message**<br/>This will send a message in any channel you'd like. |
| **Lock the counting channel**<br/>This will lock the counting channel for the everyone-role. This action won't work in threads as of right now. |
| **Set the count** |
| **Modify the count** |
| **Set the user's score** |
| **Modify the user's score** |


## Flow Ideas {#ideas}

We've collected a few ideas for your server here. You can of course make your own flow however you'd like, but here are a few ideas to help get you started.

  * **Role rewards:** Give out a role to people that counted a total of 1000 counts or more.
  * **Milestone pin:** Pin every 1000th count in the channel.


## Need help with your flow? {#help}

Join our support server, we would love to help you creating your flow! The flow editor is still in development, so we would love to hear your feedback to improve it as well.