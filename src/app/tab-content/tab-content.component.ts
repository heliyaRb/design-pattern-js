import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-tab-content',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabContentComponent {
  @Input() index: number = 1;
}
