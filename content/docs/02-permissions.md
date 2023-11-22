import Image from "@theme/IdealImage";

# Permissions

Countr's command permissions are now handled by Discord, which means there are no internal checks in the code anymore. This gives you more flexibility in deciding who can access commands.


## Default permissions

By default, the permissions are either none (0x0) or `Administrator` (0x8). In simpler terms, you need to be an Administrator on the server to use Countr's commands. However, you can override these permissions as needed.

In the image below, you can see that although the `everyone` role has access to all the commands, the `Staff` role must also be added and granted permissions. This is because Discord is weird and doesn't actually tell you which commands are locked behind permissions, even if you click on a permission-locked command. We hope this will be fixed soon.

<Image img={require("../../assets/docs/countr-integration.png")} alt="Countr Integrations page" />

The `/data` command, for example, is still only available to those with the `Administrator` permission and everyone in the `Staff` role.

<Image img={require("../../assets/docs/countr-data-command.png")} alt="Countr /data command" />
