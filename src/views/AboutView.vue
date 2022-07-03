<template>
  <div>
    <h1 class="header1">About</h1>
    <div class="page-content page-container" id="page-content">
      <div class="padding">
        <div class="row container d-flex justify-content-center">
          <div class="col-lg-6 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">About This-Or-That-Webapp</h4>
                <p class="card-description">    Are you unsure if your shoes go with the pants? Or which dress suits you better? Post your choices as a voting
                  and let the This-or-That-community help you make a decision! <br> <br></p>
                <div class="mt-4">
                  <div class="accordion" id="accordion" role="tablist">
                    <div class="card">
                      <div class="card-header" role="tab" id="heading-1">
                        <h6 class="mb-0">
                          <a data-toggle="collapse" href="#collapse-1" aria-expanded="false" aria-controls="collapse-1" data-abc="true" class="collapsed">
                            About the creators
                          </a>
                        </h6>
                      </div>
                      <div id="collapse-1" class="collapse" role="tabpanel" aria-labelledby="heading-1" data-parent="#accordion" style="">
                        <div class="card-body">
                              <p class="mb-0">    Created by Furkan K. and Christopher L. as part of a project at HTW Berlin.</p>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" role="tab" id="heading-2">
                        <h6 class="mb-0">
                          <a class="collapsed" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2" data-abc="true">
                            About the code
                          </a>
                        </h6>
                      </div>
                      <div id="collapse-2" class="collapse" role="tabpanel" aria-labelledby="heading-2" data-parent="#accordion">
                        <div class="card-body">
                          <p>Source code links:</p>
                          <ol class="pl-3 mt-4">
                            <li>https://github.com/FurkanSelimKalkan/webtech-projekt-frontend</li>
                            <li>https://github.com/FurkanSelimKalkan/Webtech-Projekt</li>
                          </ol>
                          <br>
                          <p class="text-success">
                            <i class="mdi mdi-alert-octagon mr-2"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" role="tab" id="heading-3">
                        <h6 class="mb-0">
                          <a class="collapsed" data-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3" data-abc="true">
                            Contact
                          </a>
                        </h6>
                      </div>
                      <div id="collapse-3" class="collapse" role="tabpanel" aria-labelledby="heading-3" data-parent="#accordion">
                        <div class="card-body">
                          <p class="mb-0">Christopher.Leibiger@Student.HTW-Berlin.de & Furkan.Kalkan@Student.HTW-Berlin.de</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #f9f9fa
}

.flex {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto
}

@media (max-width:991.98px) {
  .padding {
    padding: 1.5rem
  }
}

@media (max-width:767.98px) {
  .padding {
    padding: 1rem
  }
}

.padding {
}

.card {
  box-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  -ms-box-shadow: none
}

.pl-3,
.px-3 {
  padding-left: 1rem !important
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #d2d2dc;
  border-radius: 0
}

.card .card-title {
  color: #000000;
  margin-bottom: 0.625rem;
  text-transform: capitalize;
  font-size: 0.875rem;
  font-weight: 500
}

.card .card-description {
  margin-bottom: .875rem;
  font-weight: 400;
  color: #76838f
}

.accordion .card:first-of-type {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.accordion .card {
  margin-bottom: .75rem;
  box-shadow: 0px 1px 15px 1px rgba(230, 234, 236, 0.35);
  border-radius: .25rem;
  border: none;
}

.accordion .card .card-header {
  background-color: transparent;
  border: none;
  padding: 2rem;
}

.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.accordion .card .card-header * {
  font-weight: 400;
  font-size: 1rem;
}

.mb-0, .my-0 {
  margin-bottom: 0 !important;
}

.accordion .card .card-header a {
  display: block;
  color: inherit;
  text-decoration: none;
  font-size: inherit;
  position: relative;
  -webkit-transition: color 0.5s ease;
  -moz-transition: color 0.5s ease;
  -ms-transition: color 0.5s ease;
  -o-transition: color 0.5s ease;
  transition: color 0.5s ease;
  padding-right: 1.5rem;
}

.accordion .card .card-header * {
  font-weight: 400;
  font-size: 1rem;
}

.accordion .card .card-header a[aria-expanded="false"]:before {
  content: "\f067";
}

.accordion .card .card-header a[aria-expanded="true"]:before {
  content: "\f068";
}

.accordion .card .card-header a:before {

  position: absolute;
  right: 7px;
  top: 0;
  font-size: 18px;
  display: block;
  font-family: FontAwesome;

  display: inline-block;
  padding-right: 3px;
  vertical-align: middle;
  font-size: .756em;
  color: #405189
}
.header1 {
  color: #0000008C;

  background-color: transparent;
  border: transparent;
  font-size: 40px;
  font-weight: bold;
}
</style>
