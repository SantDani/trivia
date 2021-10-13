import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // console.log('log - go to game');
    // this.router.navigateByUrl('/home/game').then(null);
  }

  goToGame(): void {
    console.log('log - go to game');
    this.router.navigateByUrl('/game').then(null);
  }

  login(): void {
    console.log('log - login');
  }
}
