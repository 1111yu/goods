import { useEffect, useState, useCallback } from "react";
import GoodsState from "./views/goods/GoodsState";
import Test from "./views/test/test";
import './app.css'

const mock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
          {
            expires: '2022-06-09 15:00:00',
            id:1,
            name: '移动固态硬盘（PSSD）T7灰色',
            describe: '365天质保 | 读写速度500M/S轻巧方便',
            rulingPrice: 160,
            oldPrice: 299
          },
          {
            expires: '2022-06-11 04:00:00',
            id:2,
            name: '移动机械硬盘（PSSD）T7灰色',
            describe: '365天质保 | 读写速度500M/S轻巧方便',
            rulingPrice: 99,
            oldPrice: 199
          }
        ])
    }, 500)
  })
}

function App() {
  const [goodsInfo,setGoodsInfo] = useState([])

  useEffect(()=>{
    mock().then(res=>{
      setGoodsInfo(res)
    })
  },[])

  const onChange = () => {
    window.location.href="https://goofish.com/"
  }

  const renderGoods = useCallback(()=>{
    return(
      <div>
        {
          goodsInfo.map(item=>(
            <GoodsState key={item.id} value={item} onChange={onChange}/>
          ))
        }
      </div>
    )
  },[goodsInfo])

  return (
    <div className="App">
      {renderGoods()}
      <Test/>
    </div>
  );
}

export default App;
