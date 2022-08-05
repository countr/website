# Regex filters

A regex filter can filter out bad or unwanted messages in your counting channel without screwing up the count.


## Purpose

Discord is filled with potentially unwanted messages, so we've added this so moderators can try to filter out most of them from the counting channel automatically. Whenever a message matches a regex filter you've configured, the count will automatically fail and the message will be deleted.


## How to manage regex filters

You can add a new filter using the `/filters add` command, and remove using `/filters remove`. You can list all your filters with `/filters list`.


## How to test regex filters

We recommend using a [Regex Tester](https://regexr.com/) to test your regex filters. Here's an example:

![Regex example](/img/docs/regex-tester.png)

In this example, the regex is `hello world`. You add this regex filter by doing `/filters add regex:hello world`.

:::note
Our regex evaluator is timed, so if you have a complex regex, it might fail to evaluate.
:::