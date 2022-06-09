import { useMemo,useEffect,useState } from 'react'
import './goods.css'

const GoodsState = props => {
  // console.log(props);
  const {value} = props
  const [nowTime,setNowTime] = useState(new Date().getTime())
   
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setNowTime(new Date().getTime())
    },1000)
    return () => clearInterval(timer);
  },[nowTime])

  const addZero = num => num < 10 ? "0" + num : num

  const getTime = useMemo(()=>{
    let dt = new Date(value.expires).getTime()
    // let now = new Date().getTime()
    // console.log(dt,now);
    let a = dt-nowTime
    let s = parseInt(a/1000)
    let m = parseInt(s/60)
    let h = parseInt(m/60)
    let d = parseInt(h/24)
    // console.log('时间',`${s}秒，${m}分，${h}时，${d}天`);
    if(a>86400000){
      // console.log('超过24',a);
      return `${d}天${addZero(h-(24*d))}时`
    }else if(a<86400000 && a > 0){
      // console.log('倒计时',a);
      return `${addZero(h)}:${addZero(m-(h*60))}:${addZero(s%60)}`
    }else{
      return '活动结束'
    }
  },[nowTime,value.expires])

  

  return(
        <div className="goodsStateBox">
          <div className="goodsImg">
            <div className='goodsImgData'>{getTime}</div>
          </div>
          <div className='goodsStateInfo'>
            <h1>{value.name}</h1>
            <p className='goodsStateP'>{value.describe}</p>
            <p className='goodsStatePrice'>
              <span>当前价￥</span>
              <span className='goodsStateRulingPrice'>{value.rulingPrice}</span>
              <span className='goodsStateOldPrice'>￥{value.oldPrice}</span>
            </p>
            <div className='goodsStateInfoButton' onTouchEnd={props.onChange}>去出价</div>
          </div>
        </div>
  )
}

export default GoodsState