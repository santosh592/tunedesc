import { Component, ChangeDetectorRef, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'
import { AutheticationService } from '../service/authentication.service'
import { ContentPublishService } from '../service/contentpublishpanel.service';
import { Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



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


  @Input()
  user: string = null;
  // authenticationService: AutheticationService;

  tags: string[] = ['html', 'Angular'];
  form: FormGroup;

  constructor(private router: Router, private contentpublishservice: ContentPublishService,
    private authenticationService: AutheticationService, private changeDetectorRef: ChangeDetectorRef, private fb: FormBuilder) {

  }
  @ViewChild('container', {
    static: true
  }) container: ElementRef;
  ngAfterViewInit(): void {

    this.editor = new MediumEditor(this.container.nativeElement, {

      paste: {
        /* This example includes the default options for paste,
           if nothing is passed this is what it used */
        forcePlainText: false,
        cleanPastedHTML: true,
        cleanReplacements: [],
        cleanAttrs: ['class', 'style', 'dir', 'name'],
        cleanTags: ['spandium '],
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
        sticky: true,
        updateOnEmptySelection: false
      }
    });
    this.editor

    //this.changeDetectorRef.detectChanges
  }
  ngOnChanges(change) {
    if (change.variable && change.variable.currentValue && this.editor) {
      this.editor
        .setContent(change.variable.currentValue);
    }
  }





  ngOnInit(): void {
    try {
      this.user = localStorage.getItem('username');
    } catch (error) {
      console.log("Did not get respose for userdetails")
    }
    this.contenttype = localStorage.getItem('posttype')

    this.form = this.fb.group({
      tag: [undefined],
    });
  }

  publishContent(): void {
    this.post = this.editor.origElements
    console.log(this.post)
    this.contentpublishservice.publishContent(this.post, this.title, this.userdetails["id"], this.contenttype).subscribe((data: any) => {

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





