# Notifications

If you want to keep yourself up-to-date in your counting channel, or someone else's counting channel, you can set it up so Countr will send you a DM whenever you'd like.


## How to set up {#how}

You can create a new notification alert with the `/notifications create` command. You can list all your notifications, and also delete some if you want, with `/notifications list`.


## Notification triggers {#triggers}

Notifications use the same system as flows, so you set it up the same way.

| Notification triggers |
|:--------:|
| **Each X number**<br/>This will get triggered whenever a user counts a multiple of X. For example, if X is 10, this will trigger on 10, 20, 30 etc. |
| **Only number X**<br/>This will get triggered whenever a user counts the number X, and only the number X. |
| **Regex match**<br/>This will get triggered when a successful count message matches a regex. |
| **Greater than or equal to number X**<br/>This will get triggered whenever a user counts a number that is greater than or equal to the number X. |