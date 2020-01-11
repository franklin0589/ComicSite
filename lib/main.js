const comicdatabase = firebase.database().ref("comics");
const comicTitleContainer= document.getElementById("comicTitle")
const comicImage= document.getElementById("comicImage")
const comicDescbox= document.getElementById("comicDesc")
let index = 0;
comicArray=[];
comicdatabase.on("child_added", populate)
function populate(Data){
    const comic = Data.val();
    comicObject={
        Title: comic.comicTitle,
        Image: comic.comicImg,
        Desc: comic.comicDesc
    }
    comicArray.push(comicObject);
}

function displayRandom(){
    index = Math.floor(Math.random()*comicArray.length);
    console.log(comicArray)
    console.log(comicArray[0])
    comicTitleContainer.innerText=comicArray[index].Title;
    comicImage.src="comics/"+comicArray[index].Image;
    comicDescbox.innerText=comicArray[index].Desc;
}
function displaySequence(n){
    index+=n;
    comicTitleContainer.innerText=comicArray[index].Title;
    comicImage.src="comics/"+comicArray[index].Image;
    comicDescbox.innerText=comicArray[index].Desc;
}
