# Notifications

If you want to stay up-to-date in your counting channel, or someone else's counting channel, you can set up Countr to send you a DM whenever you'd like.


## How to set up {#how}

To create a new notification alert, use the `/notifications create` command. You can also list all your notifications, and delete some if you want, with the `/notifications list` command.


## Notification triggers {#triggers}

Notifications use the same system as flows, so you set them up the same way. Here are the available notification triggers:

| Notification triggers |
|:--------:|
| **Each X number**<br/>This will get triggered whenever a user counts a multiple of X. For example, if X is 10, this will trigger on 10, 20, 30 etc. |
| **Only number X**<br/>This will get triggered whenever a user counts the number X, and only the number X. |
| **Regex match**<br/>This will get triggered when a successful count message matches a regex. |
| **Greater than or equal to number X**<br/>This will get triggered whenever a user counts a number that is greater than or equal to the number X. |

Please note that notifications are only sent for successful counts. If a user's count is rejected, no notification will be sent.
