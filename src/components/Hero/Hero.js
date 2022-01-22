import React, {useState} from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn
  } from './HeroElements';

function Hero() {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <div>
            <HeroContainer>
                <Navbar toggle={toggle} />
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <HeroContent>
                    <HeroItems>
                        <HeroH1>Get Best Deals Now </HeroH1>
                        <HeroP>50% off every purchase!</HeroP>
                        <HeroBtn>Shop</HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </div>
    )
}

export default Hero
