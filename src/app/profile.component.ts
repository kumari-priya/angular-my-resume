import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-profile',
  template: `<div>
<h4 class="header-text"><button type="button" class="btn btn-default btn-circle btn-lg"><i class="glyphicon glyphicon-user btn-white"></i></button>{{title}}</h4>
{{summary}}
  </div>`,
})
export class ProfileComponent{
  title ='Career Profile';
  summary = 'IT Specialist with 5 years of experience in Software/Web Development using Microsoft Dot Net Technology. Expert in development and maintenance of all the different phases of software development life cycle of the project. ';
}
