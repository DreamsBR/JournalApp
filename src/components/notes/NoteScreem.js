import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreem = () => {
    return (
        <div className="notes__main-content">
            <NoteAppBar/>
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                />
                <textarea
                    placeholder="What happend today"
                    className="notes__text-area"
                >                                    
                </textarea>

                <div className="notes__images">
                    <img 
                        src="https://pbs.twimg.com/profile_images/1306405889520398338/qrTnGJSa_400x400.jpg"
                        alt="imagen"
                    />
                </div>

            </div>
        </div>
    )
}
