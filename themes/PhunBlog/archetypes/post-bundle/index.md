+++
author = "之機"
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date | time.Format "2006-01-02T15:04:05+09:00" }}
+++
