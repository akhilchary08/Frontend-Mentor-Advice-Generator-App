async function getQuote(){
    var id=Math.floor(Math.random()*224+1);
    console.log(id,"hehe");
    var obj=await getData(id);
    // console.log(obj);
    var advice=obj.advice;
    document.getElementById('heading').innerHTML = "ADVICE #" + id;
    document.getElementsByClassName('advice-text')[0].innerHTML = advice;
}

async function getData(id) {
    var advice;
    await axios.get('https://api.adviceslip.com/advice/'+id).then((res) => {
        // console.log(res);
        // id = res.data.slip.id;
        advice = res.data.slip.advice;
        console.log(id + advice);
        
    }).catch((err) => console.log(err));
    return {advice};
}

// $.get('https://api.adviceslip.com/advice',(data,status)=>{
//     data=JSON.parse(data);
//     console.log(data);
//     id = data.slip.id;
//     advice = data.slip.advice;
//     document.getElementById('heading').innerHTML = "ADVICE #" + id;
//     document.getElementsByClassName('advice-text')[0].innerHTML = advice;
// }) 