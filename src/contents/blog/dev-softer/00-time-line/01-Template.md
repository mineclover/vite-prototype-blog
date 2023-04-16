```dataview
LIST "File Path: " + file.path
WHERE date(file.frontmatter.date) > date({{date}}) - dur(1 day) AND date(file.frontmatter.date) < date({{date}}) + dur(1 day)
```

[{{date}} daily tech note](src/contents/topic/tech-review/T{{date}}/T{{date}}.md)

## 한 일

## 목표 설정
