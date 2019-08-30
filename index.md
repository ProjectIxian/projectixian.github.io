---
layout: home
title: Main
---
Welcome to Ixian Documentation page. 

Learn how you can leverage Ixian technology to build enterprise level services. 

# Technical Documents
{% for tech_doc in site.tech_docs %}
    [tech_doc.title](tech_doc.url)
{% endfor %}


# API Documentation
## Ixian Core Generic API Commands
{% assign core_api_docs = site.api_docs | where: 'type', 'core' %}
{% for api_doc in core_api_docs %}
    [api_doc.title](api_doc.url)
{% endfor %}

## Ixian DLT Specific API Commands
{% assign dlt_api_docs = site.api_docs | where: 'type', 'dlt' %}
{% for api_doc in dlt_api_docs %}
    [api_doc.title](api_doc.url)
{% endfor %}

## Ixian S2 Specific API Commands
{% assign s2_api_docs = site.api_docs | where: 'type', 's2' %}
{% for api_doc in s2_api_docs %}
    [api_doc.title](api_doc.url)
{% endfor %}


# [SDK Documentation](/sdk_docs.html)


# SDK Demos
{% for sdk_demo in site.sdk_demos %}
    [sdk_demo.title](sdk_demo.url)
{% endfor %}


# Guides
{% for guide in site.guides %}
    [guide.title](guide.url)
{% endfor %}