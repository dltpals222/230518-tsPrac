let dummyText = '아버지가방에들어가신다';

//* 1. 임의의 텍스트가 정돈되지 않은 상태로 주어졌습니다.
//* 2. 한글의 특성상 단어의 띄어쓰기를 통해 뜻을 바로 정립해야 합니다.
//* 3. 아버지가 방에 들어가신다. "아버지"라는 단어와 "방"이라는 단어는 명사입니다.

let reFineNounData = ["아버지","방"];

//* 4. ~가 라는 문법, 이,가 라는 뜻은 '보격 조사'라는 어려운 문법입니다.
//* 4. "이"나, "가"를 기준으로 앞에있는 문자열은 매우 높은 확률로 명사입니다.

//* 5. ~에 라는 문법, 이,에 라는 뜻은 '부사격 조사' 라는 어려운 문법입니다.
//* 5. "에"를 기준으로 앞에 있는 문자열은 매우 높은 확률로 명사입니다.

let spacing = " ";
//* 6. 띄어쓰기를 통해 단어를 구분합니다.

/**
 * * spacingLetter()라는 함수를 제작하여,
 * * "아버지"께서 "방"에 들어가신 문장으로 띄어쓰기를 삽입하는 기능을 제작하세요.
 */

function spacingLetter(text, nounData, spacing){
  let result = "";
  let findText = (element, indexText) => {
    return indexText.slice(0,indexText.indexOf(element)+element.split("").length+1) + spacing + indexText.slice(indexText.indexOf(element)+element.split("").length+1)
  }
  nounData.map((element,i)=>{
    if(i === 0){
      result = findText(element,text)
    } else {
      result = result.slice(0,result.indexOf(element)+element.split("").length+1) + spacing + result.slice(result.indexOf(element)+element.split("").length+1)
    }
  })
  return result
}

const spacingResult = spacingLetter(dummyText,reFineNounData,spacing)
  

  console.log(spacingResult)

//* 위의 함수가 제대로 작동하려면 매우 복잡해지지만 간단한 형태로 작성해보시기 바랍니다.
//* 적정 수준에서 함수가 완료되었다면, 타입스크립트 방식으로 변환해보세요.