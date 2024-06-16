// STYLESHEETS
import "./App.css"

// IMPORT HOOKS
import { useState, useEffect } from "react"


// APP MAIN COMPONENT
export default function App() {
  // COUNTERS - Tracks all data in app
  // Cookie count
  const [cookies, setCookies] = useState(parseInt(localStorage.getItem("currentCookies")) || 0)
  // Current CPS
  const [cps, setCps] = useState(parseInt(localStorage.getItem("currentCps")) || 0)


  // SAVE TO LOCAL STORAGE WHEN VALUES OF COUNTERS CHANGE
  // Put the state variable of each respective counter in the dependency array to get it to save when the value changes
  useEffect(()=>{
      localStorage.setItem("currentCookies", JSON.stringify(cookies))
      localStorage.setItem("currentCps", JSON.stringify(cps))
    }, [cookies, cps])


  // SET VALUE OF CURRENT COOKIES
  useEffect(()=>{
    const myInterval = setInterval(()=>{
      setCookies((currentCookies) => currentCookies + cps)
    }, 1000)

    return () => {
      clearInterval(myInterval)
    }
  }, [cps])


  // BUTTON FUNCTIONALITY
  // BIG COOKIE
  function increaseCookies() {
    setCookies(cookies + 1)
  }


  // BUY UPGRADE FUNCTION
  // Parameters will be given arguments in the .map for the fetched upgrades API.
  // Arguments used to reference values in the API.
  function buyUpgrade(cost, increase) {
    if (cookies >= cost) {
      setCps(cps + increase)
      setCookies(cookies - cost)
    }
    else {
      alert("You don't have enough cookies to purchase this upgrade!")
    }
  }


  // FETCH UPGRADES API
  const [upgrades, setUpgrades] = useState([])

  useEffect(()=>{
      async function fetchData() {
          const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades")
          const data = await response.json()
          setUpgrades(data)
      }
      fetchData()
  }, [])


  // DELETE SAVE DATA BUTTON
  function deleteSave() {
    let deleteClicked = confirm("Are you sure you would like to delete your save data? Press \"OK\" to confirm your choice and delete your save data.")
        if (deleteClicked === true){
            console.log("OK on delete button clicked")
            setCookies(0)
            setCps(0)
        } 
    }


  // JSX START
  return (
    <div id="app-container">

      {/* COOKIE SECTION */}
      <section className="cookie-section">
        <span />
        <div className="cookie-area">
          {/* COOKIE AREA */}
          <p id="cookie-count">{cookies} cookies!</p>
          <div id="cookie-box">
            <button onClick={increaseCookies} id="cookie-button" className="pointer" />
            <img id="sunburst" src="/images/sunburst.png"></img>
          </div>
          <p id="cps-count">Your upgrades are baking {cps} cookies per second!</p>
          <img src="/images/banner.png" id="banner" />
          {/* DELETE SAVE DATA BUTTON */}
          <button id="delete-save" className="pointer" onClick={() => deleteSave()}>Click here to delete your save data</button>
        </div>
        <img className="border" src="/images/section-border-2.png" />
      </section>

      {/* UPGRADE SHOP */}
      <section className="upgrades-section">
      <img className="upgrades-banner" src="/images/header-4.png" alt="Upgrade Shop" />
      {/* FOR TEST PURPOSES ONLY */}
      {/* <button onClick={() => buyUpgrade(0, 100)}>Buy Upgrade (Prototype Button)</button> */}
      {/* UPGRADES */}
      {upgrades.map((upgrade)=>(
                    <div onClick={() => buyUpgrade(upgrade.cost, upgrade.increase)} key={upgrade.id} className={`upgrade-div u${upgrade.id} pointer`}>
                      <h3>{upgrade.name}</h3>
                      <p>Cost: {upgrade.cost} cookies</p>
                      <p>CPS Increase: {upgrade.increase} </p>
                    </div>
                ))}
      </section>

    </div>
  )
  // JSX END
}