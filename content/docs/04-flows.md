# Flows

## What is a flow?

A flow is a way to customize your counting channel completely. Do you want to reward someone for counting? Do you want to send them a message? Do you maybe want to give them a role? Or pin the count? Check this out.

Trigger any flow whenever you want to, automatically.

## What is the purpose of a flow?

Before version 12, we had something called rolerewards and pintriggers. They were of course neat additions on their own, but people wanted more ways to customize. Maybe removing a role, or sending a message in a channel. So we simply merged all the ideas together into a concept, and we called it flows.

## How do I get started?

Run `c!createflow` and the bot will create a channel and guide you through making a flow.

## Ideas for flows

- Pin every 1000th count, or pin a count that ends with `420` in it.
- Give user a role when they reach a score of 100. When they reach 500, remove the previous role and give them a new one.
- Mention everyone in #general when you reach 10,000 counts. Just for fun.
- Remove everyone from the role "Counting Sniper" and give it to whoever counts 1000, 2000 or 3000, etc.
- When your counting channel hits 100,000 counts, lock the channel.

## Limits

You can have 3 triggers and 10 actions per flow, and 25 flows total on your server. Premium gets 25 of each.

You might be wondering why we have these limitations. It's simply because the more triggers, actions and flows a server has, the more processing power will it use to process a count. With over a million counts every week, this adds up a lot. We feel like this limit is plenty for the average Discord user, but if you want to go completely insane then you can do that with the Premium solution for only $1/month.

## Triggers

A trigger is something that will activate and run the flow. If you're a premium user and have multiple triggers, any *one* of the triggers can activate the flow. **Available triggers:**

- **Each X number:** This will get triggered whenever a user counts a multiple of X. For example, if X is 10, this will trigger on 10, 20, 30 etc.
- **Only number X:** This will get triggered whenever a user counts the number X, and only the number X.
- **Score of X:** This will get triggered whenever a user has counted a total of X counts.
- **Regex match:** This will get triggered when a count matches a regex.
  - Regex examples can be found [here](https://docs.countr.xyz/regex-examples)
- **Count Fail** This will get triggered when someone fails to count the correct number.
- **Timeout role triggered** This will get triggered whenever someone gets the timeout role.

## Actions

An action is something the flow will do once it's triggered. Actions run asynchronously. **Available actions:**

- **Give a role to the user:** This will add a role to the user who triggered this flow.
- **Take a role away from the user:** This will remove a role from the user who triggered this flow.
- **Remove everyone from a role:** This will remove everyone from this role. *This might not remove everyone from the role due to caching. Some inactive users might not lose their role.*
- **Pin the count message**
- **Send a message:** This will send a message in a channel (it doesn't have to be the counting channel!)
- **Lock the counting channel:** This will lock the counting channel for the everyone-role, and will be read-only.
- **Reset the current count** Reset the count to 0.