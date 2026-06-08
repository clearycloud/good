const data = {

서울:{
페트병:"라벨·뚜껑 제거 후 압착 배출",
캔:"내용물 비우고 배출",
비닐류:"이물질 제거 후 배출"
},

대전:{
페트병:"투명 페트병 별도 배출",
캔:"담배꽁초 제거 후 배출",
비닐류:"깨끗한 것만 재활용 가능"
},

부산:{
페트병:"압착 후 전용 수거함 배출",
캔:"내용물 제거 후 배출",
비닐류:"깨끗한 비닐만 배출"
},

대구:{
페트병:"찌그러뜨린 뒤 배출",
캔:"압착 후 배출",
비닐류:"세척 후 배출"
},

인천:{
페트병:"자동회수기 또는 전용함 배출",
캔:"내용물 제거 후 배출",
비닐류:"오염 제거 후 배출"
},

광주:{
페트병:"라벨 제거 후 배출",
캔:"이물질 제거 후 배출",
비닐류:"음식물 묻은 비닐은 일반쓰레기"
},

울산:{
페트병:"압착 후 배출",
캔:"내용물 제거 후 배출",
비닐류:"깨끗한 비닐만 배출"
},

제주도:{
페트병:"투명 페트병 따로 배출",
캔:"세척 후 배출",
비닐류:"이물질 제거 후 배출"
}

};

let currentRegion = "";

function selectRegion(region){

currentRegion = region;

document.getElementById("mapPage").style.display = "none";
document.getElementById("searchPage").style.display = "block";

document.getElementById("regionTitle").innerText =
region + " 분리수거 도우미";

}

function goBack(){

document.getElementById("searchPage").style.display = "none";
document.getElementById("mapPage").style.display = "block";

}

function searchItem(){

const keyword =
document.getElementById("searchInput").value.trim();

if(!keyword){
return;
}

const result =
data[currentRegion]?.[keyword];

if(result){

document.getElementById("result").innerHTML =
`<h3>${keyword}</h3><p>${result}</p>`;

}else{

document.getElementById("result").innerHTML =
"<p>검색 결과가 없습니다.</p>";

}

}
