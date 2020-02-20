import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { SidenavToggleService } from 'src/app/services/sidenavToggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('sideNavToggle') sideNavToggle = new EventEmitter<void>();

  constructor(
    private sidenavToggleService: SidenavToggleService
  ) { }

  ngOnInit() {
  }

  onToggleSideNav() {
    this.sideNavToggle.emit();
  }

  onToggleSideNavDesktopMode() {
    this.sidenavToggleService.toggleSidenav();
  }
}
