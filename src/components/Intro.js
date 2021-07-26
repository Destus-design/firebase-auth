import React from 'react'
import {Link} from "react-router-dom"
import "./Intro.css"
import Svg from './Mysvg.js'
import girl1 from '../images/girl1.jpg'
import Naturalhair from '../images/Naturalhair.jpg'
import Noodlesalad from '../images/Noodlesalad.jpg'
import premierleague from '../images/premierleague.jpg'



export default function Intro() {
    return (
        <div className="intro">
            <nav className="d-flex justify-content-md-between">
                <h2 className="nav-title">Jublog</h2>
                <ul className="d-flex">
                 <Link to="/trendx">
                   <li className=" setn">Trendx</li>
                   </Link>
                <Link to="/login">
                   <li className="setn">Login</li>
                 </Link>
                 <Link to="/signup">
                   <li className="nav-lin">Signup</li>
                 </Link>
                </ul>
            </nav>
            <section className='formbg'>
                <Svg />
                 <div className="formcont p-2">
                     <div className="container-fluid">
                         <div className="row">
                     <div className="col-sm-3 scard">
                         <div className='w-100 d-flex align-items-center justify-content-sm-center p-3'>
                         <img src={girl1} alt='' style={{maxWidth:"300px"}} height="400px"/>
                         </div>
                         <h4> Here are 10 basic easy-to do-home exercises for women to stay fit.</h4>
                         <p>
                         Regular exercise is the key to relieve stress and to promote good physical and mental health. Women who juggle between personal and professional responsibilities often fall short of time to pay attention to their fitness. But importance should be given to fitness from an early age itself to live a healthy and longer life. Routine exercises can help you treat health issues and can even avoid them, all you just need to do is take out 20-30 minutes a day for yourself.  You could do it by yourself, or even hire a fitness trainer to help you.
                         </p>
                     </div>
                     <div className="col-sm-3 shadow-lg scard">
                         <div className='w-100 d-flex align-items-center justify-content-sm-center p-3'>
                         <img src={Naturalhair} alt='' style={{maxWidth:"300px"}} height="400px"/>
                         </div>
                         
                        <h4>20 Ways To Care For Your Afro Textured Hair</h4> 
<ul>
    <li>
    Water Should Be Your Hair's Best Friend.</li>
    <li>
    Hydrate Your Afro Hair Always.</li>
    <li>
    Only Use Protective Styles.</li>
    <li>
    Use A Sulfate-Free Shampoo.</li>
    <li>
    Oiling Your Hair Frequently.</li>
    <li>
    Eat Healthy Meals For Your Hair Needs.</li>
    <li>
    Let Your Hair Breathe.</li>
    <li>
    Deep Condition Your Natural Hair.</li>
</ul>
                     </div>
                     <div className="col-sm-3 shadow-sm scard">
                     <div className='w-100 d-flex align-items-center justify-content-sm-center p-3'>
                         <img src={Noodlesalad} alt='' style={{maxWidth:"300px"}} height="400px"/>
                         </div>
                         <div>
                             <h4>Crunchy Asian Ramen Noodle Salad</h4> 
                             <p>
                             This colorful, crunchy salad is just what the doctor ordered when leafy-greens-based varieties are boring you.

Crunchy coleslaw mix and dried ramen noodles (swap in crunchy rice noodles for a less-processed option) are tossed with avocado for healthy fat, edamame for protein, and mango for vision-protecting beta-carotene.
                             </p>
                         </div>
                     </div>
                     <div className="col-sm-3 shadow scard">
                     <div className='w-100 d-flex align-items-center justify-content-sm-center p-3'>
                         <img src={premierleague} alt='' style={{maxWidth:"300px"}} height="400px"/>
                         </div>
                         <h4>Everton go second as Gylfi Sigurdsson's late winner breaks Sheffield United</h4>
                         <p>
                             This was not the kind of night that will take up too much time in Everton’s end-of-season highlights package but, in the end, such games could turn out to be the ones that matter most. If this season ends in success for Carlo Ancelotti and his side come May, then this miserable, rainswept evening in South Yorkshire will not be the most poignant memory. But that does not make Gylfi Sigurdsson’s decisive strike 10 minutes from time, or the ramifications of it, any less significant.
                         </p>
                     </div>
                         </div>
                     </div>
                 </div>
            </section>
        </div>
    )
}
