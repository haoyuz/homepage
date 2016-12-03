#!/bin/bash

rsync -arv --exclude-from=./rsync-exclude.txt ./ haoyuz@portal.cs.princeton.edu:~/public_html_new

