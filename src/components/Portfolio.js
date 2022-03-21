import React from 'react'
import Netflix from "../netflix.jpg"
import Airbnb from "../airbnb.png"
import Herbalblog from "../HerbalBlog.jpg"
import HerbalProduct from "../book.jpg"
import SpeedTyping from "../speed-typing.jpg"
const Portfolio = () => {
  return (
    <div className="portfolio-container bg-light" id="portfolio">
    <h3 className='portfolio-title'><a className='projects-link' href="">My Projects</a></h3>
    {/* Grid */}
    <div className="d-grid" id="">
        {/* row 1 */}
        
        <div className="row g-4 p-5">
            <div className="col-md-3">
                <a href="https://netflixclone-eissa.herokuapp.com" target="_blank">
                    <img className='project-img img-fluid mb-2' src={Netflix} alt="" />   
                </a>
            </div>
            <div className="col-md-3 d-flex flex-column align-content-center justify-content-center">
                <h3 className='project-title'>Netflix</h3>
                <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eos ullam adipisci, dolore nisi neque?</p>
                <div className='project__links'>
                    <a href="">
                        <i class="fa-solid fa-link project__link"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands fa-github project__link"></i>
                    </a>
                </div>
            </div>
            <div className="col-md-3">
                <img className='project-img img-fluid mb-2' src={HerbalProduct} alt="" />   
            </div>
            <div className="col-md-3 d-flex flex-column align-content-center justify-content-center">
                <h3 className='project-title'>Humble Herbal Products</h3>
                <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eos ullam adipisci, dolore nisi neque?</p>
                <div className='project__links'>
                    <a href="">
                        <i class="fa-solid fa-link project__link"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands fa-github project__link"></i>
                    </a>
                </div>
            </div>
         </div>
        <div className="row mt-2 g-4 p-5">
            <div className="col-md-3">
                <img className='project-img img-fluid mb-2' src={Airbnb} alt="" />   
            </div>
            <div className="col-md-3 d-flex flex-column align-content-center justify-content-center">
                <h3 className='project-title'>Airbnb</h3>
                <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eos ullam adipisci, dolore nisi neque?</p>
                <div className='project__links'>
                    <a href="">
                        <i class="fa-solid fa-link project__link"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands fa-github project__link"></i>
                    </a>
                </div>
            </div>
            <div className="col-md-3">
                <img className='project-img img-fluid mb-2' src={Herbalblog} alt="" />   
            </div>
            <div className="col-md-3 d-flex flex-column align-content-center justify-content-center">
                <h3 className='project-title'>Humble Herbal Blog</h3>
                <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eos ullam adipisci, dolore nisi neque?</p>
                <div className='project__links'>
                    <a href="">
                        <i class="fa-solid fa-link project__link"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands fa-github project__link"></i>
                    </a>
                </div>
            </div>
         </div>
        <div className="row mt-2 g-4 p-5">
            <div className="col-md-3">
               <a href="https://speed-typing-game-eissa.herokuapp.com" target="_blank">
                    <img className='project-img img-fluid mb-2' src={SpeedTyping} alt="" />   
               </a>
            </div>
            <div className="col-md-3 d-flex flex-column align-content-center justify-content-center">
                <h3 className='project-title'>Typing Game</h3>
                <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eos ullam adipisci, dolore nisi neque?</p>
                <div className='project__links'>
                    <a href="">
                        <i class="fa-solid fa-link project__link"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands fa-github project__link"></i>
                    </a>
                </div>
            </div>
            <div className="col-md-3">
                <img className='project-img img-fluid mb-2' src={Herbalblog} alt="" />   
            </div>
            <div className="col-md-3 d-flex flex-column align-content-center justify-content-center">
                <h3 className='project-title'>Placeholder</h3>
                <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eos ullam adipisci, dolore nisi neque?</p>
                <div className='project__links'>
                    <a href="">
                        <i class="fa-solid fa-link project__link"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands fa-github project__link"></i>
                    </a>
                </div>
            </div>
         </div>
    </div>
</div>
 
  )
}

export default Portfolio