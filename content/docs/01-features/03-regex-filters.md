# Regex Filters

Regex filters are an advanced tool for filtering out unwanted messages in your counting channel without affecting the count.


## Purpose

Discord channels can be filled with unwanted messages, so we've added regex filters to help moderators automatically filter out most of them from the counting channel. Whenever a message matches a regex filter that you've configured, the count will automatically fail and the message will be deleted.


## How to Manage Regex Filters {#manage}

To add a new filter, use the `/filters add` command. To remove a filter, use the `/filters remove` command. You can list all of your filters with the `/filters list` command.


## How to test regex filters {#test}

We recommend using a [Regex Tester](https://regexr.com/) to test your regex filters. Here's an example:

```mdx-code-block
import Image from "@theme/IdealImage";

<Image img={require("../../../assets/docs/regex-tester.png")} alt="Regex Tester" />
```

In the tester, you can enter a regex pattern and test it against sample messages to see if it matches. Once you have a working regex pattern, you can add it as a filter using the `/filters add` command.

:::note
The regex evaluator built into Countr is timed, so if you have a complex regex, it may fail to evaluate.
:::
