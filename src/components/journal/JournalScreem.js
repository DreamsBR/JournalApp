import React from 'react'
import { NoteScreem } from '../notes/NoteScreem'
// import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

export const JournalScreem = () => {
    
    return (
        <div className="journal__mian-content">
            <Sidebar></Sidebar>

            <main>
            <NoteScreem/>
                {/* <NothingSelected/> */}
            </main>
        </div>
    )
}
