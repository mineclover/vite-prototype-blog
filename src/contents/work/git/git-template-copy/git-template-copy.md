---
date: 2023-05-01
modified: 2023-05-01
---

깃허브 백로그 생성, 프로젝트 생성 등 여러 작업을 수행할 때
템플릿은 복사가 되더라도 ( 저장소 기반으로 .github 폴더에 추가됨 )
label 이 복사가 안된다는 것을 알 수 있을 것이다

## 복사 방법

1. [https://docs.github.com/ko](https://docs.github.com/ko) 에서 RSET API 같은 걸로 라벨을 복붙하는 것 일단 만들어야하는 것부터 좀 난이도가 생긴다
   1. 사용성 챙기려면 인터페이스 만들어야할 듯 하다... 그래서 그다지 좋은 방법은 아닌 것 같다
   2. 하게 된다면 graphQL 을 사용해라 rest 를 봤었는데 가장 좋은 건 인 것 같다
2. [https://gist.github.com/Isaddo/7efebcb673a0957b9c6f07cd14826ea4](https://gist.github.com/Isaddo/7efebcb673a0957b9c6f07cd14826ea4) 에 댓글로 있는 기능을 쓰는 것

[라벨 수출업체](https://gist.github.com/AHilyard/a5b9376d0326fd658a8064d5569791a4) [라벨 수입업체](https://gist.github.com/AHilyard/5babebe06c30a48e07d949053e00bd5c)

두번째 방법이 친절하고 좋은 것 같다 아주 잘됨

- 2023/05/01 기준
  - [ ] 수정 필요
  - 설명이 복사되지 않는다
  - 삭제가 동작하지 않음
    - `Btn-link` > `.Button--danger.Button--small.Button`
  - 삭제를 미리하고 하면 깔끔하다 > 아래 코드는 삭제 생략한 코드

나는 템플릿을 아래같이 만들어둿다
[GitHub - mineclover/git-Template: 이슈 , 마일스톤 , 프로젝트 , 위키](https://github.com/mineclover/git-Template)

## 삭제 생략한 import-github-labels.js

```js import-github-labels.js
function updateLabel(label) {
  var flag = false;
  [].slice
    .call(document.querySelectorAll('.js-labels-list-item'))
    .forEach(function (element) {
      if (
        element.querySelector('.js-label-link').textContent.trim() ===
        label.name
      ) {
        flag = true;
        element.querySelector('.js-edit-label').click();
        element.querySelector('.js-new-label-name-input').value = label.name;
        element.querySelector('.js-new-label-description-input').value =
          label.description;
        element.querySelector('.js-new-label-color-input').value =
          '#' + label.color;
        element.querySelector('.js-edit-label-cancel ~ .btn-primary').click();
      }
    });
  return flag;
}

function addNewLabel(label) {
  document.querySelector('.js-new-label-name-input').value = label.name;
  document.querySelector('.js-new-label-description-input').value =
    label.description;
  document.querySelector('.js-new-label-color-input').value = '#' + label.color;
  document.querySelector('.js-details-target ~ .btn-primary').disabled = false;
  document.querySelector('.js-details-target ~ .btn-primary').click();
}

function addLabel(label) {
  if (!updateLabel(label)) {
    addNewLabel(label);
  }
}

// Paste your labels here
[].forEach(function (label) {
  addLabel(label);
});
```
