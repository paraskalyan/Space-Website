import React from 'react'

const Features = ({dia, mass, dist, orb, rot, atm}) => {
    return (
        <div className='bg-black flex text-white gap-6 text-[1.2rem] max-sm:text-[1rem] max-sm:gap-2 '>
            <div className='flex flex-col gap-3 max-sm:flex-1'>
                <div>Diameter</div>
                <hr />
                <div>Mass</div>
                <hr />
                <div>Distance from Sun</div>
                <hr />
                <div>Orbital Period</div> <hr />
                <div>Rotation Period</div> <hr />
                <div>Atmosphere</div> <hr />
            </div>
            <div className='flex flex-col gap-3 max-sm:flex-[2]'>
                <div>{dia}</div>
                <hr />
                <div>{mass}</div> <hr />
                <div>{dist}</div> <hr />
                <div>{orb}</div> <hr />
                <div>{rot}</div> <hr />
                <div>{atm}</div> <hr />
            </div>
        </div>
    )
}

export default Features