---
layout: default
title: Technical Documents
---
<nav class="leftNavigation">
    <div class="navTitle">{{ page.title }}</div>
    {% for tech_doc in site.tech_docs %}
        <a href="{{ tech_doc.url }}" {% if page.url == tech_doc.url %}class="selected"{% endif %}>{{ tech_doc.title }}</a>
    {% endfor %}
</nav><div class="content">
</div>