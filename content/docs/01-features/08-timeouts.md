# Timeouts

A timeout role is a way for you to give a role automatically if they fail X amount of times within Y seconds.


## Purpose

To prevent people spamming your channel, you can set up a role to be given automatically, and then restrict that role from sending messages in the counting channel. You can obviously do whatever you want with it though, but the main use case is to slow down the rate of failed counts in your channel.


## How to set up {#how}

You can configure a timeout role with the `/timeoutrole set` command. You can remove the timeout role with the `/timeoutrole remove` command.

After you've configured a role, you can do whatever you want with it. The normal use case is to deny the "Send Messages" permission in the counting channel, so it actually functions.

You can also configure a flow to do something whenever someone gets a timeout role.