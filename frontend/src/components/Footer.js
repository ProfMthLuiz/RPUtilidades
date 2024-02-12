import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// CSS
import '../components/Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="sb__footer section__padding">
          <div className="sb__footer-links">
            <div className="sb__footer-links_div">
              <h4>Business</h4>
              <a href="#">
                <p>Employer</p>
              </a>
              <a href="#">
                <p>Employer</p>
              </a>
              <a href="#">
                <p>Employer</p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4>Resources</h4>
              <a href="#">
                <p>Employer</p>
              </a>
              <a href="#">
                <p>Employer</p>
              </a>
              <a href="#">
                <p>Employer</p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4>Partners</h4>
              <a href="#">
                <p>Employer</p>
              </a>
              <a href="#">
                <p>Employer</p>
              </a>
              <a href="#">
                <p>Employer</p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4>Company</h4>
              <a href="#">
                <p>Employer</p>
              </a>
              <a href="#">
                <p>Employer</p>
              </a>
              <a href="#">
                <p>Employer</p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4>Company</h4>
              <div className="socialmedia">
                <p>
                  <img alt="" />
                </p>
                <p>
                  <img alt="" />
                </p>
                <p>
                  <img alt="" />
                </p>
                <p>
                  <img alt="" />
                </p>
              </div>
            </div>
          </div>

          <div className="sb__footer-below">
            <div className="sb__footer-copyright">
              <p>@{new Date().getFullYear()} RP Utilidades</p>
            </div>
            <div className="sb__footer-below-links">
              <a href="">
                <div>
                  <p>Termos & Condições</p>
                </div>
              </a>
              <a href="">
                <div>
                  <p>Termos & Condições</p>
                </div>
              </a>
              <a href="">
                <div>
                  <p>Termos & Condições</p>
                </div>
              </a>
              <a href="">
                <div>
                  <p>Termos & Condições</p>
                </div>
              </a>
              <a href="">
                <div>
                  <p>Termos & Condições</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
