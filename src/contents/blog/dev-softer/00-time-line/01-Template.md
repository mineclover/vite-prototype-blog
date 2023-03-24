```dataview
LIST "File Path: " + file.path
WHERE date(file.frontmatter.date) > date({{date}}) - dur(1 day) AND date(file.frontmatter.date) < date({{date}}) + dur(1 day)
```

## 한 일

## 목표 설정
