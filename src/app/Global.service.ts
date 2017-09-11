import {SiteUser} from "./models";
export class Global{
  private _loggedInUserDetails:SiteUser;
  private _seachQuery:string;
  // private _backendURL_heroku = 'https://ffi-backend.herokuapp.com';
  private _backendURL_heroku = 'http://localhost:3000';

  getSearchQuery(){
    return this._seachQuery;
  }
  setSearchQuery(str){
    this._seachQuery = str;
  }


  getLoggedInUserDetails() {
    // console.log(this._loggedInUserDetails);
    return this._loggedInUserDetails;
  }
  setLoggedInUserDetails(loggedInUser) {
    this._loggedInUserDetails = loggedInUser;
  }


  getbackendURL_heroku(){
    return this._backendURL_heroku;
  }
  setbackendURL_heroku(str){
    this._backendURL_heroku = str;
  }
}


