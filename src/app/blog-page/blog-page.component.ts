

import {
  Component, OnDestroy, AfterViewInit, EventEmitter, Input, Output, OnInit, OnChanges,
  ChangeDetectorRef
} from '@angular/core';
import {BlogPost} from "../models";
import {Global} from "../Global.service";
import {Helper} from "../helper.service";
import {factoryOrValue} from "rxjs/operator/multicast";

declare let tinymce: any;
@Component({
  selector: 'text-editor',
  templateUrl: './blog-page.component.html',
})
export class BlogPageComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {


  @Input() elementId: string;
  @Input() value: any = "HELLLLL";
  @Output() onEditorKeyup: EventEmitter<any> = new EventEmitter<any>();
  blogInstance:BlogPost ;

  showEditorBoolean:boolean=true;
  showHTMLBoolean:boolean = false;
  blogContent = "";
  blogTitle="";
  editor;
  baseURL: string = '/';

  constructor(private ref : ChangeDetectorRef, private global:Global, private helper:Helper) {
  }

  ngOnInit() {
      //initialte blogContent here
  }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc help autoresize',
      ],

      autoresize_bottom_margin: 100,
      // toolbar: "codesample",
      toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      toolbar2: 'print preview media | forecolor backcolor emoticons | codesample help',
      image_advtab: true,
      advlist_bullet_styles: "square",  // only include square bullets in list
      skin_url: this.baseURL + 'assets/skins/lightgray',
      height : "480",
      setup: editor => {
        this.editor = editor;
        editor.on('change paste keyup', () => {
          const content = editor.getContent();
          this.blogContent = content;
          this.ref.detectChanges();
          // this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    (tinymce).remove(this.editor);
  }

  ngOnChanges(){
    //TODO: change this to ngModelChange
    if(this.editor)
    this.editor.setContent(this.blogContent);

  }
  showEditor(){
    this.showEditorBoolean=true;
    this.showHTMLBoolean = false;
    this.showEditorBoolean= true;

    if(this.editor)
    (tinymce).remove(this.editor);

    setTimeout(()=>{
      tinymce.init({
        selector: '#' + this.elementId,
        plugins: [
          'advlist autolink lists link image charmap print preview hr anchor pagebreak',
          'searchreplace wordcount visualblocks visualchars code fullscreen',
          'insertdatetime media nonbreaking save table contextmenu directionality',
          'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc help autoresize',
        ],

        autoresize_bottom_margin: 100,
        toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        toolbar2: 'print preview media | forecolor backcolor emoticons | codesample help',
        image_advtab: true,
        advlist_bullet_styles: "square",  // only include square bullets in list
        skin_url: this.baseURL + 'assets/skins/lightgray',
        height: "480",
        setup: editor => {
          this.editor = editor;
          editor.on('change paste keyup', () => {
            const content = editor.getContent();
            this.blogContent = content;
            this.ref.detectChanges();
            // this.onEditorKeyup.emit(content);
          });
        },
      });
      this.editor.setContent(this.blogContent);

    },0);
  }
  showHTML(){
    this.showEditorBoolean=false;
    this.showHTMLBoolean = true;
    (tinymce).remove(this.editor);
  }

  updateBlogOnServer(){
      // this.blogInstance.blogAuthor_id = this.global.getLoggedInUserDetails()._id;

      if(this.blogTitle==="")
      {
        alert('Title can not be empty');
        return;
      }
    this.blogInstance= {blogHTML:this.blogContent,blogTitle:this.blogTitle}
    console.log(this.blogInstance);
      //update on server now
    this.helper.makePostRequest('users/saveBlogPost',this.blogInstance).subscribe(
      (value)=>{console.log(value)},
      (err)=>{console.log(err)}
    );
  }


}
