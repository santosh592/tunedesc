import { Component, ChangeDetectorRef, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'
import { AutheticationService } from '../service/authentication.service'
import { ContentPublishService } from '../service/contentpublishpanel.service';
import { Input } from '@angular/core';



declare var MediumEditor: any;
@Component({
  selector: 'app-mediumeditor',
  templateUrl: './mediumeditor.component.html',
  styleUrls: ['./mediumeditor.component.scss']

})

export class MediumeditorComponent implements AfterViewInit, OnInit {
  editor: any;
  post: string;
  title: string;
  userdetails: any;
  contenttype: string;
  userdata = {};
  // authenticationService: AutheticationService;


  constructor(private router: Router, private contentpublishservice: ContentPublishService,
    private authenticationService: AutheticationService, private changeDetectorRef: ChangeDetectorRef) {

  }
  @ViewChild('editable', {
    static: true
  }) editable: ElementRef;
  ngAfterViewInit(): void {

    this.editor = new MediumEditor(this.editable.nativeElement, {
      paste: {
        /* This example includes the default options for paste,
           if nothing is passed this is what it used */
        forcePlainText: false,
        cleanPastedHTML: true,
        cleanReplacements: [],
        cleanAttrs: ['class', 'style', 'dir', 'name'],
        cleanTags: ['meta'],
        unwrapTags: []
      },
      toolbar: {
        /* These are the default options for the toolbar,
           if nothing is passed this is what is used */
        allowMultiParagraphSelection: true,
        buttons: BUTTONS,
        diffLeft: 0,
        diffTop: -10,
        firstButtonClass: 'medium-editor-button-first',
        lastButtonClass: 'medium-editor-button-last',
        relativeContainer: null,
        standardizeSelectionStart: false,
        static: false,
        /* options which only apply when static is true */
        align: 'center',
        sticky: false,
        updateOnEmptySelection: false
      }
    });
    this.changeDetectorRef.detectChanges
  }


  ngOnInit(): void {
    this.authenticationService.getUserDetails(localStorage.getItem('token')).subscribe((data: any) => {
      this.userdetails = data.resposeobject;

    });
    this.contenttype = localStorage.getItem('posttype')
  }

  publishContent(): void {


    this.post = this.editor.origElements.innerText;

    this.contentpublishservice.publishContent(this.post, this.title, this.userdetails.id, this.contenttype).subscribe((data: any) => {

      this.userdata = data; console.log(data);

      console.log(data.resposeobject.id)
      if (data.resposeobject.id != null) {
        console.log("Got sucess response" + data.resposeobject.id)
        this.router.navigate(['/confirmpublish/' + data.resposeobject.id])
      }
    });

  }

}













const BUTTONS = [
  'bold'
  , 'italic'
  , 'underline'
  , 'subscript'
  , 'superscript'
  , 'anchor'
  , 'quote'
  , 'pre'
  , 'orderedlist'
  , 'unorderedlist'
  , 'indent'
  , 'justifyLeft'
  , 'justifyCenter'
  , 'justifyRight'
  , 'justifyFull'
  , 'h1'
  , 'h2'
  , 'h3'
  , 'h4'
  , 'h5'
  , 'h6'

]





