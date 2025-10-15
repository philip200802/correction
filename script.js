const areaOfACircle= () =>{
    const pi= 22/7 
    const radius=   Number( prompt("Enter the Value the Radius"))
    const answer = (pi * (radius**2)) .toFixed(2)
    console.log(answer+ 'cm²')
}