---
layout: guides
title: Guides
---
Setup and run your own Ixian DLT and Ixian S2 nodes.

Learn how to setup and use various Ixian products on different operating systems.

{% for guide in site.guides %}
    <a href="{{ guide.url }}" {% if page.url == guide.url %}class="selected"{% endif %}>{{ guide.title }}</a>
{% endfor %}