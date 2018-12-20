# WebStorm

## keymap
##### run
*Alt+S*, *Alt+D*
![keymap](./image/3.png)

## Live Templates
Settings -> Editor -> Live Templates
![Live Template 생성](./image/4.png)

### Principle
* `$변수$` 로 커서를 잡는다. `$END$`는 가장 마지막 enter 키의 커서를 잡는다.
* 'Edit variables' 를 클릭해 변수들을 설정한다. 아래 table 에서 [x] 는 check(v) 하라는 의미이다.

### Javascript

#### *co* -> `console.log`
```js
console.log($END$);
```

#### *tr* -> try catch block
```js
try{
    $END$
}catch(err){
    console.error(err);
}
```

#### *im* -> importitems
* 이미 존재하는 live template 인 "importitems"를 추가로 복사한다.
* Edit Variable 도 "importitems"의 것으로 한다.
* 단 쌍따옴표 대신 따옴표를 사용한다.
* Edit Variable 에서 변수의 선택 순서(테이블의 위-> 아래 순)를 $MODULE$ 이 위에 오도록 조정한다.

```js
import {$ITEM$} from '$MODULE$';
$END$
```

#### *imm* -> importdefault
"importdefault" 을 복사하되, *im*과 같은 조건으로 한다.
```js
import $ITEM$ from '$MODULE$';
$END$
```

#### *af* -> arrow function
|  Name |        Expression       | Default value | Skip if defined |
|:-----:|:-----------------------:|:-------------:|:---------------:|
| PARAM | jsSuggestVariableName() |               |                 |

```js
($PARAM$) => {
    $END$
}
```

#### *ii* -> IIFE
Variable 설정은 *af* 와 같게 한다.
```js
(($PARAM$) => {
    $END$
})($PARAM$);
```

#### *iia* -> async IIFE
Variable 설정은 *af* 와 같게 한다.
```js
(async ($PARAM$) => {
    $END$
})($PARAM$);
```

#### *itera* -> for await
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

#### *afe*
Javascript Testing 에서 *af*(Inserts afterEach() block) 에 해당하던 것을 *afe* 로 바꾸어준다.

#### *ed*
```js
export default {
  $1$
}
```

### Vue

#### rl 
```html
<router-link to="">$LINK$</router-link>
```
#### *vlp*
```html
<router-link :to="{ name: '$NAME$' }">$LINK$</router-link>
```

#### *vlp*
```html
<router-link :to="{ name: '$NAME$', params: { $KEY$: $VALUE$ } }">$LINK$</router-link>
```

## run configuration
node 에 `--experimental-modules` 등과 같은 parameter 를 넣기 위해서 run configuration 설정이 필요하다.

##### 개별파일에 대한 설정은 다음과 같이 할 수 있다.
![개별파일설정](./image/1.png)

##### 프로젝트 안의 여러 파일들에 대한 공통 설정은 다음과 같이 할 수 있다.
![종합 템플릿 파일설정](./image/2.png)

## ESlint 
WebStorm 은 프로젝트의 node_modules 에서 eslint 를 인지하고, package.json 또는 .eslintrc.* 에서 설정을 인지한다. 그러나 기본적으로 `eslint --fix $FILE$` 을 적용하려면 에디터에서 마우스 우클릭 -> Fix ESlint Problems 를 클릭해야하기 때문에 해당 설정을 바꾸어 줄 필요가 있다. 기본적으로 단축키를 설정하는 방법과, 저장시 자동 적용(auto fix on save)되게 하는 2가지 방법 중 하나를 택하면 좋다.

### 단축키 지정
만약 WebStorm 의 기본인 자동저장을 사용하고 있다면, Ctrl + S 를 eslint 를 적용하는 단축키로 설정하는 것이 좋겠다. **Keymap**(*Settings -> Keymap*) 에서 eslint 를 검색하여 단축키를 지정해준다. 
![eslint shortcut config](./image/6.png)
 
### auto fix on save
WebStorm은 기본이 자동저장이지만, 이를 해제한 상태라면 명시적으로 저장(Ctrl + S 등) 이벤트 발생시 eslint 가 같이 적용되도록 하면 좋다. line 하나로 auto fix on save 를 설정할 수 있는 vscode 와 달리 WebStorm 에서는 save 이벤트 기반 작업을 설정한다. **File Watcher**(*Settings -> Tools -> File Watcher*) 에서 다음과 같이 설정하면 된다. 
![File Watcher 설정](./image/5.png)
위 스크린샷에서는 Vue 파일을 기준으로 설정했으나, javascript 파일도 추가해준다.

##### 인자
* $ProjectFileDir$/node_modules/.bin/eslint
* --fix $FilePath$
* $FileDir$





