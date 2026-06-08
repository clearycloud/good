const data = {

서울:{
플라스틱:"세척 후 종류별 배출",
캔:"내용물 비우고 배출",
음식물쓰레기:"물기 제거 후 음식물 전용봉투 배출",
페트병:"라벨·뚜껑 제거 후 압착 배출",
종이류:"테이프 제거 후 묶어 배출",
비닐류:"이물질 제거 후 배출"
},

대전:{
플라스틱:"세척 후 분리배출",
캔:"담배꽁초 제거 후 배출",
음식물쓰레기:"물기 제거 후 음식물봉투 사용",
페트병:"투명 페트병 별도 배출",
종이류:"상자 접어서 배출",
비닐류:"깨끗한 것만 재활용 가능"
},

부산:{
플라스틱:"음식물 제거 후 배출",
캔:"내용물 제거 후 배출",
음식물쓰레기:"RFID 음식물통 사용 지역 많음",
페트병:"압착 후 전용 수거함 배출",
종이류:"젖지 않게 묶어 배출",
비닐류:"깨끗한 비닐만 배출"
},

대구:{
플라스틱:"플라스틱 용기 세척 후 배출",
캔:"압착 후 배출",
종이류:"우유팩 별도 배출",
음식물쓰레기:"물기 제거 후 배출",
페트병:"찌그러뜨린 뒤 배출",
비닐류:"세척 후 배출"
},

인천:{
플라스틱:"세척 후 배출",
캔:"내용물 제거 후 배출",
종이류:"스프링 제거 후 배출",
음식물쓰레기:"음식물 전용용기 사용",
페트병:"자동회수기 또는 전용함 배출",
비닐류:"오염 제거 후 배출"
},

광주:{
플라스틱:"재질별 분리배출",
캔:"이물질 제거 후 배출",
음식물쓰레기:"뼈·껍데기 제외 후 배출",
페트병:"라벨 제거 후 배출",
종이류:"코팅 종이는 일반쓰레기 처리 지역 존재",
비닐류:"음식물 묻은 비닐은 일반쓰레기"
},

울산:{
플라스틱:"플라스틱 종류별 분리",
캔:"내용물 제거 후 배출",
음식물쓰레기:"물기 최대한 제거 후 배출",
페트병:"압착 후 배출",
종이류:"물기 없는 상태로 배출",
비닐류:"깨끗한 비닐만 배출"
},

제주도:{
플라스틱:"세척 후 배출",
캔:"세척 후 배출",
음식물쓰레기:"조개껍데기 제외 후 배출",
페트병:"투명 페트병 따로 배출",
종이류:"종이박스 접어서 배출",
비닐류:"이물질 제거 후 배출"
}

};

const aliases = {

플라스틱:"플라스틱",

캔:"캔",

페트병:"페트병",
생수병:"페트병",
음료수병:"페트병",

종이:"종이류",
종이류:"종이류",
박스:"종이류",
상자:"종이류",
종이박스:"종이류",
택배박스:"종이류",

비닐:"비닐류",
비닐류:"비닐류",
비닐봉지:"비닐류",
봉지:"비닐류",

음식물:"음식물쓰레기",
음식물쓰레기:"음식물쓰레기"

};

let currentRegion = "";

/* 포인트 불러오기 */
let points = Number(localStorage.getItem("points")) || 0;

/* 포인트 표시 */
function updatePoints(){

const pointDisplay =
document.getElementById("pointDisplay");

if(pointDisplay){
pointDisplay.innerText = points;
}

}

/* 지역 선택 */
function selectRegion(region){

currentRegion = region;

document.getElementById("mapPage").style.display = "none";
document.getElementById("searchPage").style.display = "block";

document.getElementById("regionTitle").innerText =
region + " 분리수거 도우미";

document.getElementById("result").innerHTML = "";

}

/* 뒤로가기 */
function goBack(){

document.getElementById("searchPage").style.display = "none";
document.getElementById("mapPage").style.display = "block";

}

/* 검색 */
function searchItem(){

const input =
document.getElementById("searchInput")
.value
.trim();

const keyword = aliases[input];

if(!keyword){

document.getElementById("result").innerHTML =
"<p>검색 결과가 없습니다.</p>";

return;
}

const result =
data[currentRegion][keyword];

document.getElementById("result").innerHTML =
`<h3>${keyword}</h3><p>${result}</p>`;

/* 포인트 +10 */
points += 10;

localStorage.setItem(
"points",
points
);

updatePoints();

}

/* 상점 열기 */
function openShop(){

document.getElementById("mapPage").style.display = "none";
document.getElementById("searchPage").style.display = "none";

document.getElementById("shopPage").style.display = "block";

}

/* 상점 닫기 */
function closeShop(){

document.getElementById("shopPage").style.display = "none";

document.getElementById("mapPage").style.display = "block";

}

/* 상품 교환 */
function exchangeReward(cost,name){

if(points < cost){

alert("포인트가 부족합니다.");

return;

}

points -= cost;

localStorage.setItem(
"points",
points
);

updatePoints();

alert(
name + " 상품이 교환되었습니다!"
);

}

/* 페이지 시작 시 포인트 표시 */
window.onload = function(){

updatePoints();

};
