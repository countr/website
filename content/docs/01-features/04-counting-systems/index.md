import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# Counting systems

You can configure what counting system you'd like to use with the command `/set system`, and also when you create a new channel or link an existing one.

Here's a list of the different counting systems.

<DocCardList items={useCurrentSidebarCategory().items}/>

:::note
You can always run `/count` to see what the next number will be. It will also tell you what the number is currently in decimal format.
:::
