#!/bin/sh
cd /Users/interesting1113/Downloads/node-blog/blog/logs
cp access.log $(date + %Y-%m-%d).access.log
echo "" > access.log