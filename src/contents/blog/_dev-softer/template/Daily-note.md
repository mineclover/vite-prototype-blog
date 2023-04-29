```dataview
LIST "File Path: " + file.path
WHERE date(file.frontmatter.date) > date({{date}}) - dur(1 day) AND date(file.frontmatter.date) < date({{date}}) + dur(1 day)
```

[{{date}} daily tech note](/topic/tech-review/T{{date}}/T{{date}})

## 한 일

## 목표 설정
