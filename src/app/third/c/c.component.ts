import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {
  value;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /*
  firstOutlet에 표시되는 CComponent 컴포넌트에서 secondOutlet에 표시되는 DComponent에
  라우팅을 통하여 값을 전달할 수 있습니다. 이는 DComponent의 구성을 CComponent가 제어할 수 있는
  또 하나의 방법을 획득함을 의미합니다. 이것은 전통적인 hide/show를 사용하는 대신
  최적화 된 뷰로드 방법에 대한 새로운 가능성을 열어줍니다.

  기술의 용도를 상상해보십시오.
  동일한 화면의 다른 데이터를 사용하여 동시에 다른보기를 표시 할 수 있습니다.
  더 많은 라우터아웃렛과 하위 라우트를 가질 수 있습니다.
  물론, 너무 많으면 자체적으로 큰 어려움이 야기 되겠죠.
  전체 화면을 다시로드하지 않고도 뷰의 데이터를 변경할 수도 있습니다.
  참조: http://onehungrymind.com/named-router-outlets-in-angular-2/
   */

  callFirst() {
    this.value = 1;
    this.router.navigate(['/third', { outlets: { 'secondOutlet': [this.value] } }]);
  }

  callSecond() {
    this.value = 2;
    this.router.navigate(['/third', { outlets: { 'secondOutlet': [this.value] } }]);
  }

}
