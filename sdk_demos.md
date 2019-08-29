---
layout: sdk_demos
title: SDK Demos
---
Learn how to build your next app on Ixian. Browse through our SDK Demos and get up and running with Ixian.

{% for sdk_demo in site.sdk_demos %}
    <a href="{{ sdk_demo.url }}" {% if page.url == sdk_demo.url %}class="selected"{% endif %}>{{ sdk_demo.title }}</a>
{% endfor %}