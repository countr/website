---
authors: promise
tags: [updates, changelog]
---


# New updates this summer!

We're only halfway into the summer, but there have already been a lot of changes to Countr! We're excited to share these changes with you and hope that they enhance your counting experience.

<!-- truncate -->

## The new `/scores fetch` command

This feature has been requested [since January 2020](https://github.com/countr/countr/issues/16), and we're excited to finally make it available. With the `/scores fetch` command, you can easily count up all the scores in your counting channel. This feature is perfect for servers that would like to move over to Countr and are not able to export scores from their previous system.

If you want to try it out then go ahead! It responds with a file that you can import later through `/data import scores`. The fetch command will not modify the database directly, so you can safely try it out without worrying about overwriting your current scores.

## The new reaction action

This action has been *highly* requested multiple times, and it's finally here. With the new reaction action, you can react to a count with a Discord emoji or a custom server emoji. For example, you can react with a cross to cross out a failed count, or react with a checkmark to successful counts. Another idea is to add a "nice!" server emoji reaction to counts ending in 69.

You can easily combine reactions as well, so if you want to spell out "nice" using reactions, you can do that!

## The new `nodelete` module

This module has been requested [since October 2021](https://github.com/countr/countr/issues/138)! With the "nodelete" module, failed counts will no longer be deleted from the counting channel. This means you can have a normal conversation in your counting channel with this module enabled. Combined with the [new react action](#the-new-reaction-action), you can also react with a cross for failed counts.

## You can now run a random flow action

This has been requested [since January this year](https://github.com/countr/countr/issues/660). When creating or editing a flow, you will now be able to toggle "Randomize action" on the last page of the flow editor. This will make Countr pick a random action from the flow, and run that action instead of all of them.
