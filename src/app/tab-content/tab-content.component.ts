import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { AbstractFactoryComponent } from '../components/abstract-factory/abstract-factory.component';

@Component({
  selector: 'app-tab-content',
  standalone: true,
  imports: [CommonModule, MatTabsModule, AbstractFactoryComponent],
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabContentComponent {
  @Input() index: number = 1;
}
