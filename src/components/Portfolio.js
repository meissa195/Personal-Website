import React from 'react'
import Netflix from "../netflix.jpg"
import Airbnb from "../airbnb.png"
import Herbalblog from "../HerbalBlog.jpg"
import HerbalProduct from "../book.jpg"
import SpeedTyping from "../speed-typing.jpg"
import Todo from "../todo.jpg"
const Portfolio = () => {
  return (
    <div className="portfolio-container bg-light" id="portfolio" style={
        {"scroll-margin-top": "50px"}
    }>
    <h3 className='portfolio-title'><a className='projects-link' href="">My Projects</a></h3>
    {/* Grid */}
    <div className="d-grid container-fluid" id="">
        {/* row 1 */}
        <div className="row mt-md-2 g-4 p-5">
            <div className="col-md-3">
                <a href="https://github.com/meissa195/netflix-clone" target="_blank">
                    <img className='project-img img-fluid mb-2' src={Netflix} alt="" />   
                </a>
            </div>
            <div className="col-md-3 d-flex flex-column align-content-center justify-content-center">
                <h3 className='project-title'>Netflix</h3>
                <p className="project-description">A website replica of the popular streaming service, Netflix. Developed the using HTML, CSS, and React, and incorporated the Movie Database API to give the application the familiar design and content of Netflix </p>
                <div className='project__links'>
                    <a href="https://drive.google.com/file/d/10MCBXqHNt9GHAcMCY8PQT8S0FoIACS-9/view?usp=sharing" target="_blank">
                        <i class="fa-solid fa-link project__link"></i>
                    </a>
                    <a href="https://github.com/meissa195/netflix-clone" target ="_blank">
                        <i class="fa-brands fa-github project__link"></i>
                    </a>
                </div>
            </div>
            <div className="col-md-3">
                <a href="https://github.com/meissa195/Product-Landing-Page" target="_blank">
                    <img className='project-img img-fluid mb-2' src={HerbalProduct} alt="" />   
                </a>
            </div>
            <div className="col-md-3 d-flex flex-column align-content-center justify-content-center">
                <h3 className='project-title'>Product Landing Page</h3>
                <p className="project-description">A mock product landing page, developed using Bootsrap and JavaScript to ensure responsive,  mobile-first-web-development design. Focused the build on an interactive yet polished design for better user experience with the objective of building clientele.</p>
                <div className='project__links'>
                    <a href="https://drive.google.com/file/d/1MgW3hJG63dwJE0SK2FE4W2-pJDn0pLK-/view?usp=sharing" target="_blank">
                        <i class="fa-solid fa-link project__link"></i>
                    </a>
                    <a href="https://github.com/meissa195/Product-Landing-Page" target="_blank">
                        <i class="fa-brands fa-github project__link"></i>
                    </a>
                </div>
            </div>
         </div>
        <div className="row mt-md-2 g-4 p-5">
            <div className="col-md-3">
                <a href="https://github.com/meissa195/Airbnb-Clone" target="_blank">
                    <img className='project-img img-fluid mb-2' src={Airbnb} alt="" />   
                </a>
            </div>
            <div className="col-md-3 d-flex flex-column align-content-center justify-content-center">
                <h3 className='project-title'>Airbnb</h3>
                <p className="project-description">A multi-page replica of the popular Airbnb lodging and experiences marketplace relying on HTML, CSS And ReactJS. Embeds the React Material UI and Range Date Picker libraries. </p>
                <div className='project__links'>
                    <a href="https://drive.google.com/file/d/19bKCmbepSbKeCeJaY04qz5VROB4FVEaL/view?usp=sharing" target="+blank">
                        <i class="fa-solid fa-link project__link"></i>
                    </a>
                    <a href="https://github.com/meissa195/Airbnb-Clone" target="_blank">
                        <i class="fa-brands fa-github project__link"></i>
                    </a>
                </div>
            </div>
            <div className="col-md-3">
                <a href="https://github.com/meissa195/Humble-Herbal-Blog" target="_blank">
                    <img className='project-img img-fluid mb-2' src={Herbalblog} alt="" />   
                </a>
            </div>
            <div className="col-md-3 d-flex flex-column align-content-center justify-content-center">
                <h3 className='project-title'>Humble Herbal Blog</h3>
                <p className="project-description">A full stack blog website using MongoDB/Mongoose, Node/Express, and React to deliver a fully functioning front-end to back-end application. Utilized the model-view-controller design pattern to better structure the program logic and limit code duplication.</p>
                <div className='project__links'>
                    <a href="https://drive.google.com/file/d/1LtjW5lIBZd-li75xKYxweIeSmAjDxK2D/view?usp=sharing" target="_blank">
                        <i class="fa-solid fa-link project__link"></i>
                    </a>
                    <a href="https://github.com/meissa195/Humble-Herbal-Blog" target="_blank">
                        <i class="fa-brands fa-github project__link"></i>
                    </a>
                </div>
            </div>
         </div>
        <div className="row mt-md-2 g-4 p-5">
            <div className="col-md-3">
               <a href="https://github.com/meissa195/Speed-Typing-Game" target="_blank">
                    <img className='project-img img-fluid mb-2' src={SpeedTyping} alt="" />   
               </a>
            </div>
            <div className="col-md-3 d-flex flex-column align-content-center justify-content-center">
                <h3 className='project-title'>Typing Game</h3>
                <p className="project-description">Designed a speed typing game using React hooks to implement smooth and effective application performance.</p>
                <div className='project__links'>
                    <a href="https://drive.google.com/file/d/18n8_Cw0kmreUem_CDWfkmHHhrXUYMn3N/view?usp=sharing" target="_blank">
                        <i class="fa-solid fa-link project__link"></i>
                    </a>
                    <a href="https://github.com/meissa195/Speed-Typing-Game" target="_blank">
                        <i class="fa-brands fa-github project__link"></i>
                    </a>
                </div>
            </div>
            <div className="col-md-3">
                <a href="https://github.com/meissa195/Todo-List" target="_blank">
                    <img className='project-img img-fluid mb-2' src={Todo} alt="" />       
                </a>
            </div>
            <div className="col-md-3 d-flex flex-column align-content-center justify-content-center">
                <h3 className='project-title'>To-Do List</h3>
                <p className="project-description">Developed a to-do list application using ReactJS. Utilized local storage to maintain list functionality for user experience.</p>
                <div className='project__links'>
                    <a href="https://drive.google.com/file/d/1SCy0V59yJwaS-kZsS4CeqGd7rXuUDzH2/view?usp=sharing" target="_blank">
                        <i class="fa-solid fa-link project__link"></i>
                    </a>
                    <a href="https://github.com/meissa195/Todo-List" target="_blank">
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