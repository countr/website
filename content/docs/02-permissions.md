# Permissions

All command permissions are handled by Discord now. Countr doesn't have any limitations anymore on who can access commands. There's no internal check in the code anymore.


## Default permissions

The default permissions are either none (0x0), or `Administrator` (0x8). You can however override it however you'd like.

Here's an image from our support server's setup.

![Countr Integrations page](/img/docs/countr-integration.png)

You can see here that, although the `everyone` role has access to all the commands, it still requires the `Staff` role to be added and granted permissions as well. *Why? Discord is weird.*

Discord doesn't actually tell you which commands are locked behind permissions, even if we click in on a permission-locked command. We hope this will be fixed soon.

![Countr /data command](/img/docs/countr-data-command.png)

This command is still only available to those with the `Administrator` permission, and also everyone in the Staff role.