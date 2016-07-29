import {Component, OnInit} from "component";

@Component({
  selector: 'panel-component',
  templateUrl: 'template.html',
  styleUrls: ['styles.css'],
  directives: [Component],
  animations: [
    trigger('panelActive', [
      state('active', style({
        width: '*'
      }),
      transition('* <=> active', animate('100ms ease-out'))
    ])
  ]
})

export class PanelComponent implements OnInit{

  public modal: Modal;

  constructor(private service: Service){
    this.modal = {}
  }

  ngOnInit(){
    console.log('Hello');
  }
}
