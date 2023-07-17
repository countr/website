# Flows

A flow is a configurable automated process that will run one or more actions. It sounds complicated, but we've tried to make it as user-friendly as we can with our flow editor.

Simply put, a flow is a list of triggers and actions, and whenever one of those triggers is triggered, the flow will run all the actions.


## How to create a flow {#how}

To create a flow, use the `/flows create` command. This will open the flow editor, which will guide you through the process of creating a new flow.

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

In the first step, the editor will give you an overview of the flow creation process and what to expect. In the second step, you'll be able to choose one or more triggers that will activate the flow. In the third step, you'll be able to choose one or more actions that will be performed when the flow is triggered. In the fourth step, you'll be able to add optional details to the flow, such as a name and description.

Once you've completed all four steps, your flow will be created and ready to use. You can view your flows using the `/flows list` command, and you can edit or delete a flow using the `/flows edit` and `/flows delete` commands, respectively.

:::note
Keep in mind that any trigger will activate all actions in a flow. For example, if you have multiple triggers such as "each 10" and "only 15", then all actions in your flow will run if someone counts 10, 20, 30, etc. or if someone counts the number 15. Therefore, if you plan on creating role rewards, you need a separate flow for each role you want to give out.
:::


## Triggers

| Triggers |
|:--------:|
| **Each X number**<br/>This trigger will activate whenever a user counts a multiple of X. For example, if X is 10, this trigger will activate on 10, 20, 30, etc. |
| **Only number X**<br/>This trigger will activate whenever a user counts the number X, and only the number X. |
| **Score of X**<br/>This trigger will activate whenever a user has counted a total of X counts. |
| **Regex match**<br/>This trigger will activate when a successful count message matches a regex. |
| **Count fail**<br/>This trigger will activate whenever someone fails a count. |
| **Timeout role triggered**<br/>This trigger will activate whenever someone gets the timeout role. |
| **Greater than or equal to number X**<br/>This trigger will activate whenever a user counts a number that is greater than or equal to the number X. |
| **Score greater than or equal to X**<br/>This trigger will activate whenever a user has counted a total of X counts, or more than X counts. |


## Actions

| Actions |
|:-------:|
| **Give a role (or list of roles) to the user**<br/>This action will add a role, or a list of roles, to the user who triggered this flow.. |
| **Remove a role (or list of roles) from the user**<br/>This action will remove a role, or a list of roles, from the user who triggered this flow. |
| **Give a unique role (or list of roles) to the user**<br/>This action will add a role, or a list of roles, to the user who triggered this flow, and also remove previous users that had this role or these roles. |
| **Pin the count message**<br/>This action will pin the counting message. |
| **Send a message**<br/>This action will send a message in any channel you'd like. See placeholders [further down](#send-a-message-placeholders). |
| **Lock the counting channel**<br/>This action will lock the counting channel for the everyone-role. This action won't work in threads as of right now.. |
| **Set the count**<br/>This action will set the count to a specific number. |
| **Modify the count**<br/>This action will modify the count by a specific number. |
| **Set the user's score**<br/>This action will set the user's score to a specific number. |
| **Modify the user's score**<br/>This action will modify the user's score by a specific number. |
| **Message reaction**<br/>This action will react to the counting message with an emoji. It also supports the `nodelete` module for failed counts. |


### "Send a message" Placeholders

When using the "Send a message" action in a flow, you can use placeholders to customize the message. Here are the available placeholders:

* `{count}`:	The count that triggered this flow.
* `{mention}`:	Mentions the user who triggered this flow.
* `{tag}`:	The tag of the user who triggered this flow.
* `{username}`:	The username of the user who triggered this flow.
* `{nickname}`:	The nickname of the user who triggered this flow.
* `{everyone}`:	Mentions the everyone-role.
* `{score}`:	The new score of the user who triggered this flow.
* `{content}`:	The content of the message that triggered this flow.
* `{failreason}`:	The reason why the count failed (if it failed).

To use a placeholder, simply include it in your message surrounded by curly braces. For example, if you want to mention the user who triggered the flow, you can use the `{mention}`` placeholder.

## How to use emojis in flows

Some actions, such as the Message reaction action, allow for emojis as input. If you're on Windows, you can press Windows key + . (period) to open the emoji picker. If you want to use a server emoji, type out the emoji in a Discord channel and prefix it with a backslash, like this: `\:emoji:`. It will then look something like this: `<:emoji:1234567890123456789>` - paste this entire thing in the field where it asks for an emoji.

Make sure to only enter one emoji in the text field, and no spaces.


## Flow Ideas {#ideas}

If you're not sure where to start with creating a flow, here are a few ideas to help get you started:

* **Role rewards:** Give out a role to people that counted a total of 1000 counts or more.
* **Milestone pin:** Pin every 1000th count in the channel.
* **React on failed counts:** React to failed counts with a red cross when enabling the `nodelete` module.

Of course, you can create your own flow however you'd like. If you need help with your flow, feel free to join our support server. We're always happy to help!
