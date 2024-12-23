//your JS code here. If required.
let age=document.queryselector("#age")
let name=document.queryselector("#name")
let btn=document.queryselector("#btn")

age.addEventListener("click", (event)=>{

	const agePromise=new Promese((resolve,reject)=>{

		setTimeOut(()=>{
			
		if(parseInt(age)>18){
			resolve(`Welcome, ${name}. You can vote`)
		}

		else{
			reject(`Oh sorry ${name}. You aren't old enough.`)
		}
		},4000)

	})

	
    agePromise
        .then((message) => alert(message))
        .catch((error) => alert(error));
	
})


