import { useState, useEffect } from "react"
import "./calendar.css"

const images = [
  "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1528164344705-47542687000d",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
  "https://images.unsplash.com/photo-1482192505345-5655af888cc4" 
]

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [range, setRange] = useState({ start: null, end: null })
  const [notesList, setNotesList] = useState(["", "", "", "", ""])
  const [animate, setAnimate] = useState(false)
  
  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()

  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDay = new Date(year, month, 1).getDay()
  const prevMonthLastDay = new Date(year, month, 0).getDate()
  
  const prevMonthFill = Array.from({ length: firstDay }, (_, i) => prevMonthLastDay - firstDay + i + 1)
  const currentMonthDates = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const changeMonth = (direction) => {
    setAnimate(true)
    setTimeout(() => {
      setCurrentMonth(new Date(year, month + direction, 1))
      setAnimate(false)
    }, 200)
  }

  const handleDateClick = (day) => {
    const selected = new Date(year, month, day)
    if (!range.start || range.end) {
      setRange({ start: selected, end: null })
    } else if (selected < range.start) {
      setRange({ start: selected, end: range.start })
    } else {
      setRange({ ...range, end: selected })
    }
  }

  const isSelected = (day) => {
    if (!range.start) return false
    const date = new Date(year, month, day)
    if (range.start && !range.end) return date.getTime() === range.start.getTime()
    return date >= range.start && date <= range.end
  }

  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  const currentDayName = currentDate.toLocaleDateString("default", { weekday: "long" })
  const currentMonthName = currentDate.toLocaleDateString("default", { month: "long" })

  return (
    <div className="calendar-layout">
      {/* Main Container */}
      <div className={`main-container ${animate ? "fade" : ""}`}>
        <div className="wrapped-calendar">
          
          {/* Wall Hanging Hook */}
          <div className="hanging-point">
            <div className="nail"></div>
            <div className="hook-wire"></div>
          </div>

          {/* Spiral Binding Rings */}
          <div className="spiral-binding">
            {Array.from({ length: 22 }).map((_, i) => (
              <div key={i} className="spiral-ring"></div>
            ))}
          </div>

          {/* Large Image Section */}
          <div className="image-section">
            <img src={images[month]} alt="header" />
            <div className="month-bar">
              <button onClick={() => changeMonth(-1)}>&#9664;</button>
              <div>
                <h2>{currentMonth.toLocaleString("default", { month: "long" })}</h2>
                <p>{year}</p>
              </div>
              <button onClick={() => changeMonth(1)}>&#9654;</button>
            </div>
          </div>

          {/* Minimalist Card Layout */}
          <div className="calendar-card">
            <div className="blue-wave"></div>
            
            <div className="card-content">
              {/* Notes Section */}
              <div className="notes-column">
                <h3>Notes</h3>
                <div className="ruled-lines">
                  {notesList.map((note, idx) => (
                    <input 
                      key={idx} 
                      className="note-line" 
                      value={note} 
                      onChange={(e) => {
                        const updated = [...notesList];
                        updated[idx] = e.target.value;
                        setNotesList(updated);
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Calendar Grid Section */}
              <div className="grid-column">
                <div className="grid-header">
                  {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(d => (
                    <div key={d} className={`day-label ${d === 'SAT' || d === 'SUN' ? 'blue-text' : ''}`}>{d}</div>
                  ))}
                </div>
                <div className="days-grid">
                  {prevMonthFill.map(day => (
                    <div key={`prev-${day}`} className="day-cell faded">{day}</div>
                  ))}
                  {currentMonthDates.map(day => {
                    const dateObj = new Date(year, month, day);
                    const dayOfWeek = dateObj.getDay();
                    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
                    
                    const today = new Date();
                    const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
                    
                    return (
                      <div 
                        key={day} 
                        onClick={() => handleDateClick(day)}
                        className={`day-cell ${isWeekend ? 'blue-text' : ''} ${isSelected(day) ? 'active' : ''} ${isToday ? 'today' : ''}`}
                      >
                        {day}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar;