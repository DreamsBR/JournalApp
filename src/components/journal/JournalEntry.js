import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture"
                style={{
                    backgroundSize:'cover',
                    backgroundImage:'url(https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg)'
                    
                }}
            >
            </div>
                <div className="journal__entry-body">
                    <p className="journal__entry-title">
                        Un nuevo día
                    </p>
                    <p className="journal__entry-content">
                        Exercitation nostrud est nisi adipisicing.
                    </p>
                </div>
                <div className="journal__entry-date-box">
                    <span>Monday</span>
                    <h4>28</h4>
                </div>
        </div>
    )
}
