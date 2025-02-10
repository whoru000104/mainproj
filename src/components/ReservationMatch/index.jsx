"use client"

import { useState } from "react"
import "./ReservationMatch.css"

function ReservationMatch() {
  const [activeTab, setActiveTab] = useState("now")

  return (
    <div className="reservationmatch-container">
      <header className="reservationmatch-header">
        <div className="reservationmatch-header-content">
          <h1>예약내역</h1>
          <div className="reservationmatch-header-buttons">
            <button
              className={`reservationmatch-header-button ${activeTab === "now" ? "active" : ""}`}
              onClick={() => setActiveTab("now")}
            >
              진행 예약
            </button>
            <button
              className={`reservationmatch-header-button ${activeTab === "last" ? "active" : ""}`}
              onClick={() => setActiveTab("last")}
            >
              지난 예약
            </button>
          </div>
        </div>
      </header>

      {activeTab === "now" && (
        <div className="match-content">
          <div className="match-card">
            <div className="match-date">0000년 00월 00일</div>
            <div className="match-status">매칭중...</div>
            <div className="match-players">
              <div className="player">
                <div className="player-avatar">
                  <img src="/placeholder.svg?height=60&width=60" alt="강아지 사진" className="avatar-image" />
                </div>
                <div className="player-name">이름</div>
                <div className="player-detail">멍BTI</div>
              </div>
              <div className="reservationmatch-match-image">
                <img src="/reservationmatchicons/matching.png" alt="Matching" className="match-icon" />
              </div>
              <div className="trainer">
                <div className="trainer-avatar">
                  <img src="/placeholder.svg?height=60&width=60" alt="강아지 사진" className="avatar-image" />
                </div>
                <div className="trainer-name">이름</div>
                <div className="trainer-detail">MBTI</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "last" && <div className="reservationmatch-chat-message">지난예약 페이지 아직 미완성</div>}
    </div>
  )
}

export default ReservationMatch

