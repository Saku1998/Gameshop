import React,{useState, useEffect} from 'react';
import './App.css';
import { gamesData } from './items/items';
import Navbar from './components/Navbar';
import Recommended from './components/Recommended';
import AllGames from './components/AllGames';
import OnPromotion from './components/OnPromotion';
import SortedGames from './components/SortedGames';
import Checkout from './components/Checkout';

type gameType  = {
  title: string;
  price: number;
  platforms: string[];
  image: string;
  discount: any[];
  type: string;
  year: number;
}[]




function App() {
  const [incart, setInCart] = useState<number>(0)
  const [data, setData] = useState<gameType>(gamesData as gameType)
  const [sortedData, setSortedData] = useState(data)
  const [myCart, setMyCart] = useState([] as any)
  const [openCart, setOpenCart] = useState<boolean>(false)
  const [check, setCheck] = useState<number>(0)
  const [notSorted, setNotSorted] = useState<boolean>(true)
  const [forSortInfo, setForSortInfo] = useState({specific:'', type: ''})
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    sortData(forSortInfo.type, forSortInfo.specific)
  }, [forSortInfo.specific])


  function addToCart(title: string, price: number){
    let newArray = myCart
    let added = false
    for(const item of myCart){
      if(item[0] == title){
        item[1] += 1
        setCheck(prev => prev + price)
        added = true
      }
    }
    if(added == false){
      newArray.push([title, 1, price])
      setCheck(prev => prev + price)
    }
    setMyCart(newArray)
    setInCart(prev => prev + 1)
  }

  function openClose(){
    setOpenCart(priv => !priv)
  }


  function closeCart(){
    setOpenCart(false)
  }


  function main(trueorfalse: true | false){
    setNotSorted(trueorfalse)
  }


  function setInfoType(typeInfo: string){
    setForSortInfo(prev => {
      return {...prev, type: typeInfo}
    })
  }

  function setSpecificType(SpecificInfo: string){
    setForSortInfo(prev => {
      return {...prev, specific: SpecificInfo}
    })
    setNotSorted(false)
    
  }
  function sortData(type: string, specific: string){
    if(type == 'platforms'){
      setSortedData(prev => {
        return data.filter(item => {
          return item.platforms.includes(specific)
        })
      })
    }else if(type == 'type'){
      setSortedData(() => {
        return data.filter(item => {
          return item.type == specific
        })
      })
    }else if(type = 'year'){
      if(specific == 'older'){
        setSortedData(() => {
          return data.filter(item => {
            return item.year < 2019
          })
        })
      }else{
        setSortedData(() => {
          return data.filter(item => {
            return item.year == parseInt(specific)
          })
        })
      }
    }
    setTitle(type.toUpperCase())
  }

  function allDatesSorted(){
    setSortedData(data)
    setNotSorted(false)
    setTitle('ALL GAMES')
  }

  function onSaleSorted(){
    setSortedData(data.filter(item => {
      return item.discount[0]
    }))
    setNotSorted(false)
    setTitle('ON SALE')
  }

  function pay(){
    setMyCart([])
    setInCart(0)
  }

  return (
    <div className="App">
      <Navbar cartNumber={incart} opencart={openClose} closecart={closeCart} main={main} setSpeci={setSpecificType} setType={setInfoType} allData={allDatesSorted} onSale={onSaleSorted}/>
      <Checkout openCart={openCart} myCart={myCart} check={check} incart={incart} pay={pay}/>
      {
        notSorted 
        ? 
        <>
        <OnPromotion data={data} addToCart={addToCart}/>
        <Recommended games={data} additem={addToCart}/>
        <AllGames allgames={data} additem={addToCart}/>
        </>
        :
        <SortedGames title={title} sortedData={sortedData} addToCart={addToCart}/>
        
      }
    </div>
  );
}

export default App;
