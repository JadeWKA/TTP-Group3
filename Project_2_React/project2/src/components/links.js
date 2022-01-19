import React, { useState } from 'react'
import airline from '../resources/images/qatar.png'


export default function Link() {

    // VINCE PAMOLARCO -- using useState to define functions
    const [cls, setCls] = useState({
        vince: "page",
        aung: "carousel-wrapper"
    })

    // VINCE PAMOLARCO -- using this functions to close/open buttons
    const updateCls = () => {
        setCls(previousState => {
            return { ...previousState, vince: "page2", aung: "carousel-wrapper2" }
        });
    }

    // VINCE PAMOLARCO -- using this functions to close/open buttons
    const updateCls2 = () => {
        setCls(previousState => {
            return { ...previousState, vince: "page", aung: "carousel-wrapper" }
        });
    }

    return <div>
        {
            <main>


            {/* <!-- VINCE PAMOLARCO - START of Section of whole page --> */}

            <div className={cls.vince} id="page" >


                {/* <!-- VINCE PAMOLARCO - START of Section for header --> */}
                <div className="header">

                You are being redirected to: Qatar Airways<br/>

                </div>
                {/* <!-- VINCE PAMOLARCO - END of Section for options --> */}

                {/* <!-- VINCE PAMOLARCO - START of Section for airline --> */}
                <div className="airline">
                

                    <   img src ={airline} className="airline"></img>



                </div>
                {/* <!-- VINCE PAMOLARCO - END of Section for seating --> */}

                {/* <!-- VINCE PAMOLARCO - START of Section for summary --> */}
                <div className="summary">

                    <a href="https://www.qatarairways.com/app/fifa2022/?iid=ALL24232430" target="_blank" rel="noopener">

                        <button className='buy' > 
                        CONTINUE
                        </button>

                    </a>

                <button className='close' onClick={updateCls2}> 
                    GO BACK
                </button>
                <br/>


                </div>
                {/* <!-- VINCE PAMOLARCO - END of Section for summary --> */}

                .
            </div>

            {/* <!-- VINCE PAMOLARCO - END ofSection of whole page --> */}
           
                <div className={cls.aung} id="carousel-wrapper">
                <span id="item-1"></span>
                <span id="item-2"></span>
                <span id="item-3"></span>
                <span id="item-4"></span>
                <span id="item-5"></span>
                <span id="item-6"></span>
                <span id="item-7"></span>
                <span id="item-8"></span>

                {/* <!-- AUNG TUN - in the lines below are the 8 pictures in the carousel as well as the button included --> */}

                <div className="carousel-item item-1">
                
                
                {/* <!-- AUNG TUN - this line allows the user to go to the next or previous slide --> */}
                <a className="arrow arrow-prev" href="#item-8"></a>
                <a className="arrow arrow-next" href="#item-2"></a>
                
                {/* <!-- AUNG TUN - this is the button that leads the user to a page to buy tickets  --> */}

                <div className="container1">
                    <button className="btn-1" onClick={updateCls}>BUY TICKETS!</button>
                </div>

                </div>
                
                {/* <!-- AUNG TUN - the lines above are then repeated all the way up to item 8--> */}

                <div className="carousel-item item-2">
                
                
                <a className="arrow arrow-prev" href="#item-1"></a>
                <a className="arrow arrow-next" href="#item-3"></a>

                <div className="container1">
                    <button className="btn-1" onClick={updateCls}>BUY TICKETS!</button>
                </div>

                </div>
                
                <div className="carousel-item item-3">
                
                
                <a className="arrow arrow-prev" href="#item-2"></a>
                <a className="arrow arrow-next" href="#item-4"></a>

                <div className="container1">
                    <button className="btn-1" onclick="openThis()">BUY TICKETS!</button>
                </div>

                </div>

                <div className="carousel-item item-4">
                    
                    
                    <a className="arrow arrow-prev" href="#item-3"></a>
                    <a className="arrow arrow-next" href="#item-5"></a>

                    <div className="container1">
                    <button className="btn-1" onClick={updateCls}>BUY TICKETS!</button>
                    </div>
                </div>

                <div className="carousel-item item-5">
                    
                    
                    <a className="arrow arrow-prev" href="#item-4"></a>
                    <a className="arrow arrow-next" href="#item-6"></a>

                    <div className="container1">
                    <button className="btn-1" onClick={updateCls}>BUY TICKETS!</button>
                    </div>
                </div>

                <div className="carousel-item item-6">
                
                    
                    <a className="arrow arrow-prev" href="#item-5"></a>
                    <a className="arrow arrow-next" href="#item-7"></a>

                    <div className="container1">
                    <button className="btn-1" onClick={updateCls}>BUY TICKETS!</button>
                    </div>
                </div>

                <div className="carousel-item item-7">
                
                    
                    <a className="arrow arrow-prev" href="#item-6"></a>
                    <a className="arrow arrow-next" href="#item-8"></a>

                    <div className="container1">
                    <button className="btn-1" onClick={updateCls}>BUY TICKETS!</button>
                    </div>
                </div>

                <div className="carousel-item item-8">
                    
                    
                    <a className="arrow arrow-prev" href="#item-7"></a>
                    <a className="arrow arrow-next" href="#item-1"></a>

                    <div className="container1">
                    <button className="btn-1" onClick={updateCls}>BUY TICKETS!</button>
                    </div>
                </div>
            </div>

  
            </main>
        }

    </div>
}