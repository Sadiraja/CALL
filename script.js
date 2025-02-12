const input=document.querySelector("#user-input");
const check=document.querySelector("#check-btn");
const clear=document.querySelector("#clear-btn");
const resultsdiv=document.querySelector("#results-div")
const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );
  function Check(input){
  
    if(!input){
        alert("Please provide a phone number");
        return;
      }
      
      const pTag = document.createElement('p');
      phoneRegex.test(input.value)
      ? (pTag.style.color = '#00471b')
      : (pTag.style.color = '#4d3800');
      let text=document.createTextNode(
        `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
      )
    pTag.appendChild(text)
    console.log(input)
      resultsdiv.appendChild(pTag);
    
  }
check.addEventListener("click",()=>{
         Check(input.value);
         input.value="";
  })
  input.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        Check(input.value);
        input.value="";
    }
    
})

clear.addEventListener("click",()=>{
    resultsdiv.textContent=""
})