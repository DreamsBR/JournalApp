import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture"
                style={{
                    backgroundSize:'cover',
                    backgroundImage:'url(https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg)'
                    
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
