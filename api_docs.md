---
layout: api_docs
title: API Documentation
---
Find all the information that is needed for seamless integration with Ixian.

<div class="sectionTitle">Ixian Core Generic API Commands </div>
{% assign core_api_docs = site.api_docs | where: 'type', 'core' %}
{% for api_doc in core_api_docs %}
    <a href="{{ api_doc.url }}" {% if page.url == api_doc.url %}class="selected"{% endif %}>{{ api_doc.title }}</a>
{% endfor %}
<div class="sectionTitle">Ixian DLT Specific API Commands </div>
{% assign dlt_api_docs = site.api_docs | where: 'type', 'dlt' %}
{% for api_doc in dlt_api_docs %}
    <a href="{{ api_doc.url }}" {% if page.url == api_doc.url %}class="selected"{% endif %}>{{ api_doc.title }}</a>
{% endfor %}
<div class="sectionTitle">Ixian S2 Specific API Commands </div>
{% assign s2_api_docs = site.api_docs | where: 'type', 's2' %}
{% for api_doc in s2_api_docs %}
    <a href="{{ api_doc.url }}" {% if page.url == api_doc.url %}class="selected"{% endif %}>{{ api_doc.title }}</a>
{% endfor %}