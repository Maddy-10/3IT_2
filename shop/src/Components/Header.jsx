import React from "react";

export default function Header() {
  return (
    <section>
    
      <div className="containers">
        <nav className="navbar  navbar-light bg-primary ">
          <div className="container">
            <a className="navbar-brand">
              <h1 id="head" className="text-light">Shop</h1>
            </a>

            <div className="btngrp">
              <div className="text-light fs-3 fw-semibold">User</div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
