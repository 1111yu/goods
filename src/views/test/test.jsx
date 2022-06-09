const getUserInfoFunction = props => {
    let a = true
    if(a===true){
        a = false
        setTimeout(()=>{
            a = true
            console.log('true');
        },3000)
        return new Promise(res => {
            setTimeout(res(props),1000)
        })
    }else{
        console.log('false');
    }
}
getUserInfoFunction(1).then(res=>console.log(res))
getUserInfoFunction(2).then(res=>console.log(res))


const test = () => {

    


    const change = () => {

    }

    return(
        <>
         {/* <button onClick={change}>点我</button> */}
        </>
    )
}
export default test