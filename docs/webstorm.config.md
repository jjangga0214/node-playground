# WebStorm

## keymap
##### run
*Alt+S*, *Alt+D*
![keymap](./image/3.png)

## Live Templates
Settings -> Editor -> Live Templates -> Javascript
![Live Template 생성](./image/4.png)

### Principle
`$변수$` 로 커서를 잡는다. `$END$`는 가장 마지막 enter 키의 커서를 잡는다.

### *co* -> `console.log`
```js
console.log($END$);
```

### *tr* -> try catch block
```js
try{
    $END$
}catch(err){
    console.error(err);
}
```

### *im* -> importitems
이미 존재하는 live template 인 "importitems"를 추가로 복사하여 abbreviation 과 변수 posision을 바꾼다. 단 쌍따옴표 대신 따옴표를 사용한다.
```js
import {$ITEM$} from '$MODULE$';
$END$
```

### *imm* -> importdefault
```js
import $ITEM$ from '$MODULE$';
$END$
```

### *af* -> arrow function
```js
($PARAM$) => {
    $END$
}
```

### *ii* -> IIFE
```js
(($PARAM$) => {
    $END$
})($PARAM$);
```

### *iia* -> async IIFE
```js
(async ($PARAM$) => {
    $END$
})($PARAM$);
```

### *itera* -> for await
'reformat according to style' 을 선택하지 않는다.
```js
for await ($VARKIND$ $VAR$ of $ARRAY$) {
  $END$
}
```

### *afe*
Javascript Testing 에서 *af*(Inserts afterEach() block) 에 해당하던 것을 *afe* 로 바꾸어준다.

## run configuration
node 에 `--experimental-modules` 등과 같은 parameter 를 넣기 위해서 run configuration 설정이 필요하다.

##### 개별파일에 대한 설정은 다음과 같이 할 수 있다.
![개별파일설정](./image/1.png)

##### 프로젝트 안의 여러 파일들에 대한 공통 설정은 다음과 같이 할 수 있다.
![종합 템플릿 파일설정](./image/2.png)


