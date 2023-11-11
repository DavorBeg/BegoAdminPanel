import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.less']
})
export class MainBoardComponent {
  constructor(public router: Router) {


  }
  NavigateTo(route: string)
  {
    this.router.navigateByUrl(route);
  }
  size: NzButtonSize = 'large';
}
