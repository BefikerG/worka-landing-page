import { useState } from 'react'
import './App.css'

type Mode = {
  name: string
  desc: string
  color: string
  icon: string
}

const modes: Mode[] = [
  { name: 'Deep work', desc: 'Quiet, focused, no distractions.', color: '#d7e9e3', icon: '◌' },
  { name: 'Casual work', desc: 'Coffee, conversation, comfortable.', color: '#f4d5b7', icon: '☕' },
  { name: 'Creative', desc: 'Atmosphere, energy, new ideas.', color: '#e9d8f0', icon: '✦' },
  { name: 'Study', desc: 'Reliable, affordable, all day.', color: '#f1e6b9', icon: '⌁' },
  { name: 'Meet', desc: 'Space, tables, people.', color: '#d8e0f0', icon: '↗' },
]

const places = [
  { name: 'Kaffa House', area: 'Bole · Addis Ababa', score: '94', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85', tags: ['Quiet', 'Power', 'Coffee'], time: '12 min' },
  { name: 'The Workshop', area: 'Kazanchis · Addis Ababa', score: '88', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85', tags: ['Creative', 'Wi-Fi', 'Brunch'], time: '18 min' },
  { name: 'Mulu Studio', area: 'Piassa · Addis Ababa', score: '91', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85', tags: ['Social', 'Bright', 'Power'], time: '9 min' },
]

function Pin({ color = '#ee5b3c' }: { color?: string }) {
  return <span className="pin" style={{ background: color }}><span /></span>
}

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function App() {
  const [activeMode, setActiveMode] = useState(0)
  const [showWaitlist, setShowWaitlist] = useState(false)
  const [joined, setJoined] = useState(false)
  const [email, setEmail] = useState('')

  const selectedMode = modes[activeMode]

  function handleJoin(event: React.FormEvent) {
    event.preventDefault()
    if (email.trim()) setJoined(true)
  }

  return (
    <div className="site-shell">
      <header className="nav">
        <a className="brand" href="#top" aria-label="WORKA home"><span className="brand-mark">w</span><span>worka</span></a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#discover">Explore</a>
          <a href="#workability">How it works</a>
          <a href="#city">Cities</a>
        </nav>
        <button className="nav-cta" onClick={() => setShowWaitlist(true)}>Find a place <Arrow /></button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-dot" /> Local discovery, reimagined</p>
            <h1>Work somewhere<br /><em>that works</em> for you.</h1>
            <p className="hero-lede">The best place to work is different every day. WORKA helps you find yours — by how you want to feel, not just where you are.</p>
            <div className="hero-actions">
              <button className="button button-dark" onClick={() => setShowWaitlist(true)}>Find your place <Arrow /></button>
              <a className="text-link" href="#discover">See how it works <span>↓</span></a>
            </div>
            <div className="hero-note"><span className="avatar-stack"><i /><i /><i /></span><span><strong>1,240+</strong> people are finding their flow</span></div>
          </div>

          <div className="hero-product">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-map">
              <div className="map-grid" />
              <svg className="map-lines" viewBox="0 0 550 470" aria-hidden="true"><path d="M-20 350 C120 250 145 365 236 272 S375 130 580 175" /><path d="M20 82 C120 135 160 80 280 142 S380 325 570 345" /><path d="M290 -10 C270 100 315 160 274 280 S205 385 250 500" /></svg>
              <div className="map-label label-one">BOLE</div><div className="map-label label-two">KAZANCHIS</div><div className="map-label label-three">PIASSA</div>
              <div className="map-pin pin-main"><Pin /></div><div className="map-pin pin-side"><Pin color="#7f9a91" /></div><div className="map-pin pin-small"><Pin color="#f0b34f" /></div>
              <div className="hero-place-card">
                <img src={places[0].image} alt="Sunlit work tables at Kaffa House" />
                <div className="place-card-body"><div className="place-card-top"><span className="mini-label">NEAR YOU · 12 MIN</span><span className="score-pill">94</span></div><h3>Kaffa House</h3><p>Quiet coffee · Bole</p><div className="card-meta"><span>◒ Open until 9pm</span><span>⚡ Power</span></div></div>
              </div>
            </div>
            <div className="float-pill vibe-pill"><span className="pulse-icon">✦</span><span><small>YOUR VIBE</small><strong>{selectedMode.name}</strong></span><b>⌄</b></div>
            <div className="float-pill match-pill"><strong>94</strong><span><small>WORKABILITY</small><b>Great match</b></span></div>
          </div>
        </section>

        <section className="ticker" aria-label="WORKA features"><div className="ticker-track"><span>WORK WHERE YOU ARE</span><b>✳</b><span>FIND YOUR FLOW</span><b>✳</b><span>STARTING IN ADDIS</span><b>✳</b><span>BUILT FOR EVERYWHERE</span><b>✳</b><span>WORK WHERE YOU ARE</span><b>✳</b></div></section>

        <section className="problem section-pad" id="how-it-works">
          <div className="section-kicker">01 / A better question</div>
          <div className="problem-layout"><h2>Not just a place.<br /><span>The right place.</span></h2><div className="problem-text"><p>Some days need silence. Some need a strong coffee and a little background noise. Sometimes, the best meeting room is a sunny corner you have not found yet.</p><p className="muted">WORKA makes the invisible details visible — so you can choose with confidence.</p></div></div>
          <div className="principles"><div><span className="principle-num">01</span><strong>How do you<br />want to work?</strong></div><div><span className="principle-num">02</span><strong>What does<br />your day need?</strong></div><div><span className="principle-num">03</span><strong>Where will<br />you feel good?</strong></div></div>
        </section>

        <section className="discover section-pad" id="discover">
          <div className="section-heading"><div><div className="section-kicker">02 / Explore your city</div><h2>Let the day<br /><em>take you somewhere.</em></h2></div><p>Browse places through a more human lens. Every spot has a rhythm, a feeling, a reason to stay a little longer.</p></div>
          <div className="discovery-board">
            <div className="board-top"><span className="board-title"><span className="tiny-cross">+</span> Explore Addis</span><div className="board-search">⌕ <span>Search by neighborhood, place, or vibe</span></div><button className="filter-btn">Filters <span>3</span> ≡</button></div>
            <div className="board-content"><div className="place-list"><div className="results-meta"><span>NEARBY FOR YOU</span><b>12 places</b></div>{places.map((place, index) => <article className={`place-row ${index === 0 ? 'selected' : ''}`} key={place.name}><img src={place.image} alt="" /><div className="place-row-copy"><div className="row-name"><h3>{place.name}</h3><span className="row-score">{place.score}</span></div><p>{place.area}</p><div className="tag-row">{place.tags.map(tag => <span key={tag}>{tag}</span>)}</div><small>◷ {place.time} away</small></div></article>)}</div><div className="city-map"><div className="map-zoom"><button>+</button><button>−</button></div><div className="city-map-label label-a">BOLE</div><div className="city-map-label label-b">MESKEL SQ.</div><div className="city-map-label label-c">PIASSA</div><svg viewBox="0 0 700 550" aria-hidden="true"><path d="M-40 430 C90 350 90 430 200 260 S400 200 760 100" /><path d="M20 80 C110 100 180 160 260 150 S450 50 730 280" /><path d="M440 -30 C380 130 430 230 310 330 S300 460 370 600" /><path d="M-20 240 C130 220 170 300 280 270 S520 320 720 400" /></svg><div className="city-pin cp-a"><Pin /></div><div className="city-pin cp-b"><Pin color="#7f9a91" /></div><div className="city-pin cp-c"><Pin color="#f0b34f" /></div><div className="city-pin cp-d"><Pin color="#232a27" /></div><div className="map-location"><span>⌾</span> Use my location</div></div></div>
          </div>
        </section>

        <section className="workability section-pad" id="workability">
          <div className="workability-art"><div className="score-ring"><div><strong>92</strong><span>/100</span><small>WORKABILITY</small></div></div><span className="ring-note note-top">Wi-Fi <b>98</b></span><span className="ring-note note-right">Noise <b>91</b></span><span className="ring-note note-bottom">Power <b>96</b></span><span className="ring-note note-left">Comfort <b>89</b></span></div>
          <div className="workability-copy"><div className="section-kicker">03 / A new kind of rating</div><h2>Good is personal.<br /><em>Meet workability.</em></h2><p>WORKA scores places on what actually matters when you are trying to get something done. Not a star rating. A better match for your kind of day.</p><div className="score-legend"><div><span style={{background:'#ed6848'}} /> What the place offers</div><div><span style={{background:'#c8dcd3'}} /> What you need today</div></div><a href="#modes" className="text-link">Choose your mode <span>↗</span></a></div>
        </section>

        <section className="modes section-pad" id="modes">
          <div className="section-heading modes-heading"><div><div className="section-kicker">04 / Your day, your way</div><h2>What are you<br /><em>here to do?</em></h2></div><p>Tell us the feeling you are after. We will find the place to match it.</p></div>
          <div className="mode-grid">{modes.map((mode, index) => <button className={`mode-card ${index === activeMode ? 'active' : ''}`} key={mode.name} onClick={() => setActiveMode(index)} style={{'--mode-color': mode.color} as React.CSSProperties}><span className="mode-icon">{mode.icon}</span><span className="mode-index">0{index + 1}</span><h3>{mode.name}</h3><p>{mode.desc}</p><span className="mode-arrow"><Arrow /></span></button>)}</div>
        </section>

        <section className="city section-pad" id="city"><div className="city-copy"><div className="section-kicker">05 / First stop: Addis</div><h2>A city of<br /><em>many rhythms.</em></h2><p>Addis is our first city because it is already full of places where ideas happen — from the coffee ceremony to the corner table, from the unexpected conversation to the quiet afternoon.</p><div className="city-stat"><strong>01</strong><span>City, with more<br />on the way</span></div><a href="#discover" className="button button-light">Explore Addis <Arrow /></a></div><div className="city-photo"><div className="photo-overlay">ADDIS ABABA<br /><span>9° 01′ N · 38° 44′ E</span></div></div></section>

        <section className="community section-pad"><div className="community-top"><div className="section-kicker">06 / Better together</div><h2>Every place has<br /><em>a story to tell.</em></h2><p>WORKA gets smarter with every person who shares what they found: the good light, the reliable Wi-Fi, the table in the back that nobody knows about yet.</p></div><div className="community-cards"><div className="quote-card"><div className="quote-mark">“</div><p>Found my new Tuesday spot. The kind of quiet where your brain finally catches up with you.</p><div className="quote-person"><span className="avatar avatar-a" /> <span><b>Selam T.</b><small>Shared from Bole</small></span></div></div><div className="contribute-card"><span className="plus-circle">+</span><h3>Know a good spot?</h3><p>Help someone find their next favorite place.</p><button onClick={() => setShowWaitlist(true)}>Share a place <Arrow /></button></div><div className="mini-photo" /></div></section>

        <section className="final-cta section-pad"><div className="cta-decoration">✳</div><div className="section-kicker">THE NEXT PLACE IS OUT THERE</div><h2>Make today<br /><em>work differently.</em></h2><p>Join the early community discovering better ways to work, one place at a time.</p><button className="button button-light" onClick={() => setShowWaitlist(true)}>Join the waitlist <Arrow /></button><span className="cta-amharic">የምትሰራበትን ቦታ ያግኙ</span></section>
      </main>

      <footer className="footer"><a className="brand" href="#top"><span className="brand-mark">w</span><span>worka</span></a><span>Starting local. Built for everywhere.</span><span>© 2024 WORKA</span></footer>

      {showWaitlist && <div className="modal-backdrop" role="presentation" onClick={() => setShowWaitlist(false)}><div className="waitlist-modal" role="dialog" aria-modal="true" aria-labelledby="waitlist-title" onClick={event => event.stopPropagation()}><button className="modal-close" onClick={() => setShowWaitlist(false)} aria-label="Close">×</button>{joined ? <div className="joined-state"><span className="success-mark">✓</span><h2>You are on the list.</h2><p>We will let you know when WORKA is ready to help you find your next place.</p></div> : <><div className="section-kicker">EARLY ACCESS</div><h2 id="waitlist-title">Find your<br /><em>next place.</em></h2><p>Be first to explore WORKA in Addis Ababa.</p><form onSubmit={handleJoin}><label htmlFor="email">Your email</label><div className="email-row"><input id="email" type="email" required placeholder="you@example.com" value={email} onChange={event => setEmail(event.target.value)} /><button className="button button-dark" type="submit">Join <Arrow /></button></div></form></>}</div></div>}
    </div>
  )
}

export default App
