---
authors: promise
tags: [hacktoberfest]
---


# Unique role action

We've gotten multiple reports about "removing all users from a role" being quite buggy and not working as expected. Users that want this feature usually want to remove the previous user from a role to give it to the new user, so ... we just made it its own action.

To cut the long story short, we've added a new action called "Unique role" that will remove the previous user from the role, and add it to the new user. It's a lot more reliable than the "Remove all users from role" action, and it's a lot less reliant on cache (which is why it was buggy in the first place).


## "Remove everyone from a role" action is deprecated

We will remove this action in the future, so please use the new "Unique role" action instead. We will keep the old action around for a while, but it will be removed in the future.