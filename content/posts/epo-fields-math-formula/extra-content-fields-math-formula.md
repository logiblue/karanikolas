---
title: Math Formula -  Extra product options[Woocommerce]
date: 2021-01-02
tags: [Woocommerce, WordPress]
social_image: '/media/extra-content-option-feat.jpg'
description: How to use a simple math formula with Extra product options Plugin in woocomerce.
---

![epo-plugin](./group-2.png)



```toc
# This code block gets replaced with the TOC
```
## Quick review of the plugin

Extra product options for WooCommerce is a premium plugin for Woo + WP. It's one of the best solutions if
anyone wants to boost his WooCommerce products by providing the ability to add options and manipulate the price of his products. In my case is used on a Travel Agency website along with a paid theme from Themeforest. The options I created in this project was quite simple and used the values also in the checkout process. There is a learning curve in order to fully understand on how to approach a solution with the plugin but in the end I think it's worth the time and for sure I would use this plugin on another project. Maybe, I'll write a full quide on how to create options in the future.

## Creating Fields
Creating fields with the epo is easy. The plugin provides an extra tab at the product options called "Extra product options". There you can find a builder where you can decide between different elements on building you options forms.

Every field has a different advantage but in our case we're gonna use a "dropdown" and a "Radio button".



## Creating a simple Math Formula
In my scenario the user must select the number of passenger for a trip. For every passenger we should add some extra costs on the initial price. 

Let's break down the costs: 
1. Starting Price - 1000
2. Extra Fees for services - 50
3. Fees for visa - 100

So at the end without choosing any other of our options the Total Cost for each passenger on our trip should be  - 1150$

But we need all this costs to be calculated by choosing the passengers number.

## Steps
First we need to create a dropdown field. Add there 1-5 options and the prices.
Second Add a radio button. On the price of the Radio we choose to add a Math Formula from the price dropdown. We choose to other elements section the "Value of element" and choose the element from the list! We can see this added to the upper field. Then I just wrote to multiply this by the price ex. 50 so at the end I have something like this


```javascript

{field.61e185f7d240e4.97033231.value}*50

```


##


![epo-plugin-inside](./epo-math-formula.png)
A screenshot of the math-formula
## Ease of use
As quick as possible. While training our customer on how to add his fields I choose to create some starters and let him just copy-paste or even import export csv's with the fields. My timer wrote around 2.5 hours of training including the extra emails-phone calls. So I think this plugin with the right approach could be easy to use even for your clients.

## Final Thoughts
What we achieved. Everytime the user chooses a number of persons automatically we add the extra costs on the Total Price.

Also the data of the plugin are shown in our cart page and checkout. We extended the checkout process of the website with data from the plugin by added some custom forms but this could be an another Project.

Last Updated - 14/1/2022

