import React from 'react'

export const NoteAppBar = () => {
    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>
            <div>
                <button className="btn btn-primary">
                    Picture
                </button>
                <button className="btn btn-primary">
                    Save
                </button>
            </div>
        </div>
    )
}
