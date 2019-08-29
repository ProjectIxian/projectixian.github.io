---
layout: tech_docs
title: Technical Documents
---
Get yourself familiar with the technical aspects of Ixian technology. Learn more about the Cryptographic primitives, data formats and more. 

{% for tech_doc in site.tech_docs %}
    <a href="{{ tech_doc.url }}" {% if page.url == tech_doc.url %}class="selected"{% endif %}>{{ tech_doc.title }}</a>
{% endfor %}
