---
layout: default
title: Guides
---
<nav class="leftNavigation">
    <div class="navTitle">{{ page.title }}</div>
    {% for guide in site.guides %}
        <a href="{{ guide.url }}" {% if page.url == guide.url %}class="selected"{% endif %}>{{ guide.title }}</a>
    {% endfor %}
</nav><div class="content">
</div>