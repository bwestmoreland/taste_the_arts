/*
 * Geddy JavaScript Web development framework
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

var Main = function () {
  
  this.error = function (req, resp, params) {
    console.log(params.error);
    this.respond(params, {
      format: 'html'
    , template: 'app/views/main/error'
    });
  };

  this.notfound = function (req, resp, params) {
    console.log(params.error);
    this.respond(params, {
      format: 'html'
    , template: 'app/views/main/404'
    });
  };

  this.index = function (req, resp, params) {
    this.respond(params, {
      format: 'html'
    , template: 'app/views/main/index'
    });
  };

  this.tickets = function (req, resp, params) {
  	this.respond(params, {
  	  format: 'html'
  	, template: 'app/views/main/tickets'
  	});
  };

  this.sponsorships = function (req, resp, params){
    this.respond(params, {
      format: 'html'
    , template: 'app/views/main/sponsorships'
    });
  };

};

exports.Main = Main;


