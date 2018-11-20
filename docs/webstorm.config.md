# WebStorm

## keymap
##### run
*Alt+S*, *Alt+D*
![keymap](./image/3.png)

## Live Templates
Settings -> Editor -> Live Templates -> Javascript
![Live Template 생성](./image/4.png)

### Principle
* `$변수$` 로 커서를 잡는다. `$END$`는 가장 마지막 enter 키의 커서를 잡는다.
* 'Edit variables' 를 클릭해 변수들을 설정한다. 아래 table 에서 [x] 는 check(v) 하라는 의미이다.

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
* 이미 존재하는 live template 인 "importitems"를 추가로 복사한다.
* Edit Variable 도 "importitems"의 것으로 한다.
* 단 쌍따옴표 대신 따옴표를 사용한다.
* Edit Variable 에서 변수의 선택 순서(테이블의 위-> 아래 순)를 $MODULE$ 이 위에 오도록 조정한다.

```js
import {$ITEM$} from '$MODULE$';
$END$
```

### *imm* -> importdefault
"importdefault" 을 복사하되, *im*과 같은 조건으로 한다.
```js
import $ITEM$ from '$MODULE$';
$END$
```

### *af* -> arrow function
|  Name |        Expression       | Default value | Skip if defined |
|:-----:|:-----------------------:|:-------------:|:---------------:|
| PARAM | jsSuggestVariableName() |               |                 |

```js
($PARAM$) => {
    $END$
}
```

### *ii* -> IIFE
Variable 설정은 *af* 와 같게 한다.
```js
(($PARAM$) => {
    $END$
})($PARAM$);
```

### *iia* -> async IIFE
Variable 설정은 *af* 와 같게 한다.
```js
(async ($PARAM$) => {
    $END$
})($PARAM$);
```

### *itera* -> for await
* 'reformat according to style' 을 선택하지 않는다.

|   Name  |           Expression           | Default value | Skip if defined |
|:-------:|:------------------------------:|:-------------:|:---------------:|
| VARKIND | jsSuggestDefaultVariableKind() | const         | [x]             |
| VAR     | jsSuggestVariableName()        | "o"           |                 |
| ARRAY   | jsArrayVariable()              | "array"       | [x]             |

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


