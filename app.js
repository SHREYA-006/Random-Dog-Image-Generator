let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{
    let link = await getimage();
    
    let img = document.querySelector("#result");
    img.setAttribute("src",link);
});
let url2="https://dog.ceo/api/breeds/image/random";

async function getimage(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
        

    }
    catch{
        console.log("Error");
        return "no image found";
    }  
}
getimage();