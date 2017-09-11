import {Component, OnInit} from "@angular/core";
// import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import {Http,Response} from "@angular/http";
import 'rxjs';
import { Observable } from "rxjs";
import {Helper} from "../helper.service";
import {Global} from "../Global.service";
// const URL = 'http://localhost:3000/upload';




@Component({
    selector: 'app-admin',
    templateUrl:'./admin.component.html',
    styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit{


    constructor (private http:Http, private helper:Helper, private global:Global){

    }

   URL = this.global.getbackendURL_heroku();

    // public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});



    ngOnInit(): void {
    //   this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
    //     form.append('imageAuthor_id',this.helper.getLoggedInUserDetails());
    //     form.append('imageAuthor_id',this.helper.getLoggedInUserDetails());
    //     return {fileItem, form};
    //     // form.append('someField2': 2});
    //   };
    //     //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    //     this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    //     //overide the onCompleteItem property of the uploader so we are
    //     //able to deal with the server response.
    //     this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
    //         console.log("ImageUpload:uploaded:", item, status, response);
    //     };
    //
    //
    //   // this.uploader.queue[0].upload();
}

}

















