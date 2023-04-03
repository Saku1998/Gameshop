import React, {useState} from 'react'
import {TiShoppingCart} from 'react-icons/ti'
import {AiTwotoneHome} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'


type NavbarProps = {
    cartNumber:number;
    opencart: () => void;
    closecart: () => void;
    main: (trueorfalse: true | false) => void;
    setSpeci: (SpecificInfo: string) => void;
    setType: (typeInfo: string) => void;
    allData: () => void;
    onSale: () => void;
}


export default function Navbar({cartNumber, opencart, closecart, main, setType, setSpeci, allData, onSale}: NavbarProps){

    const [show, setShow] = useState(false)
    const [showPlatformsNow, setShowPlatformsNow] = useState(false)
    const [showYearsNow, setShowYearsNow] = useState(false)
    const [showTypesNow, setShowTypesNow] = useState(false)
    const styles = {display: `${show ? 'flex' : 'none'}`} 
    const styles2 = {display: `${showPlatformsNow ? 'flex' : 'none'}`} 
    const styles3 = {display: `${showYearsNow ? 'flex' : 'none'}`}
    const styles4 = {display: `${showTypesNow ? 'flex' : 'none'}`} 

    function showOptions(){
        setShow(prev => !prev)
        setShowPlatformsNow(false)
        setShowYearsNow(false)
        setShowTypesNow(false)
        closecart()
    }
    function showPlatforms(){
        setShowPlatformsNow(prev => !prev)
        setShowYearsNow(false)
        setShowTypesNow(false)
        closecart()
        setType('platforms')
        
    }
    function showYears(){
        setShowYearsNow(prev => !prev)
        setShowPlatformsNow(false)
        setShowTypesNow(false)
        closecart()
        setType('year')
    }
    function showTypes(){
        setShowTypesNow(prev => !prev)
        setShowPlatformsNow(false)
        setShowYearsNow(false)
        closecart()
        setType('type')
    }

    function openCartCloseRest(){
        opencart()
        setShowPlatformsNow(false)
        setShowYearsNow(false)
        setShowTypesNow(false)
        setShow(false)
    }
    
    function allDataTypes(){
        allData()
        setShowPlatformsNow(false)
        setShowYearsNow(false)
        setShowTypesNow(false)
    }

    return (
        <nav className='navbar'>
            <h2 onClick={() => main(true)} className='logo'>Gameshop</h2>
            <div className='navbar-options'>
                <AiTwotoneHome className='navbar-options-option icon' onClick={() => main(true)}/>
                <TiShoppingCart className='navbar-options-option icon' onClick={openCartCloseRest}/>
                <FaBars className='navbar-options-option icon' onClick={showOptions}/>
                {cartNumber > 0 && <div className='navbar-options-counter'>{cartNumber}</div>}
            </div>
            <div className='options' style={styles}>
                <div className='option' onClick={allDataTypes}>ALL GAMES</div>
                <div className='option' onClick={showPlatforms}>PLATFORMS</div>
                <div className='option' onClick={showYears}>YEAR</div>
                <div className='option' onClick={showTypes}>TYPE</div>
                <div className='option' onClick={onSale}>ON SALE</div>
            </div>
            <div className='platforms' style={styles2}>
                <div className='option' onClick={() => setSpeci('PC')}>PC</div>
                <div className='option' onClick={() => setSpeci('XBOX S')}>XBOX S</div>
                <div className='option' onClick={() => setSpeci('Playstation 4')}>PLAYSTATION 4</div>
                <div className='option' onClick={() => setSpeci('Playstation 5')}>PLAYSTATION 5</div>
                <div className='option' onClick={() => setSpeci('XBOX ONE')}>XBOX ONE</div>
            </div>
            <div className='years' style={styles3}>
                <div className='option' onClick={() => setSpeci('2022')}>2022</div>
                <div className='option' onClick={() => setSpeci('2021')}>2021</div>
                <div className='option' onClick={() => setSpeci('2020')}>2020</div>
                <div className='option' onClick={() => setSpeci('2019')}>2019</div>
                <div className='option' onClick={() => setSpeci('older')}>OLDER</div>
            </div>
            <div className='types' style={styles4}>
                <div className='option' onClick={() => setSpeci('FPS')}>FPS</div>
                <div className='option' onClick={() => setSpeci('Action')}>ACTION</div>
                <div className='option' onClick={() => setSpeci('RPG')}>RPG</div>
                <div className='option' onClick={() => setSpeci('Shooter')}>SHOOTER</div>
                <div className='option' onClick={() => setSpeci('Strategy')}>STRATEGY</div>
                <div className='option' onClick={() => setSpeci('Indie')}>INDIE</div>
            </div>
        </nav>
    )
}