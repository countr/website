# Position Roles

Position roles are roles that are automatically assigned to users based on their position on the leaderboard. For example, you can create a role called "Top Counter" and assign it to the user who is currently in first place on the leaderboard.

<div class="bg-blue-100 p-4 rounded-lg shadow-md">

## How to set up {#how}

To set up a new position role, use the `/positionroles set` command. This command allows you to specify the name of the role, the position on the leaderboard that the role should be assigned to, and the color of the role. Once you've set up a position role, Countr will automatically assign the role to the user who is in the specified position on the leaderboard.

You can also list all of your position roles using the `/positionroles list` command. This command will show you all of the position roles that you've set up, along with the position on the leaderboard that each role is assigned to.

If you want to remove a position role, use the dropdown menu of `/positionroles list` command.

</div>

<div class="bg-red-100 p-4 rounded-lg shadow-md">

## Limitations

Please note that position roles are only updated when the leaderboard is updated. This means that there may be a delay between when a user's position changes and when their position role is updated.

Additionally, position roles are only assigned to users who have a score in the counting channel. If a user doesn't have a score, they won't be assigned a position role.

</div>
