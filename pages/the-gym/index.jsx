import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const index = () => {
  return (
    <main className="main the-gym">
        <Navbar />
        <h1 className="title">The Gym</h1>
        <h2 className="title">Current Personal Records</h2>
        <div className="pr-table">
            <div className="row">
                <h1 className="exercise">Deadlift</h1>
                <h1 className="weight">130kg</h1>
            </div>
            <div className="row">
                <h1 className="exercise">Squat</h1>
                <h1 className="weight">95kg</h1>
            </div>
            <div className="row">
                <h1 className="exercise">Bench Press</h1>
                <h1 className="weight">60kg</h1>
            </div>
        </div>
        <h2 className="title">My Programming</h2>
        <h3 className="title">Monday & Thursday - Pull</h3>
        <div className="programming-table">
            <div className="header-row">
                <h3 className="header">Exercise</h3>
                <h3 className="header">Sets</h3>
                <h3 className="header">Reps</h3>
            </div>
            <div className="content-row">
                <div className="content">Lat Pulldown</div>
                <div className="content">4</div>
                <div className="content">4-6</div>
            </div>
            <div className="content-row">
                <div className="content">Pull Up</div>
                <div className="content">3</div>
                <div className="content">4-6</div>
            </div>
            <div className="content-row">
                <div className="content">Seated Cable Row</div>
                <div className="content">3</div>
                <div className="content">4-6</div>
            </div>
            <div className="content-row">
                <div className="content">Barbell Bicep Curl</div>
                <div className="content">3</div>
                <div className="content">8-10</div>
            </div>
            <div className="content-row">
                <div className="content">Incline Dumbell Curl</div>
                <div className="content">3</div>
                <div className="content">8-10</div>
            </div>
            <div className="content-row">
                <div className="content">Hammer Curl</div>
                <div className="content">3</div>
                <div className="content">8-10</div>
            </div>
        </div>
        <h3 className="title">Tuesday & Friday - Legs</h3>
        <div className="programming-table">
            <div className="header-row">
                <h3 className="header">Exercise</h3>
                <h3 className="header">Sets</h3>
                <h3 className="header">Reps</h3>
            </div>
            <div className="content-row">
                <div className="content">Barbell Squats</div>
                <div className="content">3</div>
                <div className="content">4-6</div>
            </div>
            <div className="content-row">
                <div className="content">Romainian Deadlift</div>
                <div className="content">3</div>
                <div className="content">4-6</div>
            </div>
            <div className="content-row">
                <div className="content">Leg Press</div>
                <div className="content">3</div>
                <div className="content">4-6</div>
            </div>
            <div className="content-row">
                <div className="content">Calf Raises on Leg Press</div>
                <div className="content">3</div>
                <div className="content">8-10</div>
            </div>
            <div className="content-row">
                <div className="content">Leg Extention</div>
                <div className="content">3</div>
                <div className="content">8-10</div>
            </div>
            <div className="content-row">
                <div className="content">Seated Leg Curls</div>
                <div className="content">3</div>
                <div className="content">8-10</div>
            </div>
        </div>
        <h3 className="title">Wednesday & Sunday - Push</h3>
        <div className="programming-table">
            <div className="header-row">
                <h3 className="header">Exercise</h3>
                <h3 className="header">Sets</h3>
                <h3 className="header">Reps</h3>
            </div>
            <div className="content-row">
                <div className="content">Barbell Bench Press</div>
                <div className="content">3</div>
                <div className="content">4-6</div>
            </div>
            <div className="content-row">
                <div className="content">Incline Barbell Bench Press</div>
                <div className="content">3</div>
                <div className="content">4-6</div>
            </div>
            <div className="content-row">
                <div className="content">Dips</div>
                <div className="content">3</div>
                <div className="content">4-6</div>
            </div>
            <div className="content-row">
                <div className="content">Overhead Press</div>
                <div className="content">3</div>
                <div className="content">4-6</div>
            </div>
            <div className="content-row">
                <div className="content">Dumbell Laterial Raise</div>
                <div className="content">3</div>
                <div className="content">8-10</div>
            </div>
            <div className="content-row">
                <div className="content">Overhead Rope Extentions</div>
                <div className="content">3</div>
                <div className="content">8-10</div>
            </div>
            <div className="content-row">
                <div className="content">Rope Tricep Extentions</div>
                <div className="content">3</div>
                <div className="content">8-10</div>
            </div>
        </div>
        <Footer />
    </main>
  )
}

export default index