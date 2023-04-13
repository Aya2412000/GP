import React from 'react'
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">حِــرفـه</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-box">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/">الخدمات</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">من نحن</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> تواصل معنا</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">مدونتنا</a>
        </li>

      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2 in-search" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
