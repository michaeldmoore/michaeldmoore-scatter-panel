# Scatter panel - for X/Y table data

<!-- 
[![CircleCI](https://circleci.com/gh/grafana/michaeldmoore-scatter-panel.svg?style=svg)](https://circleci.com/gh/grafana/michaeldmoore-scatter-panel)
-->
[![David Dependency Status](https://david-dm.org/grafana/michaeldmoore-scatter-panel.svg)](https://david-dm.org/grafana/michaeldmoore-scatter-panel)
[![David Dev Dependency Status](https://david-dm.org/grafana/michaeldmoore-scatter-panel/dev-status.svg)](https://david-dm.org/grafana/michaeldmoore-scatter-panel/?type=dev)
<!-- 
[![Known Vulnerabilities](https://snyk.io/test/github/grafana/michaeldmoore-scatter-panel/badge.svg)](https://snyk.io/test/github/grafana/michaeldmoore-scatter-panel)
[![Maintainability](https://api.codeclimate.com/v1/badges/1dee2585eb412f913cbb/maintainability)](https://codeclimate.com/github/grafana/michaeldmoore-scatter-panel/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1dee2585eb412f913cbb/test_coverage)](https://codeclimate.com/github/grafana/michaeldmoore-scatter-panel/test_coverage) -->

At last - a simple yet usable and flexible X/Y scatter plot panel for Grafana with a reasonable amount of configuration options.

The graph panel, built into Grafana is without doubt the deluxe, Rolls-Royce of all Granfana panels.  Unfortunately, it comes with some severe restrictions, specifically, it insists of 'time series' formatted data queries, where date (in increasing left-to-roght order etc.) MUST be displayed along the X axis.  Using the time series data format, Graph insists that the time dimension be retured as a UNIX timestamp, in a column called 'time'.  If you data fits this, then look no furthur - the Graph panel is what you need.

If, however, your data does not meet these requirements - say, for example, you have a table formatted data set - you need something else.

If you have the time and expertise, there is the plotly panel. Based on the well known plotly graph plotting library, I'm sure this can support many, many X/Y chart formats, though it does come with a number of assumptions regarding the data formats it can process.  The learning curve or plotly itself is pretty steep, so I set out to create this panel - scatter - to handle things more intuitively.

To start with, Scatter requires a table formatted data set with two or more numeric columns of data.

One of these can be assigned to the X axis, any other - or others - can be assigned to a series of Y axis values and the resulting data plotted as a series of dots.  Each series can optionally also show a regression line using one of a number of statistical best fits. More on these lines later.






